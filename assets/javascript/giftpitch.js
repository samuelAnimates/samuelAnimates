var questionsObject = {
    q1a: {
        question: "Who would the gift recipient spend a perfect weekend with?", //On the perfect weekend, will your gift recipient be with their squad or flying solo?
        answerA: {
            id: "Q1aA",
            text: "Their Squad"
        },
        answerB: {
            id: "Q1aB",
            text: "No One - They Fly Solo"
        }
    },
    q2a: {
        question: "Where is the gift recipient's perfect weekend likely to take place?", //During that perfect weekend with their friends, is your gift recipient more likely to be hanging out in the great outdoors or in the comfort of their own home?",
        answerA: {
            id: "Q2aA",
            text: "The Great Outdoors"
        },
        answerB: {
            id: "Q2aB",
            text: "The Comfort of Home"
        }
    },
    q2b: {
        question: "How far in advance does the gift recipient plan events?",
        answerA: {
            id: "Q2bA",
            text: "3 Weeks"
        },
        answerB: {
            id: "Q2bB",
            text: "3 Minutes"
        }
    },
    q3a: {
        question: "What does the gift recipient spend more time doing?",
        answerA: {
            id: "Q3aA",
            text: "Fidgeting"
        },
        answerB: {
            id: "Q3aB",
            text: "Daydreaming"
        }
    },
    q3b: {
        question: "Who would the gift recipient invite to their new home first?",
        answerA: {
            id: "Q3bA",
            text: "Friends"
        },
        answerB: {
            id: "Q3bB",
            text: "Family"
        }
    },
    q3c: {
        question: "Which would most likely be in the gift recipient's schedule?", //Is their schedule booked because they've made plans to meet someone new or because they'vemade plans on their own?
        answerA: {
            id: "Q3cA",
            text: "Meeting Someone New"
        },
        answerB: {
            id: "Q3cB",
            text: "Spending Time Alone"
        }
    },
    q3d: {
        question: "What is the gift recipient more drawn to?", //Does your gift recipient prefer the finer things in life or living the simple life?
        answerA: {
            id: "Q3dA",
            text: "The Finer Things in Life"
        },
        answerB: {
            id: "Q3dB",
            text: "The Simple Life"
        }
    },
    q4a: {
        question: "Which is more important to the gift recipient?",
        answerA: {
            id: "Q4aA",
            text: "Playing to Win"
        },
        answerB: {
            id: "Q4aB",
            text: "Everyone Having a Good Time"
        }
    },
    q4b: {
        question: "Whose feelings is the gift recipient more in tune with?", //Is your gift recipient more in tune with how they're feeling or with how others are feeling?
        answerA: {
            id: "Q4bA",
            text: "Their Own"
        },
        answerB: {
            id: "Q4bB",
            text: "Others"
        }
    },
    q4c: {
        question: "In a movie production, what role would the gift recipient prefer?",
        answerA: {
            id: "Q4cA",
            text: "The Star"
        },
        answerB: {
            id: "Q4cB",
            text: "The Director"
        }
    },
    q4d: {
        question: "Is the gift recipient more likely to make a mess or to clean it up?",
        answerA: {
            id: "Q4dA",
            text: "Make a Mess"
        },
        answerB: {
            id: "Q4dB",
            text: "Clean it Up"
        }
    },
    q4e: {
        question: "What is most likely the reason for the gift recipient to take a trip?", //Your gift recipient is taking a weekend trip. Is it more likely for business or for fun",
        answerA: {
            id: "Q4eA",
            text: "Business"
        },
        answerB: {
            id: "Q4eB",
            text: "Pleasure"
        }
    },
    q4f: {
        question: "Which does the gift recipient enjoy more?",
        answerA: {
            id: "Q4fA",
            text: "Losing Themselves"
        },
        answerB: {
            id: "Q4fB",
            text: "Finding Themselves"
        }
    },
    q4g: {
        question: "What does the gift recipient value more from an expensive purchase?",
        answerA: {
            id: "Q4gA",
            text: "Form"
        },
        answerB: {
            id: "Q4gB",
            text: "Function"
        }
    },
    q4h: {
        question: "The gift recipient's idea of the simple life involves which of the following?", //Does your gift recipient's idea of enjoying the simple life involve napping or learning something new?
        answerA: {
            id: "Q4hA",
            text: "Napping"
        },
        answerB: {
            id: "Q4hB",
            text: "Learning Something New"
        }
    }
};

