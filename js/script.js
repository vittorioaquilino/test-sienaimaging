// mi dichiaro 2 variabili btn per prelevare il valore dal DOM
const btn1 = document.querySelector('.previous');
const btn2 = document.querySelector('.next');

// dichiaro le 3 card per prelevare i valori
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');

// dichiariamo una variabile per il contatore
let clickCount1 = 0;

// creo un addEventListener per il click del bottone next
btn2.addEventListener('click', function next() {
    switch(clickCount1) {
        // al primo click sarà visibile solo card1
        case 0:
            card1.classList.add('block', 'width-100');
            card2.classList.add('none');
            card3.classList.add('none');
            break;
        // al secondo click sarà visibile solo card1 e card2
        case 1:
            card1.classList.add('block', 'width-50');
            card2.classList.add('block', 'width-50');
            card3.classList.add('none');
            break;
        // al terzo click saranno visibili tutte e 3 le card
        case 2:
            card1.classList.add('block', 'width-33');
            card2.classList.add('block', 'width-33');
            card3.classList.add('block', 'width-33');
            break;
    }
    clickCount1++;
    console.log(clickCount1);
});


// metodo per la visualizzazione dell'immagine
var input = document.getElementById("fileInput");
var img = document.getElementById("image");
input.addEventListener("change", function(){
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function(){
    img.src = reader.result;
  }
  reader.readAsDataURL(file);
});



 
