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
  var $score = document.getElementById(`score`);
  var $pairsClicked = document.getElementById(`pairs_clicked`);
  var $pairsGuessed = document.getElementById(`pairs_guessed`);
  var countCards = 0;
  var $card1;
  
  document.querySelectorAll('.back').forEach( $card => {
    $card.onclick = function() {
        $card.className = "front";
        $card.nextElementSibling.className = "back";

        if(countCards === 0) {
          // if this is the first card picked
          $card1 = $card;
          countCards++; 
        } else if (countCards === 1 & !memoryGame.checkIfPair($card1.getAttribute("name"), $card.getAttribute("name"))) {
          // if second card picked does not match the first one
          $pairsClicked.innerText = memoryGame.pairsClicked;

          // set new vars to prevent bug if player fastclicks a new card and reset value for $card1 before SetTimeout execution
          $card1ForTimer = $card1;
          $card2ForTimer = $card;

          // set timer to show the player the front of the 2nd card for x seconds
          setTimeout(function () {
            $card1ForTimer.className = "back";
            $card1ForTimer.nextElementSibling.className = "front";
            $card2ForTimer.className = "back";
            $card2ForTimer.nextElementSibling.className = "front";
          }, 1000);
          countCards = 0;
        } else {
          // if second card picked matchs the first one
          $pairsClicked.innerText = memoryGame.pairsClicked;
          $pairsGuessed.innerText = memoryGame.pairsGuessed;
          countCards = 0;
        }

        if(memoryGame.isFinished()) {
          $score.querySelector(`h2`).innerText = `VICTORY!`;
          $score.style.backgroundColor = `green`;
        }
    };
  });
});


