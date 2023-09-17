// Rules Modal open and close will only create event listeners if content is on page.
const rulesModal = document.querySelector("#rules-modal");
if (rulesModal) {
  const openRules = document.querySelector("#rules");
  const closeRules = document.querySelector("#exit-rules");
  openRules.addEventListener("click", () => {
    rulesModal.showModal();
  });
  closeRules.addEventListener("click", () => {
    rulesModal.close();
  });
}
// Winner Modal open and close will only create event listeners if content is on page.
const winnerModal = document.querySelector("#winner-modal");
if (winnerModal) {
  const closeWinner = document.querySelector("#exit-winner");
  closeWinner.addEventListener("click", () => {
    winnerModal.close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (cardsContainer) {
    initializeGame();
  }
});

function initializeGame() {
  createDeck();
  drawCard();
}

// Card array to hold all 52 cards
let cards = [];

/**
 * Creates an ordered object array of 52 cards with value pairs name: and value:
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

// Variables for
const cardsContainer = document.getElementById("cards-container");
const currentCard = document.getElementById("current-card");
let currentCardValue = null;
let previousCardValue = null;

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

// Find User's choice
let userChoice = null;

const higher = document.querySelector("#higher-btn");
higher.addEventListener("click", () => {
  drawCard();
  userChoice = "Higher";
  compareUserChoice(userChoice);
});

const lower = document.querySelector("#lower-btn");
lower.addEventListener("click", () => {
  drawCard();
  userChoice = "Lower";
  compareUserChoice(userChoice);
});
const bankButton= document.querySelector("#bank-btn");
bankButton.addEventListener("click", () => {
  bankPoints();
});

// Compare choice
let bankedPointsElement = document.querySelector("#banked-pts");
let streakPointsElement = document.querySelector("#streak-pts");
let streakPoints = parseInt(streakPointsElement.innerHTML);
let bankedPoints = parseInt(bankedPointsElement.innerHTML);

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

function loseStreak() {
  streakPoints = 0;
  streakPointsElement.innerHTML = 0;
  createDeck();
}

function winCondition() {
  let bankedPoints = parseInt(document.querySelector("#banked-pts").innerHTML);
  if (bankedPoints >= 30) {
    winnerModal.showModal();
  }
}

function bankPoints() {
  bankedPoints += streakPoints; // Add streak points to banked points
  streakPoints = 0; // Reset streak to 0
  streakPointsElement.innerHTML = streakPoints; // Update streak points display
  bankedPointsElement.innerHTML = bankedPoints; // Update banked points display
  initializeGame();
  winCondition();
}
