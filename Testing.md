Testing
Contents
Functionality Testing
On all pages
index.html
game.html
contact.html
User Story Testing
Performance Testing
Responsive
W3C Validator
JSHint
Bugs

Functionality Testing
Browsers tested: Google Chrome, Mozilla Firefox & Opera.
The devices used in this testing include Samsung S10 v.Android 10. //ask other users…?

OnLoad Display

Expected: modal to load on screen start
Testing: when browser is refreshed, link is clicked, html is opened
Results: modal loads 

Expected: to not dismiss the modal when clicked outside of the modal & no ‘X’ button is present
Testing: clicked outside of the modal
Results: modal is not dismissed making the user use the input field to start the game

Expected: input field should not be left blank when user clicks on the ‘descend’ button
Testing: 
Results: 

Expected: when hovering over the ‘Descend’ button to change background and text colour 
Testing: tested by hovering over the ‘Descend’ button
Results: ‘Descend’ button changes background colour and text colour

Expected: when ‘Descend’ button is clicked to take the user to the start of the game
Testing: tested by clicking the ‘Descend’ button
Results: modal is removed, and the game container is displayed

Responsiveness

Expected: modal, text, input field and button to be responsive to screen size and width
Testing: through different screen sizes and Google Chrome Dev tools
Results: modal, text, input field and button are all fit to screen size and width

Footer Social navigation links

Home Icon

Expected: when hovering over 'home' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: clicking on 'home' button pops up modal to take the user back to the beginning
Testing: tested by clicking 'home' icon
Result: Opens ‘home’ modal
Expected: to be able to dismiss the modal when clicked outside the modal
Testing: clicked outside of the modal
Results: modal is dismissed and returns user back at the same point it was clicked

Expected: when hovering over the ‘X’ icon to change colour
Testing: tested by hovering over item
Results: ‘X’ changes colour on hover

Expected: when click on the ‘X’ icon to close the modal
Testing: tested by clicking on the ‘X’ 
Results: modal is closed and returns user back at the same point it was clicked

Expected: when hovering over the ‘Home’ button to change background and text colour, when user hovers out to return to original pre-set colour 
Testing: tested by hovering over item 
Results: ‘Home’ button changes colour of text and background colour on hover

Expected: when ‘Home’ button is clicked to remove modal, main game container and display end of game scenario 
Testing:  tested by clicking the ‘Home’ button
Results: modal, and game container is removed, text is displayed with a ‘refresh’ icon to take the user back to the main game

Expected: when hovering over the ‘refresh’ icon to change colour, increase size and rotate continuously when user stays hovered over, this stops when the user is not hovering over the icon 
Testing: tested by hovering over the ‘refresh’ icon
Results: ‘refresh’ icon changes colour, increases size and rotates on hover

Expected: when clicked on ‘refresh’ icon to refresh the browser page
Testing: tested by clicking the ‘refresh’ icon
Results: text and ‘refresh’ icon is then removed and the browser is re-loaded back to the main game screen to re-play again (with new name)

Responsiveness

Expected: home modal, text, and button to be responsive to screen size and width
Testing: through different screen sizes and Google Chrome Dev tools
Results: modal, text and button are all fit to screen size and width

Expected: ending home text and ‘refresh’ icon to be responsive to screen size and width
Testing: through different screen sizes and Google Chrome Dev tools
Results: ending home text and ‘refresh’ icon are all fit to screen size and width


Email Icon

Expected: when hovering over 'email' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: clicking on 'email' button pops up modal to display a contact form so the user can submit their feedback / contact me if they wish regarding the site
Testing: tested by clicking 'email' icon
Result: Opens ‘Contact’ modal

Expected: to be able to dismiss the modal when clicked outside the modal
Testing: clicked outside of the modal
Results: modal is dismissed and returns user back at the same point it was clicked

Expected: when hovering over the ‘X’ icon to change colour
Testing: tested by hovering over item
Results: ‘X’ changes colour on hover

Expected: when click on the ‘X’ icon to close the modal
Testing: tested by clicking on the ‘X’ 
Results: modal is closed and returns user back at the same point it was clicked

Expected: when hovering over the ‘Submit’ & ‘Reset’ button to change background and text colour, when user hovers out to return to original pre-set colour 
Testing: tested by hovering over item 
Results: Submit’ & ‘Reset’ button changes colour of text and background colour on hover

Expected: when ‘Submit’ button is clicked an alert to show the user the form has been submitted & received, contact form is reset and modal closes 
Testing:  
Results: 

Expected: form should not submit without all fields completed
Testing: 
Result: 

Expected: when ‘Reset’ button is clicked this should empty all fields of information
Testing: 
Result: 

Form validation
Expected: email address field should only allow email addresses
Testing: typed with no @ symbol
Result: field validation feedback 'Please include an @ in the email address'
emailJS
Expected: when user sends feedback it is received to email address
Testing: sent feedback form on contact.html
Result: feedback form received to email
Form reset after feedback sent
Expected: form resets after form submitted
Testing: send form to test it resets
Fix: I used jQuery on submit event to correct this

Responsiveness

