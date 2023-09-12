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
  console.log(cards)
}
