var isNavDisplayed = false;

//The navigation bar slides in/out once the trigger is clicked
$( "#navbar-modal-trigger" ).click(function() {

	if (!isNavDisplayed){

		//Display navbar if it is not already displayed
		$( "#navbar-modal" ).animate(
	    	
	    	{ left: 0 },
		    'slow',
		    'swing',

		);

		 $("body").addClass("modal-open");

		isNavDisplayed = true;

	}

	else{

		//Hide navbar if it is already displayed
		$( "#navbar-modal" ).animate(
	    	
	    	{ left: '-130%' },
		    'slow',
		    'swing',

		);

		$("body").removeClass("modal-open");

		isNavDisplayed = false;

	}

});

//The navigation bar slides out to the left once a navigation link is clicked
$( "navbar-individual-link-container" ).click(function() {

	//Hide navbar
	$( "#navbar-modal" ).animate(
	    	
    	{ left: '-130%' },
	    'slow',
	    'swing',

	);

	$("body").removeClass("modal-open");

	isNavDisplayed = false;


});