Expected: contact modal, text, input fields and button to be responsive to screen size and width, 
Testing: through different screen sizes and Google Chrome Dev tools
Results: contact modal, text, input fields and button are all fit to screen size and width landscape and smaller screen has a scrollable pre-fixed display built in by using bootstrap

Question Icon

Expected: when hovering over 'question' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: clicking on 'uestion' icon pops up modal to explain what their mission objective is for the game and how to play
Testing: tested by clicking 'question' icon
Result: Opens ‘How to Play’ modal

Expected: to be able to dismiss the modal when clicked outside the modal
Testing: clicked outside of the modal
Results: modal is dismissed and returns user back at the same point it was clicked

Expected: when hovering over the ‘X’ icon to change colour
Testing: tested by hovering over item
Results: ‘X’ changes colour on hover

Expected: when click on the ‘X’ icon to close the modal
Testing: tested by clicking on the ‘X’ 
Results: modal is closed and returns user back at the same point it was clicked

Expected: when hovering over the ‘Ready?’ button to change background and text colour, when user hovers out to return to original pre-set colour 
Testing: tested by hovering over item 
Results: ‘Ready?’ button changes colour of text and background colour on hover

Expected: when ‘Ready?’ button is clicked to remove modal, returns user back at the same point it was 
Testing:  tested by clicking the ‘Ready?’ button
Results: modal is dismissed and returns user back at the same point it was clicked

Responsiveness

Expected: home modal, text, and button to be responsive to screen size and width, 
Testing: through different screen sizes and Google Chrome Dev tools
Results: home modal, text, and button are all fit to screen size and width landscape and smaller screen has a scrollable pre-fixed display built in by using bootstrap

Audio Icon

Expected: when hovering over 'audio' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: when ‘audio’ icon is clicked sound to be enabled and icon to change to ‘audio with sound’ icon
Testing: 
Results: 

Expected: when ‘audio’ icon is clicked again sound to be muted and ‘audio muted’ icon is to be displayed
Testing: 
Results: 


LinkedIn Icon

Expected: when hovering over 'LinkedIn' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: when clicking on the ‘LinkedIn’ icon takes the user to my LinkedIn page
Testing: tested by clicking on the ‘LinkedIn’ icon
Results: link takes user to // insert LinkedIn page

GitHub Icon

Expected: when hovering over 'GitHub' icon, the icon changes colour, increases size and pulses
Testing: tested by hovering over item
Result: icon changes colour, increases and pulses when item is hovered over

Expected: when clicking on the ‘GitHub’ icon takes the user to my GitHub repo page
Testing: tested by clicking on the ‘GitHub’ icon
Results: link takes user to // insert GitHub page

Game Container

Image Container

Expected: image is to load and change on different scenarios
Testing: <img> tag first 
Results: this was not responsive had to amend the sizing which became problematic on each page load and screen size
Fix: change the <img> tag to a background image so this could be contained inside the element 
Final Results: image changes on different sizes and is responsive to different screen sizes

Text & Option Containers

Expected: game play text and options are displayed when user starts the game  
Testing: after clicking the ‘Descend’ button on main page load
Results: game play text and options are displayed

Expected: when hovering over and ‘Option’ button to change background and text colour, when user hovers out to return to original pre-set colour 
Testing: tested by hovering over ‘Option’ button
Results: ‘Option’ button changes colour of text and background colour on hover

Expected: when option is selected the next question shows 
Testing: click an option to proceed
Results: next option is displayed

Responsiveness

Expected: to be displayed and re-sized across different screen sizes and width
Testing: re-layout the smaller screen and landscape screen for more visual readability and to make the most of the available space
Results: multiple testing and layout plans to achieve the look, smaller screens have text and buttons stacked so they take up the full width 
Testing User Stories
I used my user stories and documented each of the steps that each user would need to accomplish what they have stated. Below is the link to the document that contains this information.

As a text adventure game fan

Expectation 1: I want to play the game to find out which ending scenario I would get depending on my choices throughout the game play 
Testing: I played the game through once to get my first outcome 
Result: see screenshot //link update to my first play through once the story mode is completed

Expectation 2: I want to be able to interact via social media through the social media links in the footer
Testing: check footer to see links to social media included to open in new tab easily
Result: see screenshot //link for image of navigation links

Expectation 3: I want the site to have images from my own design to help portray the game play and experience through the option scenarios
Testing: played through the game to see different imager / character change
Restult: see screenshot 1 and 2 //link update to my links images

Expectation 4: I want to explore different options / choices to see which ending I would end up with 
Testing: play the game to see different ending options
Result: see 1, 2, 3, 4 //link show 2 ending options 

Expectation 5: I want the text adventure game to reflect the theme and story mode, so this was more captivating 
Testing: researched space theme, control boards and scenery
Result: // make space mood board for imagery / scenes and character development

As a user returning to the site

Expectation 6: I want to be able to do the text adventure game multiple times to see which ending I will be able to receive
Testing: Play the game and try again to get different scenario
Result: ‘refresh icon’ to refresh the page to try the game again after each scenario ending

