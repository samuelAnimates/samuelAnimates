var isNavDisplayed = false;
var isConnectDisplayed = false;

function hideConnectModal(){

	//Hide Conncet Modal if it is already displayed
	$( "#connect-footer-modal" ).animate(
    	
    	{ right: '-110%' },
	    'slow',
	    'swing',

	);

	$("body").removeClass("modal-open");

	isConnectDisplayed = false;
	
}

function hideNavBar(){

	//Hide navbar if it is already displayed
	$( "#navbar-modal" ).animate(
    	
    	{ left: '-130%' },
	    'slow',
	    'swing',

	);

	$("body").removeClass("modal-open");

	isNavDisplayed = false;

};

function showConnectModal(){

	//Display Connect modal if it is not already displayed
	$( "#connect-footer-modal" ).animate(
    	
    	{ right: 0 },
	    'slow',
	    'swing',

	);

	 $("body").addClass("modal-open");

	isConnectDisplayed = true;

}

function showNavBar(){

	//Display navbar if it is not already displayed
	$( "#navbar-modal" ).animate(
    	
    	{ left: 0 },
	    'slow',
	    'swing',

	);

	 $("body").addClass("modal-open");

	isNavDisplayed = true;

};



//The navigation bar slides in/out once the trigger is clicked
$( "#navbar-modal-trigger" ).click(function() {

	if (!isNavDisplayed && !isConnectDisplayed){

		showNavBar();

	}

	else if (!isNavDisplayed && isConnectDisplayed){

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

//Show message after Contact Form has been submitted
$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Thank you! Talk to you soon...');
});