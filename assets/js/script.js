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

// this is the variable for the player's name
var playersName;

// keep track of the character
//let state = {} // understand this point more

// removes the opening modal when the user clicks on it
function removeModal() {
    console.log(input.value);
    playersName = input.value;
    // if the user clicks on the button the modal is removed
    var myobj = document.getElementById("modal-box");
    myobj.remove(); 
    advanceTo(scenario.one)   
} 

// this changes the text and puts in the players name
var changeText = function(words) {
    text.innerHTML = words.replace("Your name", playersName);
};

// this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
    image.style.backgroundImage = "<img src='" + img + "' alt='myimage'>";
};

// this looks at the numbe of options we have set and creates enough buttons
var changeButtons = function(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" 
        + buttonList[i][0] + "</button>";
    };
};

// this is what moves the game along
var advanceTo = function(s) {
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
};

// this is the object that holds each scenario
const scenario = {
    one: {
        image: 'assets/images/senku.jpg', 
        text: "Your name yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [
            ["Turn and run", "advanceTo(scenario.three)"],
            ["Enter The House", "advanceTo(scenario.four)"]
        ]
    },

    two: {
        image: 'assets/images/tanjiro.jpg',
        text: "Your name yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
        buttons: [
            ["Turn and run", "advanceTo(scenario.three)"],
            ["Enter The House", "advanceTo(scenario.four)"]
        ]
    },

    three: {
        image: 'assets/images/senku.jpg',
        text: "Scenario 2",
        buttons: [
            ["continue", "advanceTo(scenario.four)"]
        ]
    },

    four: {
        image: 'assets/images/tanjiro.jpg',
        text: "Scenario 3",
        buttons: [
            ["Follow your Dog Downstairs", "advanceTo(scenario.five)"],
            ["Search the Kitchen for a knife", "advanceTo(scenario.five)"]
        ]
    },

    five: {
        image: 'assets/images/senku.jpg',
        text: "TO BE CONTINUED...",
    },

};



// this is the code that starts the game
advanceTo(scenario.one);



