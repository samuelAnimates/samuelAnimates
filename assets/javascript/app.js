//<=============== GLOBAL STATUS TRACKING VARIABLES =============================>

var isNavDisplayed = false;
var isConnectDisplayed = false;
var isProjectModalDisplayed = false;

//<=============== END GLOBAL VARIABLE DECLARATION =============================>

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

	$("#connect-modal-trigger").html("<h3>&laquo;[CONTACT]</h3>");

	//Remove the CSS class that blocks the main page from scrolling
	$("body").removeClass("modal-open");
	//$("html").removeClass("modal-open");

	isConnectDisplayed = false;
	
};

function hideHomepageProjectModal(){

	//Hide modal by animating its position down offscreen
	$( "#homepage-projects-modal" ).animate(
    	
    	{ top: '110%' },
	    'slow',
	    'swing',

	);

	//Hide modal footer by animating its position down offscreen (at the same rate as the rest of the modal)
	$( "#homepage-project-details-modal-footer" ).animate(
    	
    	{ bottom: '-110%' },
	    'slow',
	    'swing',

	);

	//Remove the CSS class that blocks the main page from scrolling
	$("body").removeClass("modal-open");
	$("html").removeClass("modal-open");

	isProjectModalDisplayed = false;

};

function hideNavBar(){

	//Hide navbar if it is already displayed
	$( "#navbar-modal" ).animate(
    	
    	{ left: '-130%' },
	    'slow',
	    'swing',

	);

	$("#navbar-modal-trigger").html("<h3>[INDEX]&raquo;</h3>");

	//Remove the CSS class that blocks the main page from scrolling
	$("body").removeClass("modal-open");
	$("html").removeClass("modal-open");

	isNavDisplayed = false;

};

function showConnectModal(){

	//Display Connect modal if it is not already displayed
	$( "#connect-footer-modal" ).animate(
		
		{right: 0},
	    'slow',
	    'swing',

	);


	$("#connect-modal-trigger").html("<h3>[CONTACT]&raquo;</h3>");

	//Add the CSS class that blocks the main page from scrolling
	$("body").addClass("modal-open");
	
	isConnectDisplayed = true;

};

function showHomepageProjectModal(nameStr){

	modalUrl="./modals/" + nameStr  +".html";
	$("#homepage-projects-iframe").attr("src", modalUrl);

	//Display navbar if it is not already displayed
	$( "#homepage-projects-modal" ).animate(
    	
    	{ top: '3.5em' },
	    'slow',
	    'swing',

	);

	$( "#homepage-project-details-modal-footer" ).animate(
    	
    	{ bottom: 0 },
	    'slow',
	    'swing',

	);

	//Add the CSS class that blocks the main page from scrolling
	$("body").addClass("modal-open");
	$("html").addClass("modal-open");

	isProjectModalDisplayed = true;

};

function showNavBar(){

	var offset = window.pageYOffset;

	//Display navbar if it is not already displayed
	$( "#navbar-modal" ).animate(
    	
    	{ left: 0 },
	    'slow',
	    'swing',

	);

	$("#navbar-modal-trigger").html("<h3>&laquo;[INDEX]</h3>");

	//Add the CSS class that blocks the main page from scrolling
	
	$("body").addClass("modal-open");
	window.scrollTo(0, offset);

	isNavDisplayed = true;

};
//<=============== END FUNCTION DECLARATIONS =========================>

/*
DECLARE FUNCTIONS BELOW
*/

//<=============== HOMEPAGE MODAL DISPLAY/HIDE FUNCTIONS =========================>

//The navigation bar slides in/out once the trigger is clicked
$(document).ready(function () {
	
	$(document).keyup(function (e) {
		
		if (e.keyCode == 27 || e.keyCode == 13){
			if (isNavDisplayed){
				hideNavBar();
			}
			if (isConnectDisplayed){
				hideConnectModal();
			}
			if (isProjectModalDisplayed) {
				hideHomepageProjectModal();
			}
		}
	});

	$( "#navbar-modal-trigger" ).click(function() {

		if (!isNavDisplayed && !isConnectDisplayed && !isProjectModalDisplayed){
			showNavBar();
		}

		else if (isConnectDisplayed && !isNavDisplayed){
			hideConnectModal();
			showNavBar();
		}

		else if (isProjectModalDisplayed && !isNavDisplayed){
			hideHomepageProjectModal();
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

		if (!isConnectDisplayed && !isNavDisplayed && !isProjectModalDisplayed){
			showConnectModal();
		}

		else if (!isConnectDisplayed && isNavDisplayed){

			hideNavBar();
			showConnectModal();
		}

		else if (!isConnectDisplayed && isProjectModalDisplayed){
			hideHomepageProjectModal();
			showConnectModal();
		}

		else if (isConnectDisplayed){
			hideConnectModal();
		}
		

	});

	//ENTER DESCRIPTION HERE
	$( "#connect-modal-close-trigger").click(function(){

		hideConnectModal();

	})


	//The Project Details Modal slides in if a project icon or title is clicked
	$( ".homepage-project-description-title" ).click(function(e) {

		var id = $(this).closest(".homepage-project-container").prop("id");
		var projectSectionIdSuffix = id.split('-')[1];
		showHomepageProjectModal(projectSectionIdSuffix);

	});

	$( ".homepage-project-icon" ).click(function() {
		
		var id = $(this).closest(".homepage-project-container").prop("id");
		var projectSectionIdSuffix = id.split('-')[1];
		showHomepageProjectModal(projectSectionIdSuffix);

	});


	$( "#homepage-project-details-modal-close-trigger" ).click(function() {

		hideHomepageProjectModal();

	});



	//Show message after Contact Form has been submitted
	$('#gform').on('submit', function(e) {
	$('#gform *').fadeOut(1000);
	$('#gform').prepend('Thank you! Talk to you soon...');
	});

});