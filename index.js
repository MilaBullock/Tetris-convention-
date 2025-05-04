/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");



// Step 2: Write the callback function
const toggleLightMode = () => {
    document.body.classList.toggle("light-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//  and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click" , toggleLightMode);




/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById("rsvp-button");

const addParticipant = (person) => {

  const newParticipant = document.createElement("p");
  newParticipant.textContent = `👨🏽‍💻 ${person.name} - Favorite Piece: ${person.favoritePiece}`;

  const participantsDiv = document.querySelector(".rsvp-participants");
  participantsDiv.appendChild(newParticipant);
};

// Step 3: Add a click event listener to the submit RSVP button here


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.
const validateForm = () => {
  let containsErrors = false;
  const rsvpInputs = document.getElementById("rsvp-form").elements;

  const person = {
    name: rsvpInputs[0].value.trim(),
    email: rsvpInputs[1].value.trim(),
    favoritePiece: rsvpInputs[2].value.trim()
  };

  for (let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];
    const value = input.value.trim();

    if (input.type !== "submit") {
      if (input.id === "favorite-piece") {
        if (person.favoritePiece.length !== 1) {
          containsErrors = true;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      } else {
        if (value.length < 2) {
          containsErrors = true;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      }
    }
  }

  if (!containsErrors) {
    addParticipant(person);        
    toggleModal(person);         

    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].type !== "submit") {
        rsvpInputs[i].value = "";
      }
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", (event) => {
  event.preventDefault();  
  validateForm();          
});

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  const modal = document.getElementById("success-modal");
  const modalContent = document.getElementById("modal-text");

  modal.style.display = "flex";
  modalContent.textContent = `Thanks for RSVPing, ${person.name}! Get ready to Stack, Spin, and Win!!`;

  const intervalId = setInterval(animateImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
  }, 5000);
};
  
  // TODO: Update modal display to flex
  

  // TODO: Update modal text to personalized message


  // Set modal timeout to 5 seconds
  


// TODO: animation variables and animateImage() function
let rotateFactor = 0;
const modalImage = document.querySelector("#success-modal img");

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};
