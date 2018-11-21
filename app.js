(function () {  //function for watch's hardware button functionalities
    window.addEventListener("tizenhwkey", function (ev) { //adding an event listener for Tizen H/W
        var activePopup = null,
            page = null,
            pageid = "";

        if (ev.keyName === "back") {//checking if the event is a back event on the H/W button
            activePopup = document.querySelector(".ui-popup-active");
            page = document.getElementsByClassName("ui-page-active")[0];
            pageid = page ? page.id : "";

            if (pageid === "sectionChangerPage" && !activePopup) {    //checking if the button has been pressed on the main page
                try {
                    tizen.application.getCurrentApplication().exit(); //exit the application if condition met
                } catch (ignore) {
                }
            } else if(pageid==="confirmplacement" && !activePopup) {
            	 window.history.back(); 
            	 window.history.back(); 
            }
            else {
                window.history.back(); //if not then go back a page
            }
        }
    });
    console.log('Hello just before');
    
}());

(function(tau) {    //function to utilize the watch's dial functionality for scrolling through a list
    var page,
        list,
        listHelper;

    /* Check for a circular device */
    if (tau.support.shape.circle) {
        document.addEventListener('pagebeforeshow', function(e) {
            page = e.target;
            list = page.querySelector('.ui-listview');
            if (list) {
                /* Create SnapListView and binding rotary event using tau.helper */
                listHelper = tau.helper.SnapListStyle.create(list);
            }
         });

        document.addEventListener('pagebeforehide', function(e) {
            listHelper.destroy();
        });
    }
}(tau));    //function did not work as expected but we will revisit it again

function onExit() { //function which gets called when the exit button on the main page is pressed
    tizen.application.getCurrentApplication().exit();   //exit the application
}



function getlocationarray(){
	
}

(function() {
    var page = document.getElementById('sectionChangerPage'),
        sectionChanger = document.getElementById('sectionChanger');

    page.addEventListener('pagebeforeshow', function() {
        tau.widget.SectionChanger(sectionChanger, {
            orientation: 'horizontal',
            fillContent: false
        });
    });
})();

