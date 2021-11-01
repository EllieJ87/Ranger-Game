// Below site was help to build a plateform of the game, this has been styled and developed 
// by myself
// https://codepen.io/rzim2082/pen/jrWYJW

// -- ONLOAD WELCOME VARIABLES -- //
const input = document.getElementById('player');
const startBtn = document.getElementById('start-btn');

// -- MAIN GAME VARIABLES -- // 
const image = document.getElementById("images");
const text = document.getElementById("text");
const buttonBox = document.getElementById('buttonBox');

// -- RETURN HOME VARIABLES -- //
const modal = document.getElementById('game-container');
const test = document.getElementById('good-bye-text');

// -- AMMO & FUEL VARIABLES -- //
let ammoBars = document.querySelectorAll('.ammo-bar');
let fuelBars = document.querySelectorAll('fuel-bar');
let addClass = document.querySelectorAll('empty-bar');

// -- SOUND VARIABLES -- //
const buttonSound = new Audio("assets/audio/beep-button.mp3");
const volBtn = $("#volume-btn");
const soundBtn = $(".audio");

// -- SOUND IS OFF AT THE START OF THE GAME -- //
let sound = false; 

// -- PLAYERS NAME AND LET STATE -- //
let playersName;
let ammo = 0;
let fuel = 0;

// -- WELCOME ONLOAD -- //
startGame = () => {
    // Players name value
    const info = $('#player').val();
    let txt;
    if (info == "") { // No input is entered throws error message
        txt = "Need a name ranger!";
        document.getElementById("playerName").innerHTML = txt;

    } else {
        txt = "";
        // Name has been entered
        playersName = info;
        document.getElementById("modal-box").style.display = "none";
        $('.modal-backdrop').remove();
        advanceTo(scenario.one)
    }     
}

// Replaces 'Your name' with the players input
let changeText = (words) => {
    text.innerHTML = words.replace("Your name", playersName);
}

// Changes the image
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

// -- PREVENTS THE USER FROM GOING BACK SOURCE: (from stack overflow)
// https://stackoverflow.com/questions/12381563/how-can-i-stop-the-browser-back-button-using-javascript
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

    // -- MAKES THE SOUND PLAY IF ON/OFF -- //
    $(".audio").click(function(){
        if (sound) {
            sound = true;
            play(buttonSound);
        } else {
            sound = false;
        }
    })
  };

// -- TOGGLES THE VOLUME ICON TO CHANGE WHEN CLICKED -- //
$(volBtn).click(function() {
    if (sound) {
        sound = false;
        $(this).toggleClass("fa-volume-off");
        $(this).toggleClass("fa-volume-up");
    } else {
        sound = true;
        play(buttonSound);
        $(this).toggleClass("fa-volume-off");
        $(this).toggleClass("fa-volume-up");
        }
});

// -- PLAYS THE AUDIO SOUND -- //
const play = (audio) => {
    audio.play();
  }
  
const stop = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  }

// -- REMOVES HOME MODAL AND TAKES PLAYER TO A NEW 'GAME OVER' SCREEN -- //
// Ending text with option to refresh the page to start the game again
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
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

// -- MAIN GAME SCENARIO -- // 
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

// -- STARTS THE GAME -- //
advanceTo(scenario.one);

