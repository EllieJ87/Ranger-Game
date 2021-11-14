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
const gameModal = document.getElementById("game-container");

// -- RETURN HOME VARIABLES -- //
const modal = document.getElementById('game-container');
const test = document.getElementById('good-bye-text');

// -- AMMO & FUEL VARIABLES -- //
let ammoBars = document.querySelectorAll('.ammo-bar');
let fuelBars = document.querySelectorAll('.fuel-bar');
let healthBars = document.querySelectorAll('.health-bar');

// -- SOUND VARIABLES -- //
const buttonSound = new Audio("assets/audio/beep-button.mp3");
const volBtn = $("#volume-btn");
const soundBtn = $(".audio");

// -- SOUND IS OFF AT THE START OF THE GAME -- //
let sound = false; 

// -- PLAYERS NAME AND LET STATE -- //
let playersName;
let ammo = 0; // setting the ammo at index 0
let fuel = 0; // setting the fuel at index 0
let health = 0; // setting the health at index 0

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
        document.getElementById("modal-welcome").style.display = "none";
        $('.modal-backdrop').remove();
        advanceTo(scenario.scene1)
    }     
}

// Replaces 'Your name' with the players input
let changeText = (words) => {
    text.innerHTML = words.replace("playerName", playersName);
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

// -- CHANGE THE BARS TO BE EMPTY -- // 
const emptyBars = (el) => {
    el.classList.add('empty-bars');
  };
  
// -- MAIN GAME MOVEMENT & CHANGES THE SCENARIO -- //
const advanceTo = (s) => {
    
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)

    // -- HELPED FROM SUNNY -- //
    // if decreaseAmmo is true then change class to be empty bars    
    if (s.decreaseAmmo) { 
        emptyBars(ammoBars[ammo]);
        // check to see when ammo reaches equal to 5 then it's game over
        if (ammo >= 5) {
            ammoGameOver();
        }
        ammo++;
        // if decreaseFuel is true then change class to be empty bars
    } else if (s.decreaseFuel) { 
        emptyBars(fuelBars[fuel]);
        // check to see when fuel reaches equal to 5 then it's game over
        if (fuel >= 5) {
            fuelGameOver();
        }
        fuel++;
    } else if (s.decreaseHealth) { 
        emptyBars(healthBars[health]);
        // check to see when fuel reaches equal to 5 then it's game over
        if (health >= 5) {
            healthGameOver();
        }
        health++;
    }
    else if(fuel >= 4 && ammo >= 2) {
        helpedGameOver();
    }

    else if(fuel >= 2 && ammo >= 3) {
        defeatedGameOver();
    }

    else if(health >= 2 && ammo >= 4) {
        spyGameOver();
    }

    else if(health >= 3 && fuel >= 3) {
        capturedGameOver();
    }

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

const helpedGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/pokitaru-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: Helped the Orbit Rangers</h2>`
    +
    `<p class="end-text">Well done ${playersName} you managed to meet up with the rest of the Orbit Rangers!`
    + `<br></br>`
    + `You took on Vex and the Magnetars and you managed to save Pokitaru!`
    + `<br></br>` 
    + `Nice work ${playersName}!`
    + `<br></br>` 
    + `<b>ENDING: 1 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

const fuelGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/lostinspace-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: Lost in Space</h2>`
    +
    `<p class="end-text">Sadly ${playersName} you were unable to navigate back!`
    + `<br></br>`
    + `You lost all communication with Astra and the hope of Pokitaru was gone.  You spent the rest of the years floating in space trying to reconnect back to Astra and The Orbit Rangers`
    + `<br></br>` 
    + `Maybe don't run out of fuel next time ${playersName}...!`
    + `<br></br>` 
    + `<b>ENDING: 2 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

const defeatedGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/infiltrated-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: Infiltrated Vex</h2>`
    +
    `<p class="end-text">Well done ${playersName} you were very sneaky and quick enough to by pass all the Magnetars and were able to take down Vex himself!`
    + `<br></br>`
    + `With the help of Astra and the Orbit Rangers you were able to stop Vex and save Pokitaru!`
    + `<br></br>` 
    + `Nice team work there ${playersName}!`
    + `<br></br>` 
    + `<b>ENDING: 3 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

const capturedGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/captured-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: Captured by Vex</h2>`
    +
    `<p class="end-text">You were not quick enough ${playersName}! That last incoming powerful blow was too strong for you and cut all power to your ship`
    + `<br></br>`
    + `You were taken on board Vex's ship and held captive`
    + `<br></br>` 
    + `You hoped Astra would come and save you...`
    + `<br></br>` 
    + `<b>ENDING: 4 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

const spyGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/spy-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: Secret Spy</h2>`
    +
    `<p class="end-text">Who would have thought that you took up a secret mission ${playersName}!`
    + `<br></br>`
    + `You were a secret spy of Vex all along! You even managed to out smart Astra himself!`
    + `<br></br>`
    + `You managed to defeat Astra and the Orbit Rangers and helped Vex with his plans to destroy Pokitaru`
    + `<br></br>` 
    + `You feel good about yourself ${playersName}?`
    + `<br></br>` 
    + `<b>ENDING: 5 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

const healthGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/died-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: Fallen Hero</h2>`
    +
    `<p class="end-text">Wow ${playersName} who would have thought you were brave enough to go head to head with Vex and the Magnetars!`
    + `<br></br>`
    + `You were a brave Rangr and will be missed by all, your heroic bravery managed to save Pokitaru and gave peace back to the planet and the galaxy.`
    + `<br></br>` 
    + `You went down in history ${playersName} and to this day Pokitaru honours your bravery`
    + `<br></br>` 
    + `<b>ENDING: 6 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
};

const ammoGameOver = () => {
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/hero-end.jpg" id="home-image" class="img-fluid" alt="test">`
    +
    `<h2 class="end-head">Ending: True Hero</h2>`
    +
    `<p class="end-text">What can we say ${playersName} but with your super flying skills and quick manoeuvres you out flew Vex and the Magnetars!`
    + `<br></br>`
    + `You over came all obstacles and defeated the one and only Vex!`
    + `<br></br>` 
    + `Well done ${playersName}!`
    + `<br></br>` 
    + `Your name will go down in The Orbit Rangers history!`
    + `<br></br>` 
    + `<b>ENDING: 7 / 7</b>`
    + `<br></br>` 
    + `<b>Would you like to try again?</b></p>`
    + `<br></br>`
    + `<div class="home-icon"> <a onclick="setTimeout(function() { 
        location.reload(true); });"><i class="fa fa fa-refresh"></i></a>
        </div></div>`;
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
    gameModal.remove();
    test.innerHTML =  `
    <div class="container end-container">
    <img src="assets/images/home-end.jpg" id="home-image" class="img-fluid" alt="test">`
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
    scene1: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "Welcome ranger playerName! Do you need to know how to play?",
        buttons: [
            ["Yeah", "advanceTo(scenario.scene2)"],
            ["Nah I'm good, I've done this before", "advanceTo(scenario.scene4)"]
        ]
    },

    scene2: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "This game is completely up to you and the choices you make throughout the game.  You will be given options to navigate through different scenarios",
        buttons: [
            ["I'm interested...Go on", "advanceTo(scenario.scene3)"]
        ]
    },

    scene3: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "You will also need to pay attention to your fuel, ammo and health bar as the choices you make will impact these.  Choose wisely!",
        buttons: [
            ["I'm Ready!", "advanceTo(scenario.scene4)"]
        ]
    },

    scene4: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "playerName! Do you understand your mission?",
        buttons: [
            ["No what do I need to do?", "advanceTo(scenario.scene5)"],
            ["Yes, let's GO!", "advanceTo(scenario.scene6)"]
        ]
    },
    
    scene5: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "The main objective is to assist Astra and his team 'The Orbit Rangers' to help save the planet Pokitaru as it's currenntly under attack by the evil empire 'The Magnetars' led by Vex",
        buttons: [
            ["Count me in!", "advanceTo(scenario.scene6)"]
        ]
    },
    
    scene6: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "Hi am I speaking to playerName?",
        buttons: [
            ["Yes", "advanceTo(scenario.scene8)"],
            ["Nope", "advanceTo(scenario.scene7)"]
        ]
    },
    
    scene7: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "oh I swear I contacted playerName...?",
        buttons: [
            ["Yeah I guess that is me...", "advanceTo(scenario.scene8)"]
        ]
    },
    
    scene8: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "Let's just check our video communication, Are you able to see me?",
        buttons: [
            ["No", "advanceTo(scenario.scene9)"]
        ]
    },
    
    scene9: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "Okay! Let's try and fix the video link first! I will need to hack into your control panel",
        buttons: [
            ["Wait! You've going to do what now??", "advanceTo(scenario.scene10)"],
            ["Okay!", "advanceTo(scenario.scene11)"]
        ]
    },
    
    scene10: {
        image: 'assets/images/cockpit.jpg', // cockpit 
        text: "I'm just running some code through the autopilot to get the screen working!",
        buttons: [
            ["I see", "advanceTo(scenario.scene11)"]
        ]
    },
    
    scene11: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "That should be working now! I'm Astra, the leader of the Orbit Rangers!",
        buttons: [
            ["What's with the mask?", "advanceTo(scenario.scene12)"],
            ["Yeah I can see you!", "advanceTo(scenario.scene15)"]
        ]
    },
    
    scene12: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "Pokitaru's climate is unstable at the moment!",
        buttons: [
            ["You don't have to wear it now", "advanceTo(scenario.scene13)"]
        ]
    },
    
    scene13: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "Well not many people know my identity! Not even Vex does!",
        buttons: [
            ["Really? Why so secretive?", "advanceTo(scenario.scene14)"]
        ]
    },
    
    scene14: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "If they don't know my identity then they can't track me down!",
        buttons: [
            ["Good to know", "advanceTo(scenario.scene15)"]
        ]
    },
    
    scene15: {
        image: 'assets/images/coordinates-4.jpg', // coordinates
        text: "I'm sending you Pokitaru's location now, are you ready playerName?",
        buttons: [
            ["Yeah! Let's go!", "advanceTo(scenario.scene24)"],
            ["Not yet", "advanceTo(scenario.scene16)"]
        ]
    },
    
    scene16: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "Come on playerName the fate of Pokitaru needs you! The Orbit Rangers can't hold off Vex for much longer!",
        buttons: [
            ["I'm not sure", "advanceTo(scenario.scene17)"],
            ["I guess I could help", "advanceTo(scenario.scene38)"]
        ]
    },
    
    scene17: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "Come on it won't take long and it would help us out a lot!",
        buttons: [
            ["I'm not interested", "advanceTo(scenario.scene18)"]
        ]
    },
    
    scene18: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "How are you not interested in saving the galaxy?",
        buttons: [
            ["I only joined on a whim", "advanceTo(scenario.scene19)"]
        ]
    },
    
    scene19: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "On a whim?",
        buttons: [
            ["Yup", "advanceTo(scenario.scene20)"]
        ]
    },
    
    scene20: {
        image: 'assets/images/astra-mask.jpg', // astra with mask
        text: "playerName we really need more support! The other rangers are depleting in numbers!",
        buttons: [
            ["And if I help you what do I get?", "advanceTo(scenario.scene21)"],
            ["Why should I care?", "advanceTo(scenario.scene36)"]
        ]
    },
    
    scene21: {
        image: 'assets/images/astra-mask.jpg',
        text: "Okay okay! I hear you! We will hold a massive ceromony dedicated just to you!",
        buttons: [
            ["Doesn't seem like a fair deal to me...", "advanceTo(scenario.scene22)"]
        ]
    },
    
    scene22: {
        image: 'assets/images/astra-mask.jpg',
        text: "How about a promotion? I'll make you a a sub leader of the Orbit Rangers!",
        buttons: [
            ["Keep talking", "advanceTo(scenario.scene23)"]
        ]
    },
    
    scene23: {
        image: 'assets/images/astra-mask.jpg',
        text: "I'll give you a raise and a better security for your family!",
        buttons: [
            ["You have a deal Astra!", "advanceTo(scenario.scene24)"]
        ]
    },
    
    scene24: {
        image: 'assets/images/coordinates-4.jpg', // coordinates with 2 routes option
        text: "Great! I'm sending you two routes you can take, would you rather go East or West?",
        buttons: [
            ["East", "advanceTo(scenario.scene25)"],
            ["West", "advanceTo(scenario.scene28)"]
        ]
    },
    
    scene25: {
        image: 'assets/images/astra-main.jpg',
        text: "Redirecting your autopilot to take you East",
        buttons: [
            ["Let's do this!", "advanceTo(scenario.scene26)"]
        ]
    },
    
    scene26: {
        image: 'assets/images/astra-main.jpg',
        text: "You might need to watch out for asteriods a few have been spotted taking this route",
        buttons: [
            ["Asteriods? Like a lot?", "advanceTo(scenario.scene27)"],
            ["Asteriods? No Problem!", "advanceTo(scenario.story1)"]
        ]
    },
    
    scene27: {
        image: 'assets/images/astra-main.jpg',
        text: "Rumour has it that Pokitaru has vase amounts of asteriod fields within it's orbit",
        buttons: [
            ["Is there a safer route?", "advanceTo(scenario.story5)"],
            ["Bring it on!", "advanceTo(scenario.story1)"]
        ]
    },
    
    scene28: {
        image: 'assets/images/astra-mask.jpg',
        text: "Redirecting your autopilot to take you West",
        buttons: [
            ["Bring it on!", "advanceTo(scenario.scene29)"]
        ]
    },
    
    scene29: {
        image: 'assets/images/astra-mask.jpg',
        text: "Now playerName it's been spotted that Vex and the Magnetars have been based in the West",
        buttons: [
            ["How many ships?", "advanceTo(scenario.scene30)"],
            ["Hah! I can take him!", "advanceTo(scenario.scene33)"]
        ]
    },
    
    scene30: {
        image: 'assets/images/astra-mask.jpg',
        text: "Quite a few but we are managing to hold him back!",
        buttons: [
            ["And how many do we have?", "advanceTo(scenario.scene31)"],
            ["Let's take him on!", "advanceTo(scenario.scene32)"]
        ]
    },
    
    scene31: {
        image: 'assets/images/astra-mask.jpg',
        text: "To be honest with you ranger not nearly enough!",
        buttons: [
            ["Do you think you can win?", "advanceTo(scenario.spy1)"]
        ]
    },
    
    scene32: {
        image: 'assets/images/astra-mask.jpg',
        text: "playerName we really appreciate your help with taking out Vex!",
        buttons: [
            ["Let's do this!", "advanceTo(scenario.scene34)"]
        ]
    },
    
    scene33: {
        image: 'assets/images/astra-main.jpg', // Vex's location
        text: "Great! Let's see if I can locate him for you",
        buttons: [
            ["Good plan!", "advanceTo(scenario.scene34)"],
            ["Let's do this!", "advanceTo(scenario.scene35)"]
        ]
    },
    
    scene34: {
        image: 'assets/images/astra-main.jpg',
        text: "Glad to hear your fighting spirit! Let's take down Vex together!",
        buttons: [
            ["Alright Astra!", "advanceTo(scenario.scene35)"]
        ]
    },
    
    scene35: {
        image: 'assets/images/coordinates-1.jpg', // vex coordinates
        text: "I'm picking up his coordinates now, you can either sneak pass him or take him head on!",
        buttons: [
            ["Head on!", "advanceTo(scenario.died1)"],
            ["Let's sneak pass!", "advanceTo(scenario.ammo1)"]
        ]
    },
    
    scene36: {
        image: 'assets/images/astra-main.jpg',
        text: "The Orbit Ranger's Mission is to maintain the peace in the galaxy!",
        buttons: [
            ["*sigh* Which direction should I go?", "advanceTo(scenario.scene37)"]
        ]
    },
    
    scene37: {
        image: 'assets/images/astra-main.jpg', // updated coordinates
        text: "Thanks playerName there ae two routes available either the southeast or northwest route",
        buttons: [
            ["Southeast", "advanceTo(scenario.captured1)"],
            ["Northwest", "advanceTo(scenario.scene44)"]
        ]
    },
    
    scene38: {
        image: 'assets/images/astra-main.jpg', // vex coordinates
        text: "That's the spirit playerName I'm sending you Vex's coordinates now!",
        buttons: [
            ["Why did I accept this mission...", "advanceTo(scenario.scene39)"]
        ]
    },
    
    scene39: {
        image: 'assets/images/coordinates-2.jpg',
        text: "You should have received the coordinates now",
        buttons: [
            ["Yeah I have", "advanceTo(scenario.scene40)"]
        ]
    },
    
    scene40: {
        image: 'assets/images/astra-main.jpg',
        text: "You will have to navigate through an asteriod field though",
        buttons: [
            ["Is there not another route?", "advanceTo(scenario.scene41)"],
            ["WHAT?", "advanceTo(scenario.scene42)"]
        ]
    },
    
    scene41: {
        image: 'assets/images/astra-main.jpg',
        text: "I can check your location and see if there is another route",
        buttons: [
            ["Please do!", "advanceTo(scenario.scene43)"]
        ]
    },
    
    scene42: {
        image: 'assets/images/astra-main.jpg',
        text: "Don't worry playerName I'll help guide you through it!",
        buttons: [
            ["You better", "advanceTo(scenario.scene41)"],
            ["Hope I won't die!", "advanceTo(scenario.scene46)"]
        ]
    },
    
    scene43: {
        image: 'assets/images/coordinates-2.jpg',
        text: "Checking your location, you can either take a southeast route or a northwest route",
        buttons: [
            ["Southeast", "advanceTo(scenario.captured1)"],
            ["Northwest", "advanceTo(scenario.scene44)"]
        ]
    },
    
    scene44: {
        image: 'assets/images/astra-main.jpg',
        text: "Northwest it is! Re-navigating your location to a Northwest direction!",
        buttons: [
            ["This is the best route right?", "advanceTo(scenario.scene45)"]
        ]
    },
    
    scene45: {
        image: 'assets/images/astra-main.jpg',
        text: "It might be quick but you could land yourseld in a huge asteriod field if your not careful! Keep an eye on your fuel",
        buttons: [
            ["Okay Astra!", "advanceTo(scenario.fuel2)"]
        ]
    },
    
    scene46: {
        image: 'assets/images/astra-main.jpg',
        text: "You won't die! Just make sure you don't run our of fuel before you reach us!",
        buttons: [
            ["I have enough right?", "advanceTo(scenario.scene47)"]
        ]
    },
    
    scene47: {
        image: 'assets/images/astra-main.jpg',
        text: "Hmm as long as you don't over use it!",
        buttons: [
            ["Someone will come for me if I do right?", "advanceTo(scenario.scene48)"]
        ]
    },
    
    scene48: {
        image: 'assets/images/astra-main.jpg',
        text: "Of course playerName The Orbit Rangers never leaves a Ranger down!",
        buttons: [
            ["Thanks Astra!", "advanceTo(scenario.fuel2)"]
        ]
    },
    
    story1: {
        image: 'assets/images/astra-main.jpg',
        text: "That's the spirit! You will need to be quick at navigating through them",
        buttons: [
            ["No problem!", "advanceTo(scenario.story2)"]
        ]
    },
    
    story2: {
        image: 'assets/images/astra-main.jpg',
        text: "Let's see if you are quick enough to get through them!",
        buttons: [
            ["Sure thing Astra!", "advanceTo(scenario.story3)"]
        ]
    },
    
    story3: {
        image: 'assets/images/asteriods-1.jpg',
        text: "I see an upcoming asteriod field, try clearing the path to get rid of them!",
        decreaseFuel: true,
        buttons: [
            ["Fire at asteriods", "advanceTo(scenario.story4)"]
        ]
    },
    
    story4: {
        image: 'assets/images/asteriods-1.jpg',
        text: "Damn playerName that was some quick firing! let's see if you can keep this up!",
        decreaseAmmo: true,
        buttons: [
            ["I'm ready!", "advanceTo(scenario.defeat1)"]
        ]
    },
    
    story5: {
        image: 'assets/images/astra-main.jpg',
        text: "Come on playerName you can do this! I'll help you navigate through them! Just put that fuel to good use!",
        buttons: [
            ["I'm not sure", "advanceTo(scenario.story6)"],
            ["I've got this!", "advanceTo(scenario.story7)"]
        ]
    },
    
    story6: {
        image: 'assets/images/asteriods-2.jpg',
        text: "playerName it looks like the start of the asteriod field so now take it nice and slow and try and dodge as many as you can!",
        decreaseFuel: true,
        buttons: [
            ["Okay!", "advanceTo(scenario.story8)"]
        ]
    },
    
    story7: {
        image: 'assets/images/astra-main.jpg',
        text: "I knew there was a reason why I seeked your help playerName let's destroy these asteriods!",
        decreaseFuel: true,
        buttons: [
            ["You got it Astra!", "advanceTo(scenario.story9)"]
        ]
    },
    
    story8: {
        image: 'assets/images/asteriods-4.jpg',
        text: "Try and destroy some of the bigger asteriods to clear the way!",
        buttons: [
            ["Fire!", "advanceTo(scenario.story10)"]
        ]
    },
    
    story9: {
        image: 'assets/images/asteriods-4.jpg',
        text: "playerName there is an asteriod coming straight towards you!",
        buttons: [
            ["Shoot it", "advanceTo(scenario.story11)"]
        ]
    },
    
    story10: {
        image: 'assets/images/astra-main.jpg',
        text: "Great that cleared one of them, let me use the autopilot to check your surrounding area",
        decreaseAmmo: true,
        buttons: [
            ["You can do that?", "advanceTo(scenario.story12)"],
            ["Yeah that would be great", "advanceTo(scenario.story13)"]
        ]
    },
    
    story11: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice firing there! What a way to shoot! let's quickly get through this then we can take down Vex!",
        decreaseAmmo: true,
        buttons: [
            ["Time to destroy!", "advanceTo(scenario.defeat1)"]
        ]
    },
    
    story12: {
        image: 'assets/images/astra-main.jpg',
        text: "Of course I can!",
        buttons: [
            ["Your the best Astra!", "advanceTo(scenario.story13)"]
        ]
    },
    
    story13: {
        image: 'assets/images/asteriods-5.jpg',
        text: "It looks like there is a few clusters of asteriods that could be destroyed or can be dodged quickly!",
        buttons: [
            ["Speed it is!", "advanceTo(scenario.story14)"],
            ["Time to destroy!", "advanceTo(scenario.defeat1)"]
        ]
    },
    
    story14: {
        image: 'assets/images/asteriods-5.jpg',
        text: "Quick there is an asteriod heading straight for you!",
        buttons: [
            ["Quickly dodge to the left", "advanceTo(scenario.help1)"],
            ["Drift to the right", "advanceTo(scenario.fuel1)"]
        ]
    },
    
    help1: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice Work playerName you managed to avoid it! I see a clear path",
        decreaseFuel: true,
        buttons: [
            ["Few that was close!", "advanceTo(scenario.help2)"]
        ]
    },
    
    help2: {
        image: 'assets/images/asteriods-6.jpg',
        text: "Asteriod coming straight at you!",
        buttons: [
            ["Fire", "advanceTo(scenario.help3)"]
        ]
    },
    
    help3: {
        image: 'assets/images/astra-main.jpg',
        text: "Whoo! I think you're in the clear now!",
        decreaseAmmo: true,
        buttons: [
            ["Great now which direction?", "advanceTo(scenario.help4)"]
        ]
    },
    
    help4: {
        image: 'assets/images/coordinates-3.jpg',
        text: "Ah yes! Let me check your coordinates and see if you are still on course",
        buttons: [
            ["Cool", "advanceTo(scenario.help5)"]
        ]
    },
    
    help5: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName it looks like you've managed to by pass Vex and The Magnetars war ship!",
        decreaseFuel: true,
        buttons: [
            ["Say what??", "advanceTo(scenario.help6)"],
            ["Damn right!", "advanceTo(scenario.help7)"]
        ]
    },
    
    help6: {
        image: 'assets/images/astra-main.jpg',
        text: "Don't worry let's see if we can can get you closer to Pokitaru to join the rest of the Orbit Rangers!",
        buttons: [
            ["At Last!", "advanceTo(scenario.help8)"]
        ]
    },
    
    help7: {
        image: 'assets/images/astra-main.jpg',
        text: "Just a bit closer to Pokitaru!",
        buttons: [
            ["Finally! Let's kick some Magnetars butt!", "advanceTo(scenario.help9)"]
        ]
    },
    
    help8: {
        image: 'assets/images/pokitaru.jpg',
        text: "Almost there!",
        buttons: [
            ["Phew! I can see Pokitaru!", "advanceTo(scenario.help10)"]
        ]
    },
    
    help9: {
        image: 'assets/images/pokitaru.jpg',
        text: "I see you got your confidence back playerName we are going to need it!",
        buttons: [
            ["Yeah! I can see Pokitaru!", "advanceTo(scenario.help10)"]
        ]
    },
    
    help10: {
        image: 'assets/images/pokitaru.jpg',
        text: "I think I can see you playerName quick come and lend us some of your ammo!",
        decreaseFuel: true,
        buttons: [
            ["I'm on it!", "advanceTo(scenario.scene1)"]
        ]
    },

    fuel1: {
        image: 'assets/images/astra-main.jpg',
        text: "Oh no playerName! The asteriod hit your fuel tank!",
        decreaseFuel: true,
        buttons: [
            ["Huh? You can fix it right?", "advanceTo(scenario.fuel9)"],
            ["What shall I do?", "advanceTo(scenario.fuel10)"]
        ]
    },

    fuel2: {
        image: 'assets/images/asteriods-4.jpg',
        text: "playerName I see a huge asteriod field up ahead be careful!",
        buttons: [
            ["I've got this!", "advanceTo(scenario.fuel3)"],
            ["Full Power!", "advanceTo(scenario.fuel4)"]
        ]
    },

    fuel3: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice maneuvering there playerName! ",
        decreaseFuel: true,
        buttons: [
            ["Phew that was a close call!", "advanceTo(scenario.fuel5)"]
        ]
    },

    fuel4: {
        image: 'assets/images/astra-main.jpg',
        text: "Take it easy you need to keep an eye on your fuel!",
        decreaseFuel: true,
        buttons: [
            ["Asteriod field is not going to stop me!", "advanceTo(scenario.fuel6)"]
        ]
    },

    fuel5: {
        image: 'assets/images/astra-main.jpg',
        text: "It was a close call but you've' only just entered the largest asteriod field I've seen!",
        buttons: [
            ["The largest??", "advanceTo(scenario.fuel7)"]
        ]
    },

    fuel6: {
        image: 'assets/images/astra-main.jpg',
        text: "It might stop you if you use up all your fuel! I've never seen an asteriod field this large before!",
        buttons: [
            ["I can take it!", "advanceTo(scenario.fuel7)"]
        ]
    },

    fuel7: {
        image: 'assets/images/asteriods-4.jpg',
        text: "WATCH OUT! A fast asteriod is coming straight for you! Brace for impact!",
        buttons: [
            ["Is this how I die...?", "advanceTo(scenario.fuel8)"]
        ]
    },

    fuel8: {
        image: 'assets/images/astra-main.jpg',
        text: "Bad news playerName it looks like that asteriod did a number on your fuel tank and it's draining at a much quicker rate!",
        decreaseFuel: true,
        buttons: [
            ["Huh? You can fix it right?", "advanceTo(scenario.fuel9)"],
            ["What shall I do?", "advanceTo(scenario.fuel10)"]
        ]
    },

    fuel9: {
        image: 'assets/images/astra-main.jpg',
        text: "I can try to rebalance the fuel but I can't promise anything!",
        buttons: [
            ["Anything!", "advanceTo(scenario.fuel11)"]
        ]
    },

    fuel10: {
        image: 'assets/images/astra-main.jpg',
        text: "Try shutting off the fuel",
        buttons: [
            ["I'll try that!", "advanceTo(scenario.fuel12)"]
        ]
    },

    fuel11: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName I can't seem to access your fuel tank from here I think the asteriod did more damage!",
        buttons: [
            ["What shall I do?", "advanceTo(scenario.fuel13)"]
        ]
    },

    fuel12: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName I don't think it is working!",
        buttons: [
            ["What shall I try next?", "advanceTo(scenario.fuel13)"]
        ]
    },

    fuel13: {
        image: 'assets/images/astra-main.jpg',
        text: "You will have to try and quickly make it out of the asteriod field!",
        decreaseFuel: true,
        buttons: [
            ["Which direction? I don't see a clearing", "advanceTo(scenario.fuel14)"]
        ]
    },

    fuel14: {
        image: 'assets/images/astra-main.jpg',
        text: "I can see 2 paths either left or right",
        buttons: [
            ["Left", "advanceTo(scenario.fuel15)"],
            ["Right", "advanceTo(scenario.fuel16)"]
        ]
    },

    fuel15: {
        image: 'assets/images/asteriods-3.jpg',
        text: "playerName you've headed further into the asteriod field watch out!",
        decreaseFuel: true,
        buttons: [
            ["Now which direction?", "advanceTo(scenario.fuel17)"]
        ]
    },

    fuel16: {
        image: 'assets/images/asteriods-6.jpg',
        text: "playerName you're in the clear!",
        decreaseFuel: true,
        buttons: [
            ["Phew!", "advanceTo(scenario.fuel18)"]
        ]
    },

    fuel17: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName I see an asteriod coming straight towards you again WATCH OUT!",
        buttons: [
            ["try and dodge", "advanceTo(scenario.fuel19)"]
        ]
    },

    fuel18: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName I see some actiity coming from the left!",
        buttons: [
            ["What is it?", "advanceTo(scenario.fuel20)"]
        ]
    },

    fuel19: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName are you okay? I've seen you've been hit again!",
        buttons: [
            ["Yeah an asteriod hit me", "advanceTo(scenario.fuel21)"]
        ]
    },

    fuel20: {
        image: 'assets/images/astra-main.jpg',
        text: "It looks like a large asteriod is headed straight to you! try using your fuel boost",
        buttons: [
            ["Use fuel boost", "advanceTo(scenario.fuel22)"]
        ]
    },

    fuel21: {
        image: 'assets/images/asteriods.jpg',
        text: "Damn I think that asteriod has thrown you off course again! You've been pulled into the centre of asteriod field now!",
        decreaseFuel: true,
        buttons: [
            ["How do I get back on course?", "advanceTo(scenario.fuel23)"]
        ]
    },

    fuel22: {
        image: 'assets/images/asteriods.jpg',
        text: "I think you boosted too far and now are being pulled into the asteriod field",
        decreaseFuel: true,
        buttons: [
            ["How do I navigate back?", "advanceTo(scenario.fuel23)"]
        ]
    },

    fuel23: {
        image: 'assets/images/astra-main.jpg',
        text: "I can try and access your autopilot",
        buttons: [
            ["ANYTHING!", "advanceTo(scenario.fuel24)"]
        ]
    },

    fuel24: {
        image: 'assets/images/static-astra-main.jpg',
        text: "I'm unable to reach you playerName I'm loosing communication!",
        buttons: [
            ["ASTRA! ASTRA??", "advanceTo(scenario.fuel25)"]
        ]
    },

    fuel25: {
        image: 'assets/images/static-astra-main.jpg',
        text: "I've lost video, if you can still hear this try and use your fuel to get back closer to the asteriod field and I can see if I can reach you!",
        buttons: [
            ["Okay I'll use the last of my fuel", "advanceTo(scenario.fuel26)"]
        ]
    },

    fuel26: {
        image: 'assets/images/static-astra-main.jpg',
        text: "...",
        decreaseFuel: true,
        buttons: [
            ["...", "advanceTo(scenario.scene1)"]
        ]
    },

    defeat1: {
        image: 'assets/images/asteriods-5.jpg',
        text: "Quick to the right another incoming asteriod!",
        buttons: [
            ["Launch missile", "advanceTo(scenario.defeat2)"]
        ]
    },

    defeat2: {
        image: 'assets/images/astra-main.jpg',
        text: "Phew that was a close one! There is a clearing up ahead let's put this into auto drive!",
        decreaseAmmo: true,
        buttons: [
            ["Engage fuel boost", "advanceTo(scenario.defeat3)"],
            ["Let's go!", "advanceTo(scenario.defeat4)"]
        ]
    },

    defeat3: {
        image: 'assets/images/asteriods-6.jpg',
        text: "Great work playerName you've made it out of the asteriod field!",
        decreaseFuel: true,
        buttons: [
            ["Phew that was a close one!", "advanceTo(scenario.defeat5)"]
        ]
    },

    defeat4: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice maneuvering there playerName looks like you've cleared the asteriod field too!",
        decreaseFuel: true,
        buttons: [
            ["Where is Vex hiding?", "advanceTo(scenario.defeat6)"]
        ]
    },

    defeat5: {
        image: 'assets/images/astra-main.jpg',
        text: "I'm sending you updated coordinates looks like Vex is on to us! Le's see if we can by pass him",
        buttons: [
            ["Roger!", "advanceTo(scenario.defeat7)"]
        ]
    },

    defeat6: {
        image: 'assets/images/astra-main.jpg',
        text: "It looks like Vex is hiding on his main ship which is further east pass the asteriod field",
        buttons: [
            ["How can I get to him?", "advanceTo(scenario.defeat8)"]
        ]
    },

    defeat7: {
        image: 'assets/images/astra-main.jpg',
        text: "If we can go undetected we could infiltrate his ship and re-run his system to send him off course",
        buttons: [
            ["You sure he won't notice", "advanceTo(scenario.defeat11)"],
            ["Yeah let's infiltrate!", "advanceTo(scenario.defeat9)"]
        ]
    },

    defeat8: {
        image: 'assets/images/astra-main.jpg',
        text: "Wait your not thinking of taking him on are you? That's crazy!",
        buttons: [
            ["I'm that crazy!", "advanceTo(scenario.defeat9)"],
            ["Maybe!", "advanceTo(scenario.defeat10)"]
        ]
    },

    defeat9: {
        image: 'assets/images/astra-main.jpg',
        text: "There could be a way to take him on...",
        buttons: [
            ["Yeah let's do it!", "advanceTo(scenario.defeat12)"]
        ]
    },

    defeat10: {
        image: 'assets/images/astra-main.jpg',
        text: "Well if you are interested I could check intel to see what we could do",
        buttons: [
            ["Okay", "advanceTo(scenario.defeat12)"]
        ]
    },

    defeat11: {
        image: 'assets/images/astra-main.jpg',
        text: "You have enough ammo! Come on playerName this could be the chance to save Pokitaru",
        buttons: [
            ["Okay okay what do I do?", "advanceTo(scenario.defeat12)"]
        ]
    },

    defeat12: {
        image: 'assets/images/astra-main.jpg',
        text: "I've checked intel and Vex's ship does have 1 weakness",
        buttons: [
            ["I'm listenering...", "advanceTo(scenario.defeat13)"]
        ]
    },

    defeat13: {
        image: 'assets/images/blue-print.jpg', // blue prints
        text: "First you need to sneak towards the back of his ship, You should see a set of blue prints on your screen now",
        buttons: [
            ["Seems simple enough!", "advanceTo(scenario.defeat14)"]
        ]
    },

    defeat14: {
        image: 'assets/images/astra-main.jpg',
        text: "I've called some of the Orbit Rangers to get in position to cause a distraction! You take Vex down!",
        buttons: [
            ["So what is his weak spot?", "advanceTo(scenario.defeat15)"]
        ]
    },

    defeat15: {
        image: 'assets/images/blue-print.jpg',
        text: "There is a small opening towards the back of his ship, if you are able to hit that then we might be able to shut down his system by hacking into his autopilot!",
        buttons: [
            ["Hmm I'm not sure", "advanceTo(scenario.defeat16)"],
            ["Let's do thi! ", "advanceTo(scenario.defeat17)"]
        ]
    },

    defeat16: {
        image: 'assets/images/astra-main.jpg',
        text: "Aww come on playerName we don't ave any other options he is out numbering us! This coould be our only last chance!",
        buttons: [
            ["Why can't you do it?", "advanceTo(scenario.defeat18)"]
        ]
    },

    defeat17 : {
        image: 'assets/images/blue-print.jpg', // blue prints
        text: "Great! Check the blue prints on your screen and make sure you directly hit it otherwise we could be done for!",
        buttons: [
            ["No pressure there then!", "advanceTo(scenario.defeat19)"],
            ["And if I miss?", "advanceTo(scenario.defeat20)"]
        ]
    },

    defeat18: {
        image: 'assets/images/astra-main.jpg',
        text: "Damn I knew you were going to ask that... Well if you must know I fixed your ship with an extra volt of high explosive ammo (hence why you were able to destroy the asteriods so quickly!",
        buttons: [
            ["Okay okay I'll do it then!", "advanceTo(scenario.defeat21)"]
        ]
    },

    defeat19: {
        image: 'assets/images/astra-main.jpg',
        text: "Don't worry you've got this!  We did fix your ship with high explosive ammo you'll be fine!",
        buttons: [
            ["Sweet! Vex your mine!", "advanceTo(scenario.defeat23)"]
        ]
    },

    defeat20: {
        image: 'assets/images/astra-main.jpg',
        text: "Well the fate of Pokitaru will be destroyed and I guess you'll die and the rest of us rangers too... You ready though?",
        buttons: [
            ["Looks like i have no choice!...", "advanceTo(scenario.defeat22)"]
        ]
    },

    defeat21: {
        image: 'assets/images/blue-print.jpg', // blue prints
        text: "Great re-check the blue prints on it's location make sure your accurate!",
        buttons: [
            ["What did I sign up to...", "advanceTo(scenario.defeat23)"]
        ]
    },

    defeat22: {
        image: 'assets/images/astra-main.jpg',
        text: "We've got you covered I fixed up your ammo earlier with an extra punch!",
        buttons: [
            ["... Man I'm gunna die right", "advanceTo(scenario.defeat23)"]
        ]
    },

    defeat23: {
        image: 'assets/images/astra-main.jpg',
        text: "You ready? We are all rooting for you!",
        buttons: [
            ["Let's do this!", "advanceTo(scenario.defeat24)"]
        ]
    },

    defeat24: {
        image: 'assets/images/vex-back.jpg',
        text: "playerName I see you are near Vex's ship, well done he's not noticed we will keep him distracted while you take him down!",
        buttons: [
            ["Okay", "advanceTo(scenario.defeat25)"]
        ]
    },

    defeat25: {
        image: 'assets/images/vex-back.jpg',
        text: "playerName what is taking so long?",
        buttons: [
            ["I can't find it, I think it's not here!", "advanceTo(scenario.defeat26)"]
        ]
    },

    defeat26: {
        image: 'assets/images/blue-print.jpg', // blue prints
        text: "Recheck the blue prints quick we can't hold him off for much longer!",
        buttons: [
            ["Okay think think", "advanceTo(scenario.defeat27)"],
            ["I've got this", "advanceTo(scenario.defeat28)"]
        ]
    },

    defeat27: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName why are you hesitating? SHOOT IT!",
        buttons: [
            ["Okay FIRE!", "advanceTo(scenario.defeat29)"]
        ]
    },

    defeat28: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName you need to HURRY UP!",
        buttons: [
            ["FIRE!", "advanceTo(scenario.defeat29)"]
        ]
    },

    defeat29: {
        image: 'assets/images/vex-tail.jpg',
        text: "Well done playerName you got him! Now I'm able to hack into his system and re-direct his auto pilot! Nice work Ranger!",
        decreaseAmmo: true,
        buttons: [
            ["WE DID IT!", "advanceTo(scenario.scene1)"]
        ]
    },

    spy1: {
        image: 'assets/images/astra-mask.jpg',
        text: "Of course I have faith in all my rangers! Do you not?",
        buttons: [
            ["Sounds like you can't beat Vex", "advanceTo(scenario.spy2)"],
            ["You sound confident about that", "advanceTo(scenario.spy3)"]
        ]
    },

    spy2: {
        image: 'assets/images/astra-mask.jpg',
        text: "Of course The Orbit Rangers can! Just you watch what we can do!",
        buttons: [
            ["I'd like to see you try!", "advanceTo(scenario.spy4)"]
        ]
    },

    spy3: {
        image: 'assets/images/astra-mask.jpg',
        text: "Damn right I am! I believe in my team!",
        buttons: [
            ["That's good to know", "advanceTo(scenario.spy5)"]
        ]
    },

    spy4: {
        image: 'assets/images/astra-mask.jpg',
        text: "Are you doubting our skills Ranger?",
        buttons: [
            ["Not at all!", "advanceTo(scenario.spy7)"]
        ]
    },

    spy5: {
        image: 'assets/images/astra-mask.jpg',
        text: "Asking a lot of questions...",
        buttons: [
            ["Do you trust them?", "advanceTo(scenario.spy6)"]
        ]
    },

    spy6: {
        image: 'assets/images/astra-mask.jpg',
        text: "Yes of course I do!",
        buttons: [
            ["Interesting...", "advanceTo(scenario.spy7)"]
        ]
    },

    spy7: {
        image: 'assets/images/astra-mask.jpg',
        text: "Come on let's take on Vex!",
        buttons: [
            ["Okay, I have a good plan to take him down", "advanceTo(scenario.spy8)"]
        ]
    },

    spy8: {
        image: 'assets/images/astra-mask.jpg',
        text: "Let's hear it then playerName",
        buttons: [
            ["You go up ahead, and I'll back you up", "advanceTo(scenario.spy9)"]
        ]
    },

    spy9: {
        image: 'assets/images/astra-mask.jpg',
        text: "Shall we call for back up?",
        buttons: [
            ["You've got this", "advanceTo(scenario.spy10)"],
            ["Nah we can take him!", "advanceTo(scenario.spy11)"]
        ]
    },

    spy10: {
        image: 'assets/images/vex-ship-multi.jpg',
        text: "It looks like Vex and the Magnetars are about to surround us playerName!",
        buttons: [
            ["I'm right behind you", "advanceTo(scenario.spy12)"]
        ]
    },

    spy11: {
        image: 'assets/images/vex-ship-multi.jpg',
        text: "Damn I miscalculated how many ships Vex has!",
        buttons: [
            ["Yeah you did!", "advanceTo(scenario.spy13)"],
            ["HAHAHA!", "advanceTo(scenario.spy14)"]
        ]
    },

    spy12: {
        image: 'assets/images/astra-ship.jpg',
        text: "playerName...? playerName...! playerName!!",
        buttons: [
            ["HAHAHA!!", "advanceTo(scenario.spy15)"]
        ]
    },

    spy13: {
        image: 'assets/images/astra-mask.jpg',
        text: "Wait how did you know this?",
        buttons: [
            ["...", "advanceTo(scenario.spy17)"]
        ]
    },

    spy14: {
        image: 'assets/images/astra-ship.jpg',
        text: "playerName??",
        buttons: [
            ["HAHAHA!", "advanceTo(scenario.spy17)"]
        ]
    },

    spy15: {
        image: 'assets/images/astra-mask.jpg',
        text: "Damn you've led me straight into Vex's trap!",
        buttons: [
            ["You bought this on yourself Astra", "advanceTo(scenario.spy16)"],
            ["Your too trusting Astra!", "advanceTo(scenario.spy17)"]
        ]
    },

    spy16: {
        image: 'assets/images/astra-mask.jpg',
        text: "Who are you really?",
        buttons: [
            ["You should know who I am!", "advanceTo(scenario.spy17)"]
        ]
    },

    spy17: {
        image: 'assets/images/astra-mask.jpg',
        text: "WAIT! How could I not see you were working with Vex this entire time!!?",
        buttons: [
            ["Finally figured it out Astra", "advanceTo(scenario.spy18)"]
        ]
    },

    spy18: {
        image: 'assets/images/astra-ship.jpg',
        text: "DAMN IT! playerName you were just trying to lure me by myself all this time!",
        buttons: [
            ["Aww don't feel bad", "advanceTo(scenario.spy19)"],
            ["Face it Vex is the true leader!", "advanceTo(scenario.spy20)"]
        ]
    },

    spy19: {
        image: 'assets/images/astra-ship.jpg',
        text: "How dare you!",
        buttons: [
            ["You mad now?", "advanceTo(scenario.spy21)"],
            ["Join us!", "advanceTo(scenario.spy22)"]
        ]
    },

    spy20: {
        image: 'assets/images/astra-mask.jpg',
        text: "How can you say that? He's destroyed so many planets!",
        buttons: [
            ["You can join us", "advanceTo(scenario.spy22)"],
            ["Meh it pays", "advanceTo(scenario.spy23)"]
        ]
    },

    spy21: {
        image: 'assets/images/astra-mask.jpg',
        text: "Of course I am! Do you realise what you have done?",
        buttons: [
            ["Of course", "advanceTo(scenario.spy24)"]
        ]
    },

    spy22: {
        image: 'assets/images/astra-mask.jpg',
        text: "I will never join Vex and the Magnetars!",
        buttons: [
            ["Suit yourself", "advanceTo(scenario.spy24)"],
            ["You want to die then", "advanceTo(scenario.spy25)"]
        ]
    },

    spy23: {
        image: 'assets/images/astra-mask.jpg',
        text: "Is that all that matters to you?",
        buttons: [
            ["Yeah", "advanceTo(scenario.spy26)"]
        ]
    },

    spy24: {
        image: 'assets/images/astra-mask.jpg',
        text: "Your going to pay by joining Vex!",
        buttons: [
            ["Aww I'm so scared", "advanceTo(scenario.spy27)"]
        ]
    },

    spy25: {
        image: 'assets/images/astra-ship.jpg',
        text: "I will defeat you all!",
        buttons: [
            ["Bring it on!", "advanceTo(scenario.spy27)"]
        ]
    },

    spy26: {
        image: 'assets/images/astra-mask.jpg',
        text: "But what about the peace in the galaxy?  Dose that not matter to you?",
        buttons: [
            ["Nope", "advanceTo(scenario.spy27)"]
        ]
    },

    spy27: {
        image: 'assets/images/astra-ship.jpg',
        text: "Damn you! I didn't want it to be like this!",
        buttons: [
            ["Too late for that!", "advanceTo(scenario.spy28)"]
        ]
    },

    spy28: {
        image: 'assets/images/astra-ship.jpg',
        text: "I don't think you truely understand who you are up against!",
        buttons: [
            ["Then show me", "advanceTo(scenario.spy29)"],
            ["I will take you out!", "advanceTo(scenario.spy30)"]
        ]
    },

    spy29: {
        image: 'assets/images/astra-ship.jpg',
        text: "There must be another way",
        buttons: [
            ["Too bad!", "advanceTo(scenario.spy31)"],
            ["FIRE!", "advanceTo(scenario.spy32)"]
        ]
    },

    spy30: {
        image: 'assets/images/astra-mask.jpg',
        text: "I can't believe you are siding with Vex! Take this!",
        buttons: [
            ["...!", "advanceTo(scenario.spy33)"],
            ["You going to shoot me?", "advanceTo(scenario.spy34)"]
        ]
    },

    spy31: {
        image: 'assets/images/astra-left.jpg',
        text: "You hit me? Damn you playerName",
        decreaseAmmo: true,
        buttons: [
            ["HAHAHA!", "advanceTo(scenario.spy35)"]
        ]
    },

    spy32: {
        image: 'assets/images/astra-right.jpg',
        text: "Ergh I'm much quicker than you and I'll dodge the next one!",
        decreaseAmmo: true,
        buttons: [
            ["I won't miss", "advanceTo(scenario.spy35)"],
            ["I'm quicker than you!", "advanceTo(scenario.spy36)"]
        ]
    },

    spy33: {
        image: 'assets/images/astra-ship.jpg',
        text: "See I can pack just as powerful punch as Vex!",
        decreaseHealth: true,
        buttons: [
            ["We shall see about that now", "advanceTo(scenario.spy37)"]
        ]
    },

    spy34: {
        image: 'assets/images/astra-ship.jpg',
        text: "Take that!",
        decreaseHealth: true,
        buttons: [
            ["Hmm not bad but can you dodge this", "advanceTo(scenario.spy38)"]
        ]
    },

    spy35: {
        image: 'assets/images/astra-ship.jpg',
        text: "Brace yourself this won't be pretty!",
        buttons: [
            ["Bring it on!", "advanceTo(scenario.spy39)"]
        ]
    },

    spy36: {
        image: 'assets/images/astra-ship.jpg',
        text: "Let's see if you can dodge this",
        buttons: [
            ["Bet I can", "advanceTo(scenario.spy39)"]
        ]
    },

    spy37: {
        image: 'assets/images/astra-right.jpg',
        text: "You surely don't want to be doing this",
        decreaseAmmo: true,
        buttons: [
            ["Nothing can stop me now!", "advanceTo(scenario.spy40)"]
        ]
    },

    spy38: {
        image: 'assets/images/astra-left.jpg',
        text: "Looks like you were not quick enough that time playerName",
        buttons: [
            ["Damn it", "advanceTo(scenario.spy40)"]
        ]
    },

    spy39: {
        image: 'assets/images/astra-ship.jpg',
        text: "Gotcha! TAKE THIS!",
        decreaseHealth: true,
        buttons: [
            ["I can handle this", "advanceTo(scenario.spy41)"]
        ]
    },

    spy40: {
        image: 'assets/images/astra-mask.jpg',
        text: "I guess I will have to take you down before taking on Vex",
        buttons: [
            ["You have to go through me first", "advanceTo(scenario.spy41)"],
            ["Bring it on!", "advanceTo(scenario.spy42)"]
        ]
    },

    spy41: {
        image: 'assets/images/astra-ship.jpg',
        text: "We shall see about that!",
        buttons: [
            ["I'm going to make Vex proud!", "advanceTo(scenario.spy43)"],
            ["You're not match for me!", "advanceTo(scenario.spy44)"]
        ]
    },

    spy42: {
        image: 'assets/images/astra-ship.jpg',
        text: "Fighting talk now, I know Vex and your weaknesses!",
        buttons: [
            ["!!", "advanceTo(scenario.spy45)"]
        ]
    },

    spy43: {
        image: 'assets/images/astra-mask.jpg',
        text: "Vex is not proud of any of anyone just himself! Take this!",
        buttons: [
            ["Damn it!", "advanceTo(scenario.spy46)"],
            ["WHAT of course he does!", "advanceTo(scenario.spy47)"]
        ]
    },

    spy44: {
        image: 'assets/images/image-4.jpg',
        text: "I think you have underestimated me...",
        buttons: [
            ["Damn you Astra!", "advanceTo(scenario.spy47)"],
            ["I don't think so!", "advanceTo(scenario.spy48)"]
        ]
    },

    spy45: {
        image: 'assets/images/astra-mask.jpg',
        text: "Your messing with the wrong rangers here playerName!",
        decreaseHealth: true,
        buttons: [
            ["I know what this is!", "advanceTo(scenario.spy49)"]
        ]
    },

    spy46: {
        image: 'assets/images/astra-mask.jpg',
        text: "By this rate you will be taken out!",
        decreaseHealth: true,
        buttons: [
            ["Not if I shoot you first!", "advanceTo(scenario.spy49)"]
        ]
    },

    spy47: {
        image: 'assets/images/astra-mask.jpg',
        text: "You've picked the wrong side playerName",
        decreaseHealth: true,
        buttons: [
            ["No I haven't!", "advanceTo(scenario.spy49)"]
        ]
    },

    spy48: {
        image: 'assets/images/astra-mask.jpg',
        text: "Lost for words I see",
        decreaseHealth: true,
        buttons: [
            ["No... You are the one who has underestimated me ", "advanceTo(scenario.spy49)"]
        ]
    },

    spy49: {
        image: 'assets/images/astra-left.jpg',
        text: "Let's end this now give me all you've got!",
        decreaseAmmo: true,
        buttons: [
            ["I'm not holding back anymore!", "advanceTo(scenario.spy50)"]
        ]
    },

    spy50: {
        image: 'assets/images/astra-mask.jpg',
        text: "Damn you! You've hit me pretty bad! But I'm not giving up yet!",
        buttons: [
            ["Told you FIRE!", "advanceTo(scenario.spy51)"],
            ["I'm taking you down!", "advanceTo(scenario.spy52)"]
        ]
    },

    spy51: {
        image: 'assets/images/astra-right.jpg',
        text: "You must have gone through some hardcore training",
        decreaseAmmo: true,
        buttons: [
            ["Hmph like I'd tell you", "advanceTo(scenario.spy53)"]
        ]
    },

    spy52: {
        image: 'assets/images/astra-left.jpg',
        text: "I'm not going without a fight!",
        decreaseAmmo: true,
        buttons: [
            ["I'm giving you my best shot!", "advanceTo(scenario.spy54)"]
        ]
    },

    spy53: {
        image: 'assets/images/static-astra-mask.jpg',
        text: "Let's see who the best aimer is then!",
        decreaseAmmo: true,  
        buttons: [
            ["Bring it on!", "advanceTo(scenario.scene1)"]
        ]
    },

    spy54: {
        image: 'assets/images/static-astra-mask.jpg',
        text: "Take that!",
        decreaseAmmo: true,  
        buttons: [
            ["TAKE THAT!", "advanceTo(scenario.scene1)"]
        ]
    },

    died1: {
        image: 'assets/images/coordinates-3.jpg', // coordinates
        text: "Oh head on! What a Ranger you are!  Here are the updated coordinates to take Vex head on!", 
        buttons: [
            ["I'm ready!", "advanceTo(scenario.died2)"]
        ]
    },

    died2: {
        image: 'assets/images/vex-ship.jpg',
        text: "Watch out playerName I see his ship up ahead try to stay out of his raider!", 
        buttons: [
            ["Okay I'll try", "advanceTo(scenario.died3)"],
            ["Nah head on!", "advanceTo(scenario.died4)"]
        ]
    },

    died3: {
        image: 'assets/images/astra-main.jpg',
        text: "Okay looks like you have gone undetected for now just try and get a bit closer", 
        buttons: [
            ["Roger!", "advanceTo(scenario.died5)"]
        ]
    },

    died4: {
        image: 'assets/images/vex-shiip.jpg',
        text: "playerName Vex has caught on to you you best be careful now!", 
        buttons: [
            ["Damn", "advanceTo(scenario.died6)"]
        ]
    },

    died5: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "One of the Magnetars ships has spotted you!", 
        buttons: [
            ["Try and dodge them", "advanceTo(scenario.died7)"]
        ]
    },

    died6: {
        image: 'assets/images/astra-main.jpg',
        text: "Try and get enough distance beetween you and Vex he's range is quite short!", 
        buttons: [
            ["I'll try!", "advanceTo(scenario.died8)"]
        ]
    },

    died7: {
        image: 'assets/images/astra-main.jpg',
        text: "Damn he got you! Looks like they are sending a warning to the rest of the ships!", 
        decreaseHealth: true,
        buttons: [
            ["Avoid", "advanceTo(scenario.died9)"],
            ["Full blast ahead", "advanceTo(scenario.died10)"]
        ]
    },

    died8: {
        image: 'assets/images/astra-main.jpg',
        text: "I'm calling in the Orbit Rangers who can give you back up!", 
        decreaseHealth: true,
        buttons: [
            ["I'll try and hold Vex off!", "advanceTo(scenario.died11)"],
            ["How long will that take?", "advanceTo(scenario.died12)"]
        ]
    },

    died9: {
        image: 'assets/images/astra-main.jpg',
        text: "II'm calling in the Orbit Rangers who can give you back up", 
        buttons: [
            ["I'll try and hold them off!", "advanceTo(scenario.died13)"],
            ["How long will that take?", "advanceTo(scenario.died14)"]
        ]
    },

    died10: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName at least wait for backup!", 
        buttons: [
            ["How long will that take?", "advanceTo(scenario.died14)"],
            ["It will be too late for that!", "advanceTo(scenario.died15)"]
        ]
    },

    died11: {
        image: 'assets/images/astra-main.jpg',
        text: "Try and hold Vex off as long as possible, The Orbit Rangers are on their way now", 
        decreaseHealth: true,
        buttons: [
            ["I'm taking damage here!", "advanceTo(scenario.died16)"]
        ]
    },

    died12: {
        image: 'assets/images/astra-main.jpg',
        text: "Not too long they are on their way! Just try and weaken Vex as much as possible!", 
        decreaseHealth: true,
        buttons: [
            ["Vex is too powerful!", "advanceTo(scenario.died16)"]
        ]
    },

    died13: {
        image: 'assets/images/enemy-ship-multi.jpg',
        text: "Try and hold them off as long as possible they are on their way now", 
        decreaseHealth: true,
        buttons: [
            ["They are attacking from all directions!", "advanceTo(scenario.died17)"]
        ]
    },

    died14: {
        image: 'assets/images/enemy-ship-multi.jpg',
        text: "Not too long they are on their way! Just try and hold them at bay!", 
        decreaseHealth: true,
        buttons: [
            ["There is too many of them!", "advanceTo(scenario.died17)"]
        ]
    },

    died15: {
        image: 'assets/images/enemy-ship-multi.jpg',
        text: "The Orbit Rangers are making there way as quickly as possible!", 
        decreaseHealth: true, 
        buttons: [
            ["I'm going in further!", "advanceTo(scenario.died18)"]
        ]
    },

    died16: {
        image: 'assets/images/vex-ship.jpg',
        text: "Vex is too strong try and get out of there playerName!", 
        decreaseHealth: true, 
        buttons: [
            ["I can't", "advanceTo(scenario.died19)"],
            ["I've come this far!", "advanceTo(scenario.died20)"]
        ]
    },

    died17: {
        image: 'assets/images/enemy-multi.jpg',
        text: "There is too many! Get out of there playerName", 
        buttons: [
            ["I'll try", "advanceTo(scenario.died21)"],
            ["I can do this!", "advanceTo(scenario.died22)"]
        ]
    },

    died18: {
        image: 'assets/images/enemy-multi.jpg',
        text: "It's too dangerous!", 
        buttons: [
            ["I'm okay with that!", "advanceTo(scenario.died22)"],
            ["I've had a good life!", "advanceTo(scenario.died23)"]
        ]
    },

    died19: {
        image: 'assets/images/astra-main.jpg',
        text: "Damn it playerName! Try and out manoeuvre him!", 
        buttons: [
            ["Okay", "advanceTo(scenario.died24)"],
            ["NAH! I can do this!", "advanceTo(scenario.died25)"]
        ]
    },

    died20: {
        image: 'assets/images/astra-main.jpg',
        text: "It's too dangerous!", 
        buttons: [
            ["I'm okay with that", "advanceTo(scenario.died25)"],
            ["I've had a good life", "advanceTo(scenario.died26)"]
        ]
    },

    died21: {
        image: 'assets/images/enemy-multi.jpg',
        text: "It looks like they have surrounded you playerName",
        decreaseHealth: true,  
        buttons: [
            ["I don't think I have much supplies left", "advanceTo(scenario.died27)"]
        ]
    },

    died22: {
        image: 'assets/images/enemy-multi.jpg',
        text: "There is a missile headed straight for you!", 
        decreaseHealth: true, 
        buttons: [
            ["Damn", "advanceTo(scenario.died27)"]
        ]
    },

    died23: {
        image: 'assets/images/enemy-multi.jpg',
        text: "WATCH OUT!! One is tailing behind you! ", 
        decreaseHealth: true, 
        buttons: [
            ["I can shake it", "advanceTo(scenario.died27)"]
        ]
    },

    died24: {
        image: 'assets/images/vex-ship-multi.jpg',
        text: "it looks like Vex and the Magnetars have surrouned you playerName", 
        decreaseHealth: true, 
        buttons: [
            ["I'm trying to take them all down!", "advanceTo(scenario.died27)"]
        ]
    },

    died25: {
        image: 'assets/images/vex-ship.jpg',
        text: "Vex is firing a powerful missile which is headed straight for you!", 
        decreaseHealth: true, 
        buttons: [
            ["Ouch!", "advanceTo(scenario.died27)"]
        ]
    },

    died26: {
        image: 'assets/images/vex-ship.jpg',
        text: "WATCH OUT! Vex has you locked on his site!", 
        decreaseHealth: true, 
        buttons: [
            ["I can handle it!", "advanceTo(scenario.died27)"]
        ]
    },

    died27: {
        image: 'assets/images/astra-main.jpg',
        text: "Just try and hang on a bit longer!", 
        buttons: [
            ["I don't have much time", "advanceTo(scenario.died28)"],
            ["Screw that I'm going for it!", "advanceTo(scenario.died29)"]
        ]
    },

    died28: {
        image: 'assets/images/astra-main.jpg',
        text: "Help is comming!", 
        decreaseHealth: true, 
        buttons: [
            ["Thanks Astra for everything", "advanceTo(scenario.died30)"]
        ]
    },

    died29: {
        image: 'assets/images/astra-main.jpg',
        text: "DAMN IT playerName! Help is on it's way!", 
        decreaseHealth: true, 
        buttons: [
            ["It's too late for that!", "advanceTo(scenario.died30)"]
        ]
    },

    died30: {
        image: 'assets/images/astra-main.jpg',
        text: "What are you talking about!? Don't do anything reckless now!", 
        decreaseHealth: true,
        buttons: [
            ["I have one more trick to pull", "advanceTo(scenario.died31)"]
        ]
    },

    died31: {
        image: 'assets/images/static-astra-main.jpg',
        text: "Don't do anything stupid now! We need you!", 
        buttons: [
            ["This is my fate Astra", "advanceTo(scenario.died32)"]
        ]
    },

    died32: {
        image: 'assets/images/static-astra-main.jpg',
        text: "What do you mean your fate! We can do this together!", 
        buttons: [
            ["I'm going to help the only way I know how to", "advanceTo(scenario.died33)"]
        ]
    },

    died33: {
        image: 'assets/images/static-astra-main.jpg',
        text: "playerName?? playerName??!! playerName!! Can you hear me? playerName! playerName!!!!", 
        buttons: [
            ["...", "advanceTo(scenario.died34)"]
        ]
    },

    died34: {
        image: 'assets/images/static-astra-main.jpg',
        text: "...", 
        decreaseHealth: true,
        buttons: [
            ["...", "advanceTo(scenario.scene1)"]
        ]
    },

    ammo1: {
        image: 'assets/images/coordinates-4.jpg', // coordinates
        text: "I like your style playerName! I'm sending you Vex's location", 
        buttons: [
            ["Let's fly!", "advanceTo(scenario.ammo2)"]
        ]
    },

    ammo2: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice flying there playerName! You really do know how to navigate through space", 
        buttons: [
            ["Oh yeah!", "advanceTo(scenario.ammo3)"],
            ["I've been practicing", "advanceTo(scenario.ammo4)"]
        ]
    },

    ammo3: {
        image: 'assets/images/astra-main.jpg',
        text: "We should be able to get you close enough undetected so you can take down Vex!", 
        buttons: [
            ["Let's do this!", "advanceTo(scenario.ammo5)"]
        ]
    },

    ammo4: {
        image: 'assets/images/astra-main.jpg',
        text: "You should teach the other Orbit Rangers when this is over!", 
        buttons: [
            ["Yeah of course!", "advanceTo(scenario.ammo5)"]
        ]
    },

    ammo5: {
        image: 'assets/images/vex-ship.jpg',
        text: "I see Vex's ship up ahead, you'll need to slow down and disengage your engine", 
        buttons: [
            ["Roger", "advanceTo(scenario.ammo6)"]
        ]
    },

    ammo6: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice work! Do you want to take Vex head on or keep sneaking?", 
        buttons: [
            ["Head on", "advanceTo(scenario.ammo7)"],
            ["Sneak some more", "advanceTo(scenario.ammo8)"]
        ]
    },

    ammo7: {
        image: 'assets/images/astra-main.jpg',
        text: "Okay I've sent a message to the other Orbit Rangers to come and assit you they should be here to help give you a distraction!", 
        buttons: [
            ["Thanks Astra!", "advanceTo(scenario.ammo9)"]
        ]
    },

    ammo8: {
        image: 'assets/images/astra-main.jpg',
        text: "Good choice! You should be able to get pass without being detected!", 
        buttons: [
            ["Let's get him!", "advanceTo(scenario.ammo10)"]
        ]
    },

    ammo9: {
        image: 'assets/images/astra-main.jpg',
        text: "Orbit Ranger's here and assisting you playerName fire when ready!", 
        buttons: [
            ["Take that Vex!", "advanceTo(scenario.ammo11)"]
        ]
    },

    ammo10: {
        image: 'assets/images/astra-main.jpg',
        text: "Okay you should be close enough to cause some damage on him!", 
        buttons: [
            ["FIRE!", "advanceTo(scenario.ammo11)"]
        ]
    },

    ammo11: {
        image: 'assets/images/astra-main.jpg',
        text: "Whoo you really got him good! But he's noticed now make sure you dodge Vex's incoming missiles!", 
        decreaseAmmo: true,
        buttons: [
            ["Barrel roll Right", "advanceTo(scenario.ammo12)"],
            ["Barrel roll Left", "advanceTo(scenario.ammo13)"]
        ]
    },

    ammo12: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice move there playerName! Quick hit him back!", 
        buttons: [
            ["Right Wing", "advanceTo(scenario.ammo14)"],
            ["Cockpit", "advanceTo(scenario.ammo15)"]
        ]
    },

    ammo13: {
        image: 'assets/images/astra-main.jpg',
        text: "Great flying there playerName, you have a clear shot of either the Tail or Left Wing!", 
        buttons: [
            ["Tail", "advanceTo(scenario.ammo16)"],
            ["Left Wing", "advanceTo(scenario.ammo17)"]
        ]
    },

    ammo14: {
        image: 'assets/images/vex-cockpit.jpg',
        text: "Nice! That seems to have unbalanced him! You have a good shot right for the Cockpit now!", 
        decreaseAmmo: true,
        buttons: [
            ["Shoot Cockpit", "advanceTo(scenario.ammo18)"]
        ]
    },

    ammo15: {
        image: 'assets/images/vex-right.jpg',
        text: "WOW! What a direct hit! Way to shoot, Quick playerName keep shooting him!", 
        decreaseAmmo: true,
        buttons: [
            ["Shoot Right Wing", "advanceTo(scenario.ammo18)"]
        ]
    },

    ammo16: {
        image: 'assets/images/vex-left.jpg',
        text: "Good Shooting! You've made Vex spin out of control! Keep giving it all you got! Try and take down the Left Wing!", 
        decreaseAmmo: true,
        buttons: [
            ["Shoot Left Wing", "advanceTo(scenario.ammo19)"]
        ]
    },

    ammo17: {
        image: 'assets/images/vex-tail.jpg',
        text: "Great work playerName you've managed to destabilise him now! ", 
        decreaseAmmo: true,
        buttons: [
            ["Take down the Tail!", "advanceTo(scenario.ammo19)"]
        ]
    },

    ammo18: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice work there! That really has thrown Vex off! Let's keep the pressure on him now!", 
        decreaseAmmo: true,
        buttons: [
            ["You've got it!", "advanceTo(scenario.ammo20)"]
        ]
    },

    ammo19: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice shooting playerName! Looks like Vex is unable to control his ship now!", 
        decreaseAmmo: true,
        buttons: [
            ["I know!", "advanceTo(scenario.ammo21)"]
        ]
    },

    ammo20: {
        image: 'assets/images/astra-main.jpg',
        text: "Vex is powering up his super charged missle again you will need to be extra quick to dodge this one!", 
        buttons: [
            ["Barrel roll to the right", "advanceTo(scenario.ammo22)"],
            ["Barrel roll to the Left", "advanceTo(scenario.ammo23)"]
        ]
    },

    ammo21: {
        image: 'assets/images/astra-main.jpg',
        text: "Looks like Vex is targetting back on to you again!", 
        buttons: [
            ["Dodge up", "advanceTo(scenario.ammo24)"],
            ["Dodge Down", "advanceTo(scenario.ammo25)"]
        ]
    },

    ammo22: {
        image: 'assets/images/astra-main.jpg',
        text: "Quick reflects there playerName let's see if you can get another hit in!", 
        decreaseFuel: true,
        buttons: [
            ["Tail", "advanceTo(scenario.ammo26)"],
            ["Left Wing", "advanceTo(scenario.ammo27)"]
        ]
    },

    ammo23: {
        image: 'assets/images/astra-main.jpg',
        text: "Way to move quickly out of the way playerName! His Left Wing and Tail are open! ", 
        decreaseFuel: true,
        buttons: [
            ["Shoot Left Wing", "advanceTo(scenario.ammo27)"],
            ["Shoot Tail", "advanceTo(scenario.ammo26)"]
        ]
    },

    ammo24: {
        image: 'assets/images/astra-main.jpg',
        text: "Way to pilot that space ship playerName! Vex is nearly down! just the Right wing or Cockpit left!", 
        decreaseFuel: true,
        buttons: [
            ["Shoot Right Wing", "advanceTo(scenario.ammo29)"],
            ["Shoot Cockpit", "advanceTo(scenario.ammo28)"]
        ]
    },

    ammo25: {
        image: 'assets/images/astra-main.jpg',
        text: "What a way to fly playerName! Quick while Vex is unaware you just need to take down the Right Wing or Cockpit!", 
        decreaseFuel: true,
        buttons: [
            ["Shoot Cockpit", "advanceTo(scenario.ammo28)"],
            ["Shoot Right Wing", "advanceTo(scenario.ammo29)"]
        ]
    }, 

    ammo26: {
        image: 'assets/images/vex-left.jpg',
        text: "Amazing work there playerName looks like you can really set off course by targetting his Left Wing!", 
        decreaseAmmo: true,
        buttons: [
            ["Target left Wing", "advanceTo(scenario.ammo30)"]
        ]
    },

    ammo27: {
        image: 'assets/images/vex-tail.jpg',
        text: "That was awesome playerName! It looks like vex's ship is falling! You just have the Tail to take out now!", 
        decreaseAmmo: true,
        buttons: [
            ["Shoot at the Tail", "advanceTo(scenario.ammo30)"]
        ]
    },

    ammo28: {
        image: 'assets/images/vex-right.jpg',
        text: "Vex never saw that comming! Way to shoot! Now you can set him off course for good, aim for the Right Wing!", 
        decreaseAmmo: true,
        buttons: [
            ["Aim at Right Wing", "advanceTo(scenario.ammo30)"]
        ]
    },

    ammo29: {
        image: 'assets/images/vex-cockpit.jpg',
        text: "You've saved the best to last! Only left is to take down the Cockpit!!", 
        decreaseAmmo: true,
        buttons: [
            ["Fire at the Cockpit!", "advanceTo(scenario.ammo30)"]
        ]
    },

    ammo30: {
        image: 'assets/images/astra-main.jpg',
        text: "You have some very impressive shooting styles there playerName!", 
        decreaseAmmo: true,
        buttons: [
            ["Thanks Astra!", "advanceTo(scenario.ammo31)"]
        ]
    },

    ammo31: {
        image: 'assets/images/astra-main.jpg',
        text: "The Orbit Rangers are able to keep the rest of the Magnetars at bay while you issue the final blow!", 
        buttons: [
            ["I've got this Astra!", "advanceTo(scenario.ammo32)"]
        ]
    },

    ammo32: {
        image: 'assets/images/vex-cockpit.jpg',
        text: "You just need to hit Vex one more time and we've won!", 
        buttons: [
            ["Mission Completed", "advanceTo(scenario.ammo33)"]
        ]
    },    

    ammo33: {
        image: 'assets/images/vex-cockpit.jpg',
        text: "...", 
        decreaseAmmo: true,
        buttons: [
            ["...", "advanceTo(scenario.scene1)"]
        ]
    },    

    captured1: {
        image: 'assets/images/coordinates-2.jpg', // pathing route 
        text: "Southeast it is! I'll send you a pathing route for you to take!", 
        buttons: [
            ["Better not take long!", "advanceTo(scenario.captured2)"]
        ]
    },    

    captured2: {
        image: 'assets/images/coordinates-2.jpg',
        text: "Yeah yeah! Just quickly make your way here!", 
        buttons: [
            ["I'll try", "advanceTo(scenario.captured3)"]
        ]
    },    

    captured3: {
        image: 'assets/images/astra-main.jpg',
        text: "playerName what is taking you so long you should be hear by now!", 
        buttons: [
            ["Oh I got lost", "advanceTo(scenario.captured4)"],
            ["I didn't follow your coordinates", "advanceTo(scenario.captured5)"]
        ]
    },    

    captured4: {
        image: 'assets/images/astra-main.jpg',
        text: "How did you get lost?", 
        buttons: [
            ["I took the wrong turning!", "advanceTo(scenario.captured5)"]
        ]
    },    

    captured5: {
        image: 'assets/images/coordinates-2.jpg', // pathing with players location
        text: "Are you able to navigate back on to the pathing route I sent you? I've been able to track you", 
        buttons: [
            ["I can try..", "advanceTo(scenario.captured8)"]
        ]
    },    

    captured6: {
        image: 'assets/images/astra-main.jpg',
        text: "Why not? Come on playerName we are loosing precious time here", 
        buttons: [
            ["So you keep sayiing", "advanceTo(scenario.captured7)"]
        ]
    },    

    captured7: {
        image: 'assets/images/astra-main.jpg',
        text: "Please playerName!", 
        buttons: [
            ["Nope", "advanceTo(scenario.captured8)"]
        ]
    },    

    captured8: {
        image: 'assets/images/astra-main.jpg',
        text: "WAIT playerName you are heading in the opposite direction!", 
        buttons: [
            ["Yeah I know", "advanceTo(scenario.captured9)"]
        ]
    },    

    captured9: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Watch out playerName one of Vex's crew has spotted you!", 
        decreaseFuel: true,
        buttons: [
            ["I don't need your help", "advanceTo(scenario.captured10)"],
            ["I can take him", "advanceTo(scenario.captured11)"]
        ]
    },    

    captured10: {
        image: 'assets/images/astra-main.jpg',
        text: "Let me help you! I will be able to let you know when he is about to fire", 
        decreaseHealth: true,
        buttons: [
            ["I've got this", "advanceTo(scenario.captured12)"],
            ["I can take him", "advanceTo(scenario.captured13)"]
        ]
    },    

    captured11: {
        image: 'assets/images/astra-main.jpg',
        text: "You will have to be quick to out manoeuvre him!", 
        decreaseHealth: true,
        buttons: [
            ["I'm on it", "advanceTo(scenario.captured14)"],
            ["I can handle this", "advanceTo(scenario.captured15)"]
        ]
    },    

    captured12: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Looks like he's about to shoot again! You will have to out manoeuvre him!", 
        buttons: [
            ["Turbo Boost!", "advanceTo(scenario.captured16)"]
        ]
    },    

    captured13: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "He's about to fire watch out!", 
        buttons: [
            ["...", "advanceTo(scenario.captured17)"]
        ]
    },    

    captured14: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "He's right on your tail! looks like he's about to fire!", 
        buttons: [
            ["Gargh!", "advanceTo(scenario.captured18)"]
        ]
    },    

    captured15: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "He's catching up to you!", 
        buttons: [
            ["I'm quicker than him", "advanceTo(scenario.captured19)"]
        ]
    },    

    captured16: {
        image: 'assets/images/astra-main.jpg',
        text: "Phew that was a close one!", 
        decreaseFuel: true,
        buttons: [
            ["I can take him!", "advanceTo(scenario.captured20)"]
        ]
    },    

    captured17: {
        image: 'assets/images/astra-main.jpg',
        text: "Damn looks like he's hit you pretty bad!", 
        decreaseHealth: true,
        buttons: [
            ["Jeez!", "advanceTo(scenario.captured21)"]
        ]
    },    

    captured18: {
        image: 'assets/images/astra-main.jpg',
        text: "Damn I can see he's hit your tail pretty bad!", 
        decreaseHealth: true,
        buttons: [
            ["Man I just had that repaired too!", "advanceTo(scenario.captured22)"]
        ]
    },    

    captured19: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice piloting there playerName", 
        decreaseFuel: true,
        buttons: [
            ["Told ya I was quick!", "advanceTo(scenario.captured23)"]
        ]
    },    

    captured20: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Watch out playerName he's firing from the left now!", 
        buttons: [
            ["Alright", "advanceTo(scenario.captured24)"]
        ]
    },    

    captured21: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Are you able to make it?", 
        decreaseFuel: true,
        buttons: [
            ["Of course I will!", "advanceTo(scenario.captured28)"]
        ]
    },    

    captured22: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "He's reloading again! Quickly try and avoid it!", 
        buttons: [
            ["Boost Forward", "advanceTo(scenario.captured25)"]
        ]
    },    

    captured23: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Watch out playerName incoming missile from the right hand side!", 
        buttons: [
            ["Damn it!", "advanceTo(scenario.captured26)"] 
        ]
    },    

    captured24: {
        image: 'assets/images/astra-main.jpg',
        text: "He's hit your wing! Try to re-stabilize it!", 
        decreaseHealth: true,
        buttons: [
            ["I can manage!", "advanceTo(scenario.captured28)"]
        ]
    },    

    captured25: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice work playerName looks like you managed to avoid it!",
        decreaseFuel: true, 
        buttons: [
            ["That was close!", "advanceTo(scenario.captured27)"]
        ]
    },    

    captured26: {
        image: 'assets/images/astra-main.jpg',
        text: "Are you okay? Looks like he hit you pretty bad!", 
        decreaseHealth: true,
        buttons: [
            ["She can hold!", "advanceTo(scenario.captured27)"]
        ]
    },     

    captured27: {
        image: 'assets/images/astra-main.jpg',
        text: "Phew! I dond't think you are out of trouble just yet!", 
        buttons: [
            ["Bring it on!", "advanceTo(scenario.captured28)"]
        ]
    },    

    captured28: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Looks like he's coming back again and about to fire, try and dodge it!", 
        buttons: [
            ["Dodge Left", "advanceTo(scenario.captured29)"],
            ["Dodge Right", "advanceTo(scenario.captured30)"]
        ]
    },    

    captured29: {
        image: 'assets/images/astra-main.jpg',
        text: "Phew you managed to just miss it! Nice flying there playerName!", 
        decreaseFuel: true,
        buttons: [
            ["I'm unable to control my ship!", "advanceTo(scenario.captured31)"]
        ]
    },    

    captured30: {
        image: 'assets/images/astra-main.jpg',
        text: "Nice flying that was such a close call! It nearly hit you!", 
        decreaseFuel: true,
        buttons: [
            ["My ship can't take much more", "advanceTo(scenario.captured31)"]
        ]
    },    

    captured31: {
        image: 'assets/images/astra-main.jpg',
        text: "I'm doing a system check", 
        buttons: [
            ["Can you fix it?", "advanceTo(scenario.captured32)"],
            ["Quick I'm loosing power!", "advanceTo(scenario.captured33)"]
        ]
    },    

    captured32: {
        image: 'assets/images/astra-main.jpg',
        text: "Bad news playerName I can't fix your ship from here, you will have to turn off your fuel", 
        buttons: [
            ["But I won't be able to move!", "advanceTo(scenario.captured34)"],
            ["I can try", "advanceTo(scenario.captured35)"]
        ]
    },    

    captured33: {
        image: 'assets/images/astra-main.jpg',
        text: "I'm on my way and called for back up, you think you can last a bit longer?", 
        buttons: [
            ["I can try", "advanceTo(scenario.captured36)"],
            ["I'm not going to loose", "advanceTo(scenario.captured37)"]
        ]
    },    

    captured34: {
        image: 'assets/images/astra-main.jpg',
        text: "It won't take long Ranger!", 
        buttons: [
            ["Turn fuel off", "advanceTo(scenario.captured38)"]
        ]
    },    

    captured35: {
        image: 'assets/images/astra-main.jpg',
        text: "I'll send back up in the mean time and I'm on my way too!", 
        buttons: [
            ["Will they arrive in time?", "advanceTo(scenario.captured38)"]
        ]
    },    

    captured36: {
        image: 'assets/images/astra-main.jpg',
        text: "I'm travelling as fast as I can just hold on a bit longer!", 
        buttons: [
            ["Hurry!", "advanceTo(scenario.captured39)"]
        ]
    },    

    captured37: {
        image: 'assets/images/astra-main.jpg',
        text: "I'm almost there! just a bit longer!", 
        buttons: [
            ["Bring it on!", "advanceTo(scenario.captured39)"]
        ]
    },    

    captured38: {
        image: 'assets/images/astra-main.jpg',
        text: "Looks like you're able to resart the engines again", 
        buttons: [
            ["Man that was close!", "advanceTo(scenario.captured40)"],
            ["It wasn't easy!", "advanceTo(scenario.captured40)"]
        ]
    },    

    captured39: {
        image: 'assets/images/astra-main.jpg',
        text: "Damn just how far away are you?", 
        buttons: [
            ["I'm not sure!", "advanceTo(scenario.captured41)"],
            ["I've drifted off course!", "advanceTo(scenario.captured41)"]
        ]
    },       

    captured40: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Your not in the clear yet! Looks like he's aiming again for you!", 
        buttons: [
            ["Huh? I thought I took care of him!", "advanceTo(scenario.captured42)"]
        ]
    },     

    captured41: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "playerName I don't think you're in the clear yet! He's coming up right behind you!", 
        buttons: [
            ["SAY WHAT?", "advanceTo(scenario.captured43)"]
        ]
    },    

    captured42: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "He's been charging his new weapona this entire time and looks like he's planning to use it on you!", 
        decreaseHealth: true,
        buttons: [
            ["What do I do?", "advanceTo(scenario.scene1)"]
        ]
    },    

    captured43: {
        image: 'assets/images/enemy-ship-one.jpg',
        text: "Damn it playerName he's been on your tail this entire time! Wait this weapon is a lot more powerful! You might not be able to dodge in time!", 
        decreaseHealth: true,
        buttons: [
            ["The fun just doesn't stop!", "advanceTo(scenario.scene1)"]
        ]
    },    
};

// -- STARTS THE GAME -- //
advanceTo(scenario.scene1);

