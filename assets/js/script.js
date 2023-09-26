// Global Variables
const bankedPointsElement = document.querySelector("#banked-pts");
const streakPointsElement = document.querySelector("#streak-pts");
let turnCounter = 0;
let streakPoints = 0;
let cards = [];
let currentCardValue = null;
let previousCardValue = null;
let userChoice = null;

// Modals
const rulesModal = document.querySelector("#rules-modal");
const winnerModal = document.querySelector("#winner-modal");
const reportModal = document.querySelector("#report-modal");

// Elements
const cardsContainer = document.getElementById("cards-container");
const currentCard = document.getElementById("current-card");
const lower = document.querySelector("#lower-btn");
const bankButton = document.querySelector("#bank-btn");

// if there is a cards-container element on the page, initialize the game
if (winnerModal && cardsContainer) {
  initializeGame();
}

// if rules modal exists, setup the rules and report modals
if (rulesModal) {
  setupRulesModal();
  setupReportModal();
}

// If winner modal exists, setup the winner modal and game buttons
if (winnerModal) {
  setupWinnerModal();
  setupGameButtons();
}

//Functions
/**
 * Sets up the rules modal and handles the button click events
 */
function setupRulesModal() {
  const openRules = document.querySelector("#rules");
  const closeRules = document.querySelector("#exit-rules");
  openRules.addEventListener("click", () => rulesModal.showModal());
  closeRules.addEventListener("click", () => rulesModal.close());
}
/**
 * Sets up the report modal and handles the button click events
 */
function setupReportModal() {
  const openReport = document.querySelector("#report");
  const closeReport = document.querySelector("#exit-report");
  openReport.addEventListener("click", () => reportModal.showModal());
  closeReport.addEventListener("click", () => reportModal.close());
  setupReportForm();
}

/**
 * Sets up the report form and handles the submit event
 */
function setupReportForm() {
  const reportForm = document.querySelector("#report-form");
  const submitBtn = document.querySelector("#submit-btn");
  const thankYou = document.querySelector("#thank-you-message");
  submitBtn.addEventListener(
    "click",
    handleReportFormSubmit(reportForm, thankYou)
  );
}

/**
 * Handles the submit event for the report form
 * @param {HTMLFormElement} reportForm - The report form
 * @param {HTMLElement} thankYou - The thank you message
 */
function handleReportFormSubmit(reportForm, thankYou) {
  return (event) => {
    event.preventDefault();
    // Check if all fields are filled in
    if (reportForm.querySelector("input[name='name']").value.trim() !== "" &&
        reportForm.querySelector("input[name='email']").value.trim() !== "" &&
        reportForm.querySelector("textarea[name='issue']").value.trim() !== "") 
      {
      thankYou.style.display = "block";
      setTimeout(() => (window.location.href = "index.html"), 5000);
    } else {
      alert("Please fill in all fields");
    }
  };
}

/**
 * setup close button for winner modal and reset the game
 */
function setupWinnerModal() {
  const closeWinner = document.querySelector("#exit-winner");
  closeWinner.addEventListener("click", () => {
    winnerModal.close();
    initializeGame();
    document.querySelector("#banked-pts").innerHTML = 0;
  });
}

/**
 * handles the click event listeners for the higher, lower and bank buttons
 */
function setupGameButtons() {
  const higher = document.querySelector("#higher-btn");
  higher.addEventListener("click", handleHigherClick);
  lower.addEventListener("click", handleLowerClick);
  bankButton.addEventListener("click", bankPoints);
}

/**
 * handles the click event for the higher button
 */
function handleHigherClick() {
  turnCounter += 1;
  drawCard();
  userChoice = "Higher";
  compareUserChoice(userChoice);
}

/**
 * Handles the click event for the lower button
 */
function handleLowerClick() {
  turnCounter += 1;
  drawCard();
  userChoice = "Lower";
  compareUserChoice(userChoice);
}
/**
 * initializes the game by creating a new deck of cards and drawing the first card
 */
function initializeGame() {
  createDeck();
  drawCard();
}
/**
 * Creates a new deck of cards
 */
function createDeck() {
  cards = [];
  let suits = ["spades", "hearts", "diamonds", "clubs"];
  let values = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];

  for (const suit of suits) {
    for (const value of values) {
      const card = {
        name: `${value}_of_${suit}`,
        value: values.indexOf(value) + 1, // Assign values from 1 to 13
      };
      cards.push(card);
    }
  }
}
/**
 * Displays a random card from the cards array in the card-container div
 *
 */
function drawCard() {
  previousCardValue = currentCardValue;
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];

  // Create the filename for the card image
  const cardImageName = `${selectedCard.name}.svg`;

  // Set the source of the current card element to display the selected card
  currentCard.src = `assets/images/cards/SVG-cards-1.3/${cardImageName}`;
  currentCard.alt = `${cardImageName}`;
  currentCard.setAttribute("aria-label", cardImageName);
  currentCardValue = selectedCard.value;
}
/**
 * Compares the user's choice to the current and previous card values
 * @param {string} userChoice - The user's choice of higher or lower
 *
 */
function compareUserChoice(userChoice) {
  if (userChoice === "Higher") {
    if (currentCardValue >= previousCardValue) {
      if (streakPoints > 1) {
        streakPoints += streakPoints;
      } else {
        streakPoints += 1;
      }
      streakPointsElement.innerHTML = streakPoints;
    } else {
      loseStreak();
    }
  } else if (userChoice === "Lower") {
    if (currentCardValue <= previousCardValue) {
      if (streakPoints > 1) {
        streakPoints += streakPoints;
      } else {
        streakPoints += 1;
      }
      streakPointsElement.innerHTML = streakPoints;
    } else {
      loseStreak();
    }
  }
}
/**
 * Resets the streak points to 0 and creates a new deck of cards
 */
function loseStreak() {
  streakPoints = 0;
  streakPointsElement.innerHTML = 0;
  createDeck();
}
/**
 * Checks if the user has banked 1 point and displays the winner modal
 * If the user has banked 1 point, the turn counter is reset to 0
 */
function winCondition() {
  let bankedPoints = parseInt(document.querySelector("#banked-pts").innerHTML);
  if (bankedPoints >= 1) {
    winnerModal.showModal();
    let pointsTotal = document.querySelector("#points-total");
    pointsTotal.innerHTML = bankedPoints;
    let turns = document.querySelector("#turns");
    turns.innerHTML = turnCounter;
    turnCounter = 0;
  }
}
/**
 * Adds the streak points to the banked points and resets the streak points to 0
 */
function bankPoints() {
  let bankedPoints = parseInt(bankedPointsElement.innerHTML);
  bankedPoints += streakPoints;
  streakPoints = 0;
  streakPointsElement.innerHTML = streakPoints;
  bankedPointsElement.innerHTML = bankedPoints;
  initializeGame();
  winCondition();
}


// *******************TESTING********************** 
/**
 * Checks the height of the screen and hides every second <br> tag if the screen is too small
 */
function checkScreenHeight() {
  var breaks = document.querySelectorAll('.modal-paragraph br');
  if (window.innerHeight <= 620) {
    for (var i = 0; i < breaks.length; i++) {
      if ((i + 1) % 2 === 0) {
        breaks[i].style.display = 'none';
      }
    }
  } else {
    for (var i = 0; i < breaks.length; i++) {
      breaks[i].style.display = '';
    }
  }
}

// Run the function when the document is ready
document.addEventListener('DOMContentLoaded', checkScreenHeight);

// Run the function whenever the window is resized
window.addEventListener('resize', checkScreenHeight);
