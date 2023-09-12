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
