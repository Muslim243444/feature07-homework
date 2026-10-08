const changeAllCardsButton = document.querySelector('#change-all-cards');
const changeFirstCardButton = document.querySelector('#change-first-card');
const changeColorsButton = document.querySelector('#change-colors');
const openGoogleButton = document.querySelector('#open-google');
const outputLogButton = document.querySelector('#output-console-log');

changeAllCardsButton.addEventListener('click', changeAllCards);
changeFirstCardButton.addEventListener('click', changeFirstCard);
changeColorsButton.addEventListener('click', changeColors);
openGoogleButton.addEventListener('click', openGoogle);
outputLogButton.addEventListener('click', function() {
    outputConsoleLog('ДЗ №4');
});

function changeAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.backgroundColor = '#ff6b6b';
        card.style.transition = 'background-color 0.5s ease';
    });
}

function changeFirstCard() {
    const cards = document.querySelectorAll('.card');
    if (cards[0]) {
        cards[0].style.backgroundColor = '#4ecdc4';
        cards[0].style.transition = 'background-color 0.5s ease';
    }
}

function changeColors() {
    const cards = document.querySelectorAll('.card');
    const colors = ['#ff6b6b', '#4dabf7', '#69db7c', '#ffd43b', '#9775fa'];
    cards.forEach(function(card, index) {
        card.style.backgroundColor = colors[index % colors.length];
        card.style.transition = 'background-color 0.5s ease';
    });
}

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');
    if (answer === true) {
        window.open('https://google.com');
    }
}

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
}