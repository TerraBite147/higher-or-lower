const modal = document.querySelector('#rules-modal')
const openRules = document.querySelector('#rules');
const closeRules = document.querySelector('#exit-rules');

openRules.addEventListener('click', () => {
    modal.showModal();
})
closeRules.addEventListener('click', () => {
    modal.close();
})