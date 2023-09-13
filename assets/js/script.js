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

const winnerModal = document.querySelector("#winner-modal");
if (winnerModal) {
  const openWinner = document.querySelector("#bank");
  const closeWinner = document.querySelector("#exit-winner");

  openWinner.addEventListener("click", () => {
    winnerModal.showModal();
    console.log("Banked clicked");
  });
  closeWinner.addEventListener("click", () => {
    winnerModal.close();
  });
}

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
  console.log(cards);
}

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
  createDeck();
  drawCard();
  userChoice = "Higher";
  compareUserChoice(userChoice)
});

const lower = document.querySelector("#lower-btn");
lower.addEventListener("click", () => {
  createDeck();
  drawCard();
  userChoice = "Lower";
  compareUserChoice(userChoice)
});

// Compare choice

function compareUserChoice(userChoice) {
  if (userChoice === "Higher") {
    if (currentCardValue >= previousCardValue) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  } else if (userChoice === "Lower") {
    if (currentCardValue <= previousCardValue) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }
}
