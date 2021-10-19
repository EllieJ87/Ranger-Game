// Below site was help to build a plateform of the game, this has been styled and developed 
// by myself
// https://codepen.io/rzim2082/pen/jrWYJW

// Welcome modal variable
const input = document.getElementById('player');
const startBtn = document.getElementById('start-btn');

// Main game variables 
const image = document.getElementById("images");
const text = document.getElementById("text");
const buttonBox = document.getElementById('buttonBox');

// Return home modal variables
const modal = document.getElementById('game-container');
const test = document.getElementById('good-bye-text');

// Sound variables
const buttonSound = new Audio("assets/audio/beep-button.mp3");
const volBtn = $("#volume-btn");

// const soundBtn = $(".btn");

let sound = false; //Ensures that the sound is on when the game is being played

// this is the variable for the player's name
let playersName;

// keep track of the character
// let state = {} // understand this point more


// removes the opening modal when the user clicks on it
startGame = () => {
    const info = $('#player').val();
    let txt;
    if (info == "") {
        // alert("name required")
        txt = "Need a name ranger!";

    } else {
        txt = "";
        console.log(info);
        playersName = input.value;
        return false;
    }
    document.getElementById("playerName").innerHTML = txt;
}

//     document.getElementById("start-btn").addEventListener("click", function() {
//         const myobj = document.getElementById("myModal");
//   myobj.remove();
// });

// function removeModal() {
//     console.log(input.value);
//     playersName = input.value;
// // if the user clicks on the button the modal is removed
//     var myobj = document.getElementById("modal-box");
//     myobj.remove(); 
//     advanceTo(scenario.one) 
// }

// let ammo = 0;
// let fuel = 0;

// const emptyBars = (el) => {
//   el.addClass('.empty-grey');
// };

// const advanceTo = (s) => {
  
//   changeImage(s.image)
//   changeText(s.text)
//   changeButtons(s.buttons)
  
//   if (//ammo decreases) {
//     ammo = ammo++;
//     if (ammo > 5) {
//       ammoGameOver();
//     }
//     emptyBars(ammoBars[ammo]);
//   } else if (// fuel decreses) {
//     fuel = fuel++;
//     if (fuel > 5) {
//       fuelGameOver();
//     }
//     emptyBars(fuelBars[fuel]);
//   }
// };
// if no value 

// Replaces 'Your name' with the players input
let changeText = (words) => {
    text.innerHTML = words.replace("Your name", playersName);
}

// Changes the image on question base
let changeImage = (img) => {
    images.style.backgroundImage = "url(" + img + ")";
}

// Adds or decrease the number of buttons for options
let changeButtons = (buttonList) => {
    buttonBox.innerHTML = "";
    for (let i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button class='btn' onClick=" + buttonList[i][1] + ">" 
        + buttonList[i][0] + "</button>";
    };
};


// import this text from a separte doc
// Added a home element button (change to icon) removes modal and displays generic text
const removeHomeModal = () => {
    let myobj2 = document.getElementById("game-container");
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
    // added a font awesome icon with a refresh page browser element
    + '<a onclick="setTimeout(function() { location.reload(true); });"><i class="fa fa fa-refresh"></i></a></div>';
    // Generic text about the failure of not saving the planet
    // Breaks added to text    
};

// Prevents the user to go backwards (from stack overflow source)
window.history.forward();
const noBack = () => {
    window.history.forward();
}

// this is what moves the game along
let advanceTo = (s) => {
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
}
//fuel and amo var in an array

// sperate function in class and separeate outerHeight
// same class 

// Toggles the volue icon
$(volBtn).click(function() {
    if (sound) {
        sound = false;
        $(this).toggleClass("fa-volume-off");
        $(this).toggleClass("fa-volume-up");
        console.log("sound", sound);
    }
    else {
        sound = true;
        play(buttonSound);
        $(this).toggleClass("fa-volume-off");
        $(this).toggleClass("fa-volume-up");
        console.log("sound", sound);
        }
});

// if audio button is on play button sound targetting the class btn
// else if button is off do not play sound
// function play sound
// var = get elementByClassName('btn')

// Plays the audio sound
const play = (audio) => {
    audio.play();
  }
  
const stop = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  }

// Game scenario
const scenario = {
    one: {
        image: 'assets/images/image-4.jpg',  
        text: "Your name Bacon ipsum dolor amet boudin pastrami shankle ham fatback pork. Short ribs ham beef, filet mignon ball tip sirloin shankle t-bone drumstick. Ground round drumstick pancetta fatback alcatra.?",
        buttons: [
            ["Turn and run", "advanceTo(scenario.three)"],
            ["Enter The House", "advanceTo(scenario.four)"]
        ]
    },

    two: {
        image: 'assets/images/Untitled-4.jpg',
        text: "Your name Bacon ipsum dolor amet boudin pastrami shankle ham fatback pork. Short ribs ham beef, filet mignon ball tip sirloin shankle t-bone drumstick. Ground round drumstick pancetta fatback alcatra.?",
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
            ["Search the Kitchen for a knife", "advanceTo(scenario.one)"]
        ]
    },

    five: {
        image: 'assets/images/Untitled-4.jpg',
        text: "TO BE CONTINUED...",
    },

};

// Starts the game
advanceTo(scenario.one);

