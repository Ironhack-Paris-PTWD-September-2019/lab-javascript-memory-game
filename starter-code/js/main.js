const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  firstTry = 0;
  cardsFlipped = [];
  document.querySelectorAll('.card').forEach( card => {
    card.onclick = function(e) {
      //TODO: write some code here
      // SI C'EST LA PREMIERE CARTE QUE JE RETOURNE
      console.log("click first try");
      if (firstTry === 0) {
      card = e.currentTarget;
      cardFront = card.querySelector(".front");
      cardBack = card.querySelector(".back");
      cardFront.classList.add("back");
      cardFront.classList.remove("front");
      cardBack.classList.add("blocked");
      cardBack.classList.remove("back");
      firstTry ++;
      // J'ENREGISTRE MA PREMIERE CARTE
      firstCard = card;
      // J INJECTE LA PREMIERE CARTE DANS UN TABLEAU QUI REPRESENTE MA PAIRE
      cardsFlipped.push(firstCard);
      console.log(firstCard.childNodes[0].getAttribute("name"));
      }
      else {
        console.log("click second try");
      // SI C EST LA DEUXIEME CARTE QUE JE RETOURNE
      card = e.currentTarget;
      cardFront = card.querySelector(".front");
      cardBack = card.querySelector(".back");
      cardFront.classList.add("back");
      cardFront.classList.remove("front");
      cardBack.classList.add("blocked");
      cardBack.classList.remove("back");
      // J'ENREGISTRE MA DEUXIEME CARTE
      secondCard = card;
      firstTry --;
      // J INJECTE LA SECONDE CARTE DANS UN TABLEAU QUI REPRESENTE MA PAIRE
      cardsFlipped.push(secondCard)
      console.log(secondCard.childNodes[0].getAttribute("name"));
      // SI LE NOM DE MA PREMIERE CARTE EST DIFFERENT DU NOM DE MA DEUXIEME CARTE
        if(cardsFlipped[0].childNodes[0].getAttribute("name") !== cardsFlipped[1].childNodes[0].getAttribute("name")) {
          // JE RETOURNE LES DEUX CARTES APRES 2 SECONDES
          setTimeout(() => {
          firstCard.childNodes[0].classList.add("back");
          firstCard.childNodes[1].classList.add("front");
          firstCard.childNodes[0].classList.remove("blocked");
          firstCard.childNodes[1].classList.remove("back");
          secondCard.childNodes[0].classList.add("back");
          secondCard.childNodes[1].classList.add("front");
          secondCard.childNodes[0].classList.remove("blocked");
          secondCard.childNodes[1].classList.remove("back");
          cardsFlipped = [];
        }, 2000);
        }
        else {
          console.log("else ici!");
          firstCard.childNodes[0].classList.add("blocked");
          firstCard.childNodes[1].classList.add("back");
          firstCard.childNodes[0].classList.remove("back");
          firstCard.childNodes[1].classList.remove("front");
          secondCard.childNodes[0].classList.add("blocked");
          secondCard.childNodes[1].classList.add("back");
          secondCard.childNodes[0].classList.remove("back");
          secondCard.childNodes[1].classList.remove("front");
          cardsFlipped = [];
        }
        // SI ELLES SONT IDENTIQUES ELLES RESTENT AFFICHEES      
        }
      }   
    });
    cardsFlipped = [];
});