//Array of personality objects with information to display on the results page and seed API calls
var personalitiesArray = [

    {
        key: "Q1aAQ2aAQ3aAQ4aA",
        name: "The Mover",
        description: "The Mover has a spark for life and a passion for action & adventure that can barely be contained — give a gift to help burn off some of that extra energy."
    },
    {
        key: "Q1aAQ2aAQ3aAQ4aB",
        name: "The Labrador Retriever",
        description: "The Labrador Retriever loves his/her friends, family, and bright summer days — give a gift that doubles as the perfect excuse for an afternoon at the park."
    },
    {
        key: "Q1aAQ2aAQ3aAQ4bA",
        name: "The Creator",
        description: "The Creator marches to the beat of his/her own drum, and everyone else stops to listen — give a gift that will help express himself/herself for all to hear."
    },
    {
        key: "Q1aAQ2aAQ3aBQ4bB",
        name: "The Instigator",
        description: "The Instigator is great at thinking on his/her feet in social situations, sometimes for good and sometimes for bad — give a gift to help him/her flex a social muscle."
    },
    {
        key: "Q1aAQ2aBQ3bAQ4cA",
        name: "The Trendsetter",
        description: "The Trendsetter is the life of the party and the center of attention everywhere — give a gift that will leave everyone in the room wanting to copy his/her look."
    },
    {
        key: "Q1aAQ2aBQ3bAQ4cB",
        name: "The Entertainer",
        description: "Friendly, outgoing, and inviting, the Entertainer's home is your home — give a gift that will help take his/her next dinner party to the next level."
    },
    {
        key: "Q1aAQ2aBQ3bBQ4dA",
        name: "The Inner Child",
        description: "Young or old, the Inner Child appreciates novelty — give a gift that will keep his/her youthful mind entertained."
    },
    {
        key: "Q1aAQ2aBQ3bBQ4dB",
        name: "The Nester",
        description: "Warm and kindhearted, the Nester likes to make sure everyone around feels comfy and cozy — give a gift that will help guests feel at ease."
    },
    {
        key: "Q1aBQ2bAQ3cAQ4eA",
        name: "The Executive",
        description: "A real go-getter, the Executive is always planning his/her next big move — give a gift to help keep track of all his/her exciting ventures."
    },
    {
        key: "Q1aBQ2bAQ3cAQ4eB",
        name: "The Butterfly",
        description: "Always on the move, the Butterfly loves to share his/her life with friends near and far — give a gift that will add style to his/her next social media update."
    },
    {
        key: "Q1aBQ2bAQ3cBQ4fA",
        name: "The Nomad",
        description: "The Nomad's heart lies in many places at once — give a gift that will add some pep to his/her step as he/she tracks it down."
    },
    {
        key: "Q1aBQ2bAQ3cBQ4fB",
        name: "The Hermit",
        description: "Peaceful and thoughtful, the Hermit enjoys time to explore his/her own mind — give a gift that will start his/her on another new journey."
    },
    {
        key: "Q1aBQ2bBQ3dAQ4gA",
        name: "The Magician",
        description: "Full of wit and curiosity, the Magician can make anything possible with the right tools or the right tech toys — give a gift to help expand his/her arsenal."
    },
    {
        key: "Q1aBQ2bBQ3dAQ4gB",
        name: "The Monarch",
        description: "Colorful and confident, the Monarch appreciates the finer things and life — give a gift that reflects his/her refined sense of style."
    },
    {
        key: "Q1aBQ2bBQ3dBQ4hA",
        name: "The Feline",
        description: "The Feline knows how to unwind with a good stretch, a good nap, and a good snack — give a gift they'll reach for on his/her next lazy Sunday."
    },
    {
        key: "Q1aBQ2bBQ3dBQ4hB",
        name: "The Nurturer",
        description: "The Nurturer has an uncanny ability to make something out of nothing — give a gift that will help seed his/her next project."
    }

];

function displayResults(personalityObject){
    
    var personalityDescription = $("<p></p>")
    personalityDescription.html(personalityObject.description);
    $("#questionnaire-header-title").html("Personality:");
    $("#questionnaire-header-description").html("");
    $("#question-div").html(personalityObject.name);
    $("#answers-row").prepend(personalityDescription);
    $("#answer-a-btn").remove();
    $("#answer-b-btn").remove();

}
    
    
function nextQuestion(questionId){
    var tempQuestion = eval("questionsObject." + questionId + ".question");
    var tempAnswerA = eval("questionsObject." + questionId + ".answerA.text");
    var tempAnswerADataAttr = eval("questionsObject." + questionId + ".answerA.id");
    var tempAnswerB = eval("questionsObject." + questionId + ".answerB.text");
    var tempAnswerBDataAttr = eval("questionsObject." + questionId + ".answerB.id");
    $("#question-div").html(tempQuestion);
    $("#answer-a-btn").html(tempAnswerA);
    $("#answer-a-btn").data( "answerId",  tempAnswerADataAttr);
    $("#answer-b-btn").html(tempAnswerB);
    $("#answer-b-btn").data( "answerId",  tempAnswerBDataAttr);

}

