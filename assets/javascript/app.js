var isNavDisplayed = false;
var isConnectDisplayed = false;
var focused = null;


function hideConnectModal(){

	$( "#connect-footer-modal" ).addClass("display-none");

	//Remove the CSS class that blocks the main page from scrolling
	$("body").removeClass("modal-open");
	$("main").unbind('click');
	isConnectDisplayed = false;
	
}

function hideNavBar(){


	$( "#navbar-modal" ).addClass("display-none");

	//Remove the CSS class that blocks the main page from scrolling
	$("body").removeClass("modal-open");
	$("main").unbind('click');
	isNavDisplayed = false;

}

function showConnectModal(){

	$( "#connect-footer-modal" ).removeClass("display-none");

	var offset = window.pageYOffset;

	//Add the CSS class that blocks the main page from scrolling
	$("body").addClass("modal-open");	
	window.scrollTo(0, offset);
	
	document.getElementById("Vimeo-link").focus();
	$("main").click(function(e){
		return false;
	});
	isConnectDisplayed = true;

}


function showNavBar(){

	$( "#navbar-modal" ).removeClass("display-none");

	var offset = window.pageYOffset;

	//Add the CSS class that blocks the main page from scrolling
	
	$("body").addClass("modal-open");
	window.scrollTo(0, offset);

	document.getElementById("highlights-navbar-link").focus();
	$("main").click(function(e){
		return false;
	});
	isNavDisplayed = true;

}
//<=============== END FUNCTION DECLARATIONS =========================>


//<=============== HOMEPAGE MODAL DISPLAY/HIDE FUNCTIONS =========================>


$(document).ready(function () {

	//An open modal closes if enter or x is pressed
	$(document).keydown(function (e) {
		
		if (e.keyCode === 27){
			if (isNavDisplayed){
				hideNavBar();
			}
			if (isConnectDisplayed){
				hideConnectModal();
			}
        }
        else if (e.keyCode === 13 && document.activeElement.id.endsWith("navbar-link")){
			if (isNavDisplayed){
				hideNavBar();
			}
			if (isConnectDisplayed){
				hideConnectModal();
			}
		}

	});

	//The home button acts as a JS link in modal pages.
	$( "#home-button" ).click(function() {
		window.location.replace("../index.html");
	});

	//The navigation bar slides in/out once the trigger is clicked
	$( "#navbar-modal-trigger" ).click(function() {

		if (!isNavDisplayed && !isConnectDisplayed){
			showNavBar();
		}

		else if (isConnectDisplayed && !isNavDisplayed){
			hideConnectModal();
			showNavBar();
		}

		else if (isNavDisplayed){
			hideNavBar();
		}


	});

	//The navigation bar slides back out to the left once a navigation link is clicked
	$( ".navbar-individual-link-container" ).click(function() {

		hideNavBar();

	});

	//The navigation bar slides back out to the left once a navigation link is clicked
	$( "#navbar-modal-close-trigger" ).click(function() {

		hideNavBar();

	});

	//The Connect modal slides in/out once the trigger is clicked
	$( "#connect-modal-trigger" ).click(function() {

		if (!isConnectDisplayed && !isNavDisplayed){
			showConnectModal();
		}

		else if (!isConnectDisplayed && isNavDisplayed){

			hideNavBar();
			showConnectModal();
		}

		else if (isConnectDisplayed){
			hideConnectModal();
		}
		

	});

	//Close the Connect modal when the close button is pressed
	$( "#connect-modal-close-trigger").click(function(){

		hideConnectModal();

	});


	//Show message after Contact Form has been submitted
	$('#gform').on('submit', function(e) {
		
		var formContent = {
			message: $("#entry\\.282615151").val(),
			firstName: $("#entry\\.1804477893").val(),
			lastName: $("#entry\\.779358458").val(),
			email: $("#entry\\.1973645689").val()
		};

        {
			$('#gform *').fadeOut(1000);
			$('#gform').prepend('Thank you! Talk to you soon~');
		}
	});

});