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
    html += `  <div class="back" name="${pic.img}"></div>`;
    html += `  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // // Bind the click event of each element to a function

  function showCard(card) {
    card.className = 'front';
    card.nextElementSibling.className = 'back';
  }
  function hideCard(card) {
    card.className = 'back';
    card.nextElementSibling.className = 'front';
  }

  function cardName(card) {
    return card.parentNode.dataset.cardName;
  }

  let playingCard;
  document.querySelectorAll('.back').forEach(card => {
    card.onclick = function() {
      console.log('Card clicked: ', card);

      // show it
      showCard(card);

      if (playingCard) {
        if (memoryGame.checkIfPair(cardName(card), cardName(playingCard))) {
          console.log('yes!');
        } else {
          console.log('no!');
          let playingCardCopy = playingCard; // we make a copy because `playingCard` is about to be `undefined` and will in 1000ms
          setTimeout(function () {
            hideCard(playingCardCopy);
            hideCard(card);
          }, 500);
        }

        playingCard = undefined;
      } else {
        playingCard = card;  
      }

      //
      // re-render score
      //

      document.querySelector('#pairs_clicked').innerHTML = memoryGame.pairsClicked;
      document.querySelector('#pairs_guessed').innerHTML = memoryGame.pairsGuessed;

      //
      //
      //

      if (memoryGame.isFinished()) {
        alert('You win!');
      }
    };
  });
});