function loadQuestion1() {
    
        //User sees question 1
        nextQuestion("q1a");
        currentQuestionNumber = 0;
        currentQuestionNumber++;
        $("#questionnaire-header-title").html("Questionnaire");
        $("#questionnaire-header-description").html("Answer the following questions about the gift receiver.");
    
}
        
function clearResults(){

    //remove old buttons
    $("#answer-a-div").remove();
    $("#answer-b-div").remove();
    $("#questionnaire-header-title").html("");
    $("#questionnaire-header-description").html("");
    $("#answers-row").html("");

}


loadQuestion1();
//Global variable that will hold our current user's personality ID, which will correspond to a specific API call to display a curated set of gifts
var userPersonalityKey = "";
//Global variable that will hold our user's final personality assignment by storing the key string, unique to each object in our personalitiesArray
var userPersonalityAssignment;
//
var currentQuestionNumber = 1;

//Update progress bar, and display either next question or results when the user clicks on an answer choice in the personality quiz panel
$(document).on("click", ".JS-answer-choice", function(){
    
        var tempAnswerId = $(this).data("answerId");
    
        if ( userPersonalityKey.length < 16 ){
            userPersonalityKey = userPersonalityKey+tempAnswerId;
        }
    
        /*
        <===================================================================================================>
        User sees Question 2
        */
        if (tempAnswerId === "Q1aA"){
    
            nextQuestion("q2a");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q1a.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
    
            document.getElementById("bar").style.width = "25%";
    
        }
    
    
        else if (tempAnswerId === "Q1aB"){
    
            nextQuestion("q2b");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q1a.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "25%";
    
        }
    
        /*
        <===================================================================================================>
        User sees Question 3
        */
        else if (tempAnswerId === "Q2aA"){
    
            nextQuestion("q3a");
            currentQuestionNumber++;
    
    
            var buttons = (questionsObject.q2a.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "50%";
    
    
        }
    
        else if (tempAnswerId === "Q2aB"){
    
            nextQuestion("q3b");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q2a.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "50%";
    
        }
    
        else if (tempAnswerId === "Q2bA"){
    
            nextQuestion("q3c");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q2b.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "50%";
    
        }
    
        else if (tempAnswerId === "Q2bB"){
    
            nextQuestion("q3d");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q2b.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "50%";
    
    
        }
    
        /*
        <===================================================================================================>
        User sees Question 4
        */
        else if (tempAnswerId === "Q3aA"){
    
            nextQuestion("q4a");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3a.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
    
        }
    
        else if (tempAnswerId === "Q3aB"){
    
            nextQuestion("q4b");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3a.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
    
        }
    
        else if (tempAnswerId === "Q3bA"){
    
            nextQuestion("q4c");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3b.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
        }
    
        else if (tempAnswerId === "Q3bB"){
    
            nextQuestion("q4d");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3b.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
        }
    
        else if (tempAnswerId === "Q3cA"){
    
            nextQuestion("q4e");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3c.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
        }
    
        else if (tempAnswerId === "Q3cB"){
    
            nextQuestion("q4f");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3c.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
        }
    
        else if (tempAnswerId === "Q3dA"){
    
            nextQuestion("q4g");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3d.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
        }
    
        else if (tempAnswerId === "Q3dB"){
    
            nextQuestion("q4h");
            currentQuestionNumber++;
    
            var buttons = (questionsObject.q3d.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            document.getElementById("bar").style.width = "75%";
    
        }
    
        /*
        <===================================================================================================>
        User sees their final personality page
        */
        if (tempAnswerId === "Q4aA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[0];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4a.answerA.id); 
            //console.log(buttons); 
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4aB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[1];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4a.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4bA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[2];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4b.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4bB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[3];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4b.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4cA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[4];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4c.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4cB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[5];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4c.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4dA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[6];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4d.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4dB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[7];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4d.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
    
        }
    
        if (tempAnswerId === "Q4eA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[8];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4e.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4eB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[9];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
    
            var buttons = (questionsObject.q4e.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4fA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[10];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4f.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4fB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[11];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4f.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4gA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[12];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4g.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4gB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[13];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4g.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4hA" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[14];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4h.answerA.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
        }
    
        if (tempAnswerId === "Q4hB" && currentQuestionNumber === 4 ){
    
            userPersonalityAssignment = personalitiesArray[15];
            currentQuestionNumber = 0;
    
            //Progress Bar display at 100%
            document.getElementById("bar").style.width = "100%";
    
            //Dispay Personality Results
            displayResults(userPersonalityAssignment);
    
            var buttons = (questionsObject.q4h.answerB.id);
            //console.log(buttons);
            localStorage.setItem("choice", JSON.stringify(buttons));
    
            
        }
    
    });