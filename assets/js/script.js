// https://codepen.io/rzim2082/pen/jrWYJW

/* Psuedo Code example
const updateRecords = (records) => {
    // records arg is an object literal - properties are id (int), prop
    ('tracks' or 'artist' - string)
    // other logic goes here...
};
*/

// these variables connect our code with the 'id' on the html page
// we can then manpulate the variables and it will manipulate the html
const image = document.getElementById("images");
const text = document.getElementById("text");
const buttonBox = document.getElementById('buttonBox');
const input = document.getElementById('input');
const startBtn = document.getElementById('start-btn');
const modal = document.getElementById('game-container');
const test = document.getElementById('good-bye-text');

// this is the variable for the player's name
var playersName;

// keep track of the character
// let state = {} // understand this point more

// removes the opening modal when the user clicks on it
function removeModal() {
    console.log(input.value);
    playersName = input.value;
    // if the user clicks on the button the modal is removed
    var myobj = document.getElementById("modal-box");
    myobj.remove(); 
    advanceTo(scenario.one)   
} 

// To display the how to play overlay
/*function helpOn() {
    document.getElementById("help-overlay").style.display = "block";
}

// To dismiss the how to play overlay
function helpOff() {
    document.getElementById("help-overlay").style.display = "none";
}

// To display the contact overlay
function contactOn() {
    document.getElementById("contact-overlay").style.display = "block";
}

// To dismiss the contact overlay
function contactOff() {
    document.getElementById("contact-overlay").style.display = "none";
}*/

// this changes the text and puts in the players name
var changeText = function(words) {
    text.innerHTML = words.replace("Your name", playersName);
};

// this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
    images.style.backgroundImage = "url(" + img + ")"; // 27/09/21 updated image url
}; 

// this looks at the numbe of options we have set and creates enough buttons
var changeButtons = function(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button class='btn' onClick=" + buttonList[i][1] + ">" 
        + buttonList[i][0] + "</button>";
    };
};

// 26/09/21 
// import this text from a separte doc
// Added a home element button (change to icon) removes modal and displays generic text
function removeHomeModal() {
    var myobj2 = document.getElementById("game-container");
    myobj2.remove();
    test.innerHTML = `${playersName}` 
    + `
    <div class="end-container"><p class="end-text">Bacon ipsum dolor amet boudin pastrami shankle ham fatback
    pork. Short ribs ham beef, filet mignon ball tip sirloin
    shankle t-bone drumstick. Ground round drumstick pancetta
    fatback alcatra.
    `
    + "<br></br>" 
    + `
    Bacon ipsum dolor amet boudin pastrami shankle ham fatback
    pork. Short ribs ham beef, filet mignon ball tip sirloin
    shankle t-bone drumstick. Ground round drumstick pancetta
    fatback alcatra.
    `
    + "<br></br>" 
    + `
    Bacon ipsum dolor amet boudin pastrami shankle ham fatback
    pork. Short ribs ham beef, filet mignon ball tip sirloin
    shankle t-bone drumstick. Ground round drumstick pancetta
    fatback alcatra.
    `
    + "<br></br>" 
    + `
    Bacon ipsum dolor amet boudin pastrami shankle ham fatback
    pork. Short ribs ham beef, filet mignon ball tip sirloin
    shankle t-bone drumstick. Ground round drumstick pancetta
    fatback alcatra.</p>
    `
    + "<br></br>" 
    // added a font awesome icon with a refresh page browser element
    + '<a onclick="setTimeout(function() { location.reload(true); });"><i class="fa fa-minus-circle"></i></a></div>';
    // Generic text about the failure of not saving the planet
    // Breaks added to text    
}

// 27/09/21 Prevents the user to go backwards (from stack overflow source)
window.history.forward();
function noBack() {
    window.history.forward();
}

// this is what moves the game along
var advanceTo = function(s) {
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
};

// this is the object that holds each scenario
const scenario = {
    one: {
        image: 'assets/images/image-4.jpg',  
        text: "Your name yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [
            ["Turn and run", "advanceTo(scenario.three)"],
            ["Enter The House", "advanceTo(scenario.four)"]
        ]
    },

    two: {
        image: 'assets/images/image-2.jpg',
        text: "Your name yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [
            ["Turn and run", "advanceTo(scenario.three)"],
            ["Enter The House", "advanceTo(scenario.four)"]
        ]
    },

    three: {
        image: 'assets/images/image-3.jpg',
        text: "Scenario 2",
        buttons: [
            ["continue", "advanceTo(scenario.four)"]
        ]
    },

    four: {
        image: 'assets/images/image-4.jpg',
        text: "Scenario 3",
        buttons: [
            ["Follow your Dog Downstairs", "advanceTo(scenario.five)"],
            ["Search the Kitchen for a knife", "advanceTo(scenario.five)"]
        ]
    },

    five: {
        image: 'assets/images/image-5.jpg',
        text: "TO BE CONTINUED...",
    },

};

// this is the code that starts the game
advanceTo(scenario.one);

/* 	// click to mute/unmute and also change the image 
  		// https: //stackoverflow.com/questions/5571285/how-can-i-change-image-source-on-click-with-jquery
  		$('.volume').click(function (e) {
  			if (audio.muted == true) {
  				audio.muted = false;

  				$('.volume').attr('src', 'assets/images/noun_volume.png');
  			} else if (audio.muted == false) {
  				audio.muted = true;
  				$('.volume').attr('src', 'assets/images/noun_mute.png');
  			}
  		});
          */



