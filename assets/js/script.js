// Below site was help to build a plateform of the game, this has been styled and developed 
// by myself
// https://codepen.io/rzim2082/pen/jrWYJW

// Welcome modal variable
const input = document.getElementById('player');
// console.log(input);
const startBtn = document.getElementById('start-btn');

// Main game variables 
const image = document.getElementById("images");
const text = document.getElementById("text");
const buttonBox = document.getElementById('buttonBox');

// Return home modal variables
const modal = document.getElementById('game-container');
const test = document.getElementById('good-bye-text');

// Ammo & Fuel variables
let ammoBars = document.querySelectorAll('.ammo-bar');
let fuelBars = document.querySelectorAll('fuel-bar');
let addClass = document.querySelectorAll('empty-bar');

// Sound variables
const buttonSound = new Audio("assets/audio/beep-button.mp3");
const volBtn = $("#volume-btn");

const soundBtn = $(".audio");

let sound = false; //Ensures that the sound is on when the game is being played

// this is the variable for the player's name
let playersName;
let ammo = 0;
let fuel = 0;
// console.log(playersName);

// removes the opening modal when the user clicks on it
startGame = () => {
    const info = $('#player').val(); // convey to javascript vanilla JS
    let txt;
    if (info == "") {
        // alert("name required")
        txt = "Need a name ranger!";
        document.getElementById("playerName").innerHTML = txt;

    } else {
        txt = "";
        // console.log(info);
        playersName = info;
        // console.log(playersName);
        // return true;

        // once the button is clicked 

        // $(document).ready(function(){
            // $("#start-btn").click(function(){ 
                
                $("#modal-box").hide(); // convey to javascript vanilla JS
                $('.modal-backdrop').remove(); // convey to javascript vanilla JS
                // console.log("modal is hidden")
        //     })
        // })
        advanceTo(scenario.one)
    } 

    

    // advanceTo(scenario.one)
    
}

// -- THIS WAS THE ORIGINAL SCRIPT -- //
// function removeModal() {
//     console.log(input.value);
//     playersName = input.value;
// // if the user clicks on the button the modal is removed
//     var myobj = document.getElementById("modal-box");
//     myobj.remove(); 
//     advanceTo(scenario.one) 
// }

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
        buttonBox.innerHTML += "<button class='btn audio' onClick=" + buttonList[i][1] + ">" 
        + buttonList[i][0] + "</button>";
    };
};




// Prevents the user to go backwards (from stack overflow source)
window.history.forward();
const noBack = () => {
    window.history.forward();
}

// in console set the value = 4
// set the query selector 
// set values to update the divs
// increasing and decreasing



// const emptyBars = (el) => {
//     el.addClass('.empty-grey');
//   };
  
// this is what moves the game along
 const advanceTo = (s) => {
    
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
    
    // if (ammo = ammo - 1) { //ammo decreases
    //   ammo = ammo++; // ammo--;
    //   if (ammo > 5) {
    //     ammoGameOver();
    //   }
    //   emptyBars(ammoBars[ammo]);
    // } else if (fuel = fuel - 1) { // fuel decreses
    //   fuel = fuel++;
    //   if (fuel > 5) {
    //     fuelGameOver();
    //   }
    //   emptyBars(fuelBars[fuel]);
    // }

    // Toggles the volume icon

    $(".audio").click(function(){
        if (sound) {
            sound = true;
            play(buttonSound);
            // console.log("sound played")
        }

        else {
            sound = false;
            // console.log("sound off")
        }

    })

  };

// Toggles the volume icon
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


// Plays the audio sound
const play = (audio) => {
    audio.play();
  }
  
const stop = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  }

  // import this text from a separte doc
// Added a home element button (change to icon) removes modal and displays generic text
const removeHomeModal = () => {
    let myobj2 = document.getElementById("game-container");
    myobj2.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/image-3.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `
    <p class="end-text">With ${playersName} returning back to their home planet...
    `
    + `<br></br>`
    + `
    Astra and The Orbit Rangers tried to save Pokitaru but they were eventually 
    outnumbered by The Magnetars, Vex took Astra and The Orbit Rangers back to 
    his ship as hostages.  
    `
    + `<br></br>` 
    + `
    With Astra and The Orbit Rangers now in Vex’s possession, and no other ranger 
    out there to stop him, meant he was able to continue on his plans to absorb 
    Pokitaru’s energy and lifestream, all Astra could do is watch as Vex drained 
    Pokitaru’s energy, slowing depleting until the planet eventually died out...  
    `
    + `<br></br>` 
    + `
    <b>Would you like to try again?</b>
    `
    + `<br></br>`
    // added a font awesome icon with a refresh page browser element
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

// Game scenario
const scenario = {
    one: {
        image: 'assets/images/image-4.jpg',  
        text: "Your name Bacon ipsum dolor amet boudin pastrami shankle ham fatback pork. Short ribs ham beef, filet mignon ball tip sirloin shankle t-bone drumstick. Ground round drumstick pancetta fatback alcatra.?",
        fuel: fuelBars[fuel],
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

