// Global Variables
const rulesModal = document.querySelector("#rules-modal");
const winnerModal = document.querySelector("#winner-modal");
const reportModal = document.querySelector("#report-modal");
const cardsContainer = document.getElementById("cards-container");
const currentCard = document.getElementById("current-card");
const lower = document.querySelector("#lower-btn");
const bankButton = document.querySelector("#bank-btn");

let bankedPointsElement = document.querySelector("#banked-pts");
let streakPointsElement = document.querySelector("#streak-pts");
let turnCounter = 0;

let cards = [];
let currentCardValue = null;
let previousCardValue = null;
// Find User's choice
let userChoice = null;

// Run code for Index.html
if (rulesModal) {
  // Open and Close rules modal
  const openRules = document.querySelector("#rules");
  const closeRules = document.querySelector("#exit-rules");
  openRules.addEventListener("click", () => {
    rulesModal.showModal();
  });
  closeRules.addEventListener("click", () => {
    rulesModal.close();
  });
  // Open and Close report modal
  const openReport = document.querySelector("#report");
  const closeReport = document.querySelector("#exit-report");
  openReport.addEventListener("click", () => {
    reportModal.showModal();
  });
  closeReport.addEventListener("click", () => {
    reportModal.close();
  });

  // Report form
  const reportForm = document.querySelector("#report-form");
  const submitBtn = document.querySelector("#submit-btn");
  const thankYou = document.querySelector("#thank-you-message");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      reportForm.querySelector("input[name='name']").value.trim() !== "" &&
      reportForm.querySelector("input[name='email']").value.trim() !== "" &&
      reportForm.querySelector("textarea[name='issue']").value.trim() !== ""
    ) {
      thankYou.style.display = "block";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 5000);
    } else {
      alert("Please fill in all fields");
    }
  });
}

// Run code for game.html
if (winnerModal) {
  let streakPoints = parseInt(streakPointsElement.innerHTML);
  let bankedPoints = parseInt(bankedPointsElement.innerHTML);

  //Close winner modal
  const closeWinner = document.querySelector("#exit-winner");
  closeWinner.addEventListener("click", () => {
    // close modal
    winnerModal.close();
    // start new game
    initializeGame();
    // Reset points
    document.querySelector("#banked-pts").innerHTML = 0;
  });
  // if there is a cards-container element on the page, initialize the game
  if (cardsContainer) {
    initializeGame();
  }

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

  function initializeGame() {
    createDeck();
    drawCard();
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
// Event listeners for the higher and lower buttons
  const higher = document.querySelector("#higher-btn");
  higher.addEventListener("click", () => {
    turnCounter += 1;
    drawCard();
    userChoice = "Higher";
    compareUserChoice(userChoice);
  });

  lower.addEventListener("click", () => {
    turnCounter += 1;
    drawCard();
    userChoice = "Lower";
    compareUserChoice(userChoice);
  });

  bankButton.addEventListener("click", () => {
    bankPoints();
  });
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
    let bankedPoints = parseInt(
      document.querySelector("#banked-pts").innerHTML
    );
    if (bankedPoints >= 1) {
      winnerModal.showModal();
      let pointsTotal = document.querySelector("#points-total");
      pointsTotal.innerHTML = bankedPoints;
      let turns = document.querySelector("#turns");
      turns.innerHTML = turnCounter;
      turnCounter = 0;
    }
  }
// function to bank points
  function bankPoints() {
    bankedPoints += streakPoints; // Add streak points to banked points
    streakPoints = 0; // Reset streak to 0
    streakPointsElement.innerHTML = streakPoints; // Update streak points display
    bankedPointsElement.innerHTML = bankedPoints; // Update banked points display
    initializeGame();
    winCondition();
  }
}
