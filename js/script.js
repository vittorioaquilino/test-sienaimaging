// mi dichiaro 2 variabili btn per prelevare il valore dal DOM
const btn1 = document.querySelector('.previous');
const btn2 = document.querySelector('.next');

// dichiaro le 3 card per prelevare i valori
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');

// instanzio un array per far ciclare le card
const array = [card1, card2, card3];

// creo un addEventListener per il click del bottone previous
btn1.addEventListener('click', function previous() {
    card1.classList.add('block', 'width-50');
    card2.classList.add('block', 'width-50');
    card3.classList.remove('block');
});

// creo un addEventListener per il click del bottone next
btn2.addEventListener('click', function next() {
        card1.classList.add('block', 'width-100');
        card2.classList.add('none');
        card3.classList.add('none');
});


 
