// mi dichiaro 2 variabili btn per prelevare il valore dal DOM
const btn1 = document.querySelector('.previous');
const btn2 = document.querySelector('.next');

// dichiaro le 3 card per prelevare i valori
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');


// dichiariamo una variabile per il contatore
let clickCount1 = 0;

// creo un metodo per il click del bottone next
function next() {
    switch (clickCount1) {
        // al primo caso sarà visibile solo la prima card
        case 0:
            card1.classList.add('block', 'width-100');
            card2.classList.add('none');
            card3.classList.add('none');
            break;
        // al secondo caso sarà visibile la prima e la seconda card
        case 1:
            card1.classList.add('block', 'width-50');
            card2.classList.add('block', 'width-50');
            card3.classList.add('none');
            break;
        // al terzo caso sarà visibile la prima, la seconda e la terza card
        case 2:
            card1.classList.add('block', 'width-33');
            card2.classList.add('block', 'width-33');
            card3.classList.add('block', 'width-33');
            break;
    }
    clickCount1++;
    console.log(clickCount1);
}
// associo il bottone alla chiamata del metodo
btn2.addEventListener('click', next);

// creo un metodo per il click del bottone previous
function previous() {
    switch (clickCount1) {
        // al primo caso sarà visibile solo la prima card e la seconda card
        case 3:
            card1.classList.remove('width-33');
            card2.classList.remove('width-33');
            card3.classList.remove('block');
            break;
        // al secondo caso sarà visibile solo la prima card
        case 2:
            card1.classList.remove('width-50');
            card2.classList.remove('block');
            break;
    }
    clickCount1--;
    console.log(clickCount1);
}
// associo il bottone alla chiamata del metodo
btn1.addEventListener('click', previous);

// metodo per la visualizzazione dell'immagine
// dichiaro variabile input per prelevare il valore dal DOM
const input = document.getElementById("fileInput");
// dichiaro variabile img per prelevare il valore dal DOM
const img = document.getElementById("image");
// al click dell'input
input.addEventListener("change", function () {
    // aggiungo la classe block all'immagine
    img.classList.add("block");
    // dichiaro una variabile file a 0
    let file = input.files[0];
    // dichiaro una variabile reader per leggere il file
    let reader = new FileReader();
    // al caricamento del file
    reader.onload = function () {
        // aggiungo l'immagine al src
        img.src = reader.result;
    }
    // leggo il file
    reader.readAsDataURL(file);
});





