let themeButton = document.getElementById("theme-button");


const toggleLightMode = () => {
    document.body.classList.toggle("light-mode");
   
}

themeButton.addEventListener("click" , toggleLightMode);


const rsvpButton = document.getElementById("rsvp-button");

const addParticipant = (person) => {

  const newParticipant = document.createElement("p");
  newParticipant.textContent = `👨🏽‍💻 ${person.name} - Favorite Piece: ${person.favoritePiece}`;

  const participantsDiv = document.querySelector(".rsvp-participants");
  participantsDiv.appendChild(newParticipant);
};


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

rsvpButton.addEventListener("click", (event) => {
  event.preventDefault();  
  validateForm();          
});


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