As a user who does not play text adventure

Expectation 7: I want a text adventure game where I travel on an experience through space and enjoy the character development 
Testing: complete quiz to see which scenario I will receive and what the outcome of my decisions were

Expectation 8: I want to see a character guide and interact with my through my decisions through the game play to make it more engaging and interactive
Testing: check all options that represents the characters emotions, and all endings are working // run through
Result: all options and endings are working // see if any fixes are needed

Expectation 9: I want to see a help section to get information on how to play the game
Testing: Trigger help modal from each page
Result: help modal triggers as expected on each page

All users

Expectation 10: I want the site to be easy to navigate on mobile primarily so I can complete it on the go and this also makes it easier to share with others
Testing: test all pages on different mobiles

Expectation 11: I want the ability to turn on and off the audio 
Testing: test audio button to turn ‘On’ and ‘Off’ the audio 
Result: // to check

Expectation 12: I want the text adventure game to be slick, so each scenario / option is displayed one at a time to prevent scrolling and general clutter
Testing: click through game to ensure each text, imagery and option is visible
Result: game play works with each change of imagery, text and options // link for screen shot

Expectation 13: I want to be able to contact the site owner with feedback
Testing: click contact icon to open contact form modal
Result: Contact page has feedback form //link for contact form

Responsive Design Testing

I used Google Chrome's Development tools // link and Mattkersley Responsive Design site //link to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

I used my own phone to test the orientation and how the site differs from portrait to landscape and to get a feel on the user experience.

To test my whole website, I went through each page, feature by feature, and documented the results on a spreadsheet. The spreadsheet also documents any responsive features and confirms that they work and appear as intended on different screen sizes. The link to the spreadsheet it below:

Responsive testing-checklist //link to the pdf visual

Performance Testing

Lighthouse Report Result -Main issues to bring down the performance score were things outwith my control - eg. Bootstrap links (error unused CSS) and caching issues (requesting http cache-control)

Validation

W3C tests completed for html and css pages

W3C testing completed for: index.html
No issues with W3C Validator on Markup except on game.html where there was a recommendation to follow semantic headings after section, however when script.js is added on the live site this uses an h2 element so resolved upon game play.

style.css testing completed with issues regarding the webkit vendor extensions which are to be expected and it also warns about using the same background colour and borders for buttons. There is enough of a contract between the text and background for this not to be an issue. I attempted to save this as a PDF but GitPod wouldn't accept it so saved as PNG and assessor should zoom in to see all the information, thanks.

Bugs

Main Background
o	Issue: Image not showing on the main html page
o	Testing:  
1.	Added background image to the main.css file – this did not link through came up with error “failed to load resource the server responded with a status 404”
2.	Add file direct to html inline body tag to test if this worked

o	Results: background image is now visible in the main html body

Game container
o	Issue: main game container did not fit into the outer container when the screen is resized / reduced
o	Testing: 
1.	Tested on boot strap grid system– was still not re-sizing and having the right formation
2.	Changed layout to a css grid template

o	Results: amend the layout to be in a css grid layout so this was easier to manipulate and move containers around

Text / Button Container
o	Issue: The text / buttons and fuel and missiles do not fit within the main game container
o	Testing: 
1.	Tested on boot strap – was still not re-sizing and having the right formation
2.	Changed layout to a css grid template

o	Results: amend the layout to be in a css grid layout so this was easier to manipulate and move containers around

Image container
o	Issue: Image does not fit or re-size in the main container 
o	Testing: 
1.	Targeted wrong element, as JS was creating the image nothing was inputted in HTML just the container
2.	Added a class to the image tag to amend the image resizing issue, this was still not resizing the image
3.	Tested this as a background image to see if the sizing is resized on different screen sizes

o	Results: changed the image to be a background image url so this is easier to contain and cover the image container through different screen sizes 

How to play -NOTES
•	Change to e in game rather than sperate this way no not need to add another styling element and then the player can choose if they wish to see how to play rather than trying to stop game play to see how to play the game //to be developed

Contact Modal
o	Issue: When the user clicks inside the input field this removed the contact overlay 
o	Testing: 
1.	Added JQuery to make the overlay static so this would not be removed
2.	Added a ‘X’ so the user can close the overlay 
3.	This overlay created difficulties with re-sizing and keep a consistent sizing through all the modal / overlays displays 

o	Results: changed the overlay to a bootstrap modal so this was more consistent and keeping with the size ratio and dimensions 

Return Home Modal
o	Issue: Sizing of overlay is not re-sizing correctly 
o	Testing: 
1.	Styled through css for sizing and ratio  

o	Results: changed the overlay to a bootstrap modal so this was more consistent and keeping with the size ratio and dimensions 

Ending Page
o	Issue: Added an automatic timeout refresh 
o	Testing: 
1.	Added different times 
2.	Added an icon for the user

o	Results: removed the refresh time out feature and added this to the icon so the user can choose if they wished to refresh the page or not 

Ending of game
•	Look at adding an option to replay the game – could just be a reset function like when the player whished to return home
•	4 different endings  


Expected: 
Testing: 
Results: 

