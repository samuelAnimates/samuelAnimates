//<=============== GLOBAL STATUS TRACKING VARIABLES =============================>


var isNavDisplayed = false;
var isConnectDisplayed = false;
var isProjectModalDisplayed = false;


/*
DECLARE FUNCTIONS BELOW
*/

//<=============== HOMEPAGE MODAL DISPLAY/HIDE FUNCTIONS =========================>
function hideConnectModal(){

	//Hide Conncet Modal if it is already displayed
	$( "#connect-footer-modal" ).animate(
    	
    	{ right: '-110%' },
	    'slow',
	    'swing',

	);

	$("body").removeClass("modal-open");

	isConnectDisplayed = false;
	
};

function hideHomepageProjectModal(){

	//Hide navbar if it is already displayed
	$( "#homepage-project-details-modal" ).animate(
    	
    	{ bottom: '-110%' },
	    'slow',
	    'swing',

	);

	$("body").removeClass("modal-open");

	isProjectModalDisplayed = false;

};

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

};

function showHomepageProjectModal(){

	//Display navbar if it is not already displayed
	$( "#homepage-project-details-modal" ).animate(
    	
    	{ bottom: 0 },
	    'slow',
	    'swing',

	);

	 $("body").addClass("modal-open");

	isProjectModalDisplayed = true;

};

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

$( "#connect-modal-close-trigger").click(function(){

	hideConnectModal();

})

//The Project Details Modal slides in if a project icon or title is clicked
$( ".homepage-project-description-title" ).click(function() {

	showHomepageProjectModal();

});

$( "#homepage-project-details-modal-close-trigger" ).click(function() {

	hideHomepageProjectModal();

});

//Show message after Contact Form has been submitted
$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(1000);
  $('#gform').prepend('Thank you! Talk to you soon...');
});


