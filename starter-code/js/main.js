const cards = [
  { name: 'aquaman1',         img: 'aquaman.jpg' },
  { name: 'batman1',          img: 'batman.jpg' },
  { name: 'captain america1', img: 'captain-america.jpg' },
  { name: 'fantastic four1',  img: 'fantastic-four.jpg' },
  { name: 'flash1',           img: 'flash.jpg' },
  { name: 'green arrow1',     img: 'green-arrow.jpg' },
  { name: 'green lantern1',   img: 'green-lantern.jpg' },
  { name: 'ironman1',         img: 'ironman.jpg' },
  { name: 'spiderman1',       img: 'spiderman.jpg' },
  { name: 'superman1',        img: 'superman.jpg' },
  { name: 'the avengers1',    img: 'the-avengers.jpg' },
  { name: 'thor1',            img: 'thor.jpg' },
  { name: 'aquaman2',         img: 'aquaman.jpg' },
  { name: 'batman2',          img: 'batman.jpg' },
  { name: 'captain america2', img: 'captain-america.jpg' },
  { name: 'fantastic four2',  img: 'fantastic-four.jpg' },
  { name: 'flash2',           img: 'flash.jpg' },
  { name: 'green arrow2',     img: 'green-arrow.jpg' },
  { name: 'green lantern2',   img: 'green-lantern.jpg' },
  { name: 'ironman2',         img: 'ironman.jpg' },
  { name: 'spiderman2',       img: 'spiderman.jpg' },
  { name: 'superman2',        img: 'superman.jpg' },
  { name: 'the avengers2',    img: 'the-avengers.jpg' },
  { name: 'thor2',            img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.shuffleCards(memoryGame.cards);
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
        card.parentNode.children[0].classList.add("front");
        card.parentNode.children[0].classList.remove("back");
        card.parentNode.children[1].classList.add("back");
        card.parentNode.children[1].classList.remove("front");        

        memoryGame.pickedCards.push(card.parentNode.getAttribute("data-card-name"));
        memoryGame.checkIfPair(memoryGame.pickedCards);
        document.getElementById("pairs_clicked").innerHTML=memoryGame.pairsClicked; 
        document.getElementById("pairs_guessed").innerHTML=memoryGame.pairsGuessed;         

        if ((memoryGame.pickedCards.length%2===0) && (memoryGame.pickedCards[0].substring(0, memoryGame.pickedCards[0].length - 1) !== memoryGame.pickedCards[1].substring(0, memoryGame.pickedCards[1].length - 1))) {
          setTimeout(function(){
            card.parentNode.children[0].classList.add("back");
            card.parentNode.children[0].classList.remove("front");
            card.parentNode.children[1].classList.add("front");
            card.parentNode.children[1].classList.remove("back");
            var cardName1=memoryGame.pickedCards[0];
            document.querySelector(`[data-card-name="${cardName1}"]`).children[0].classList.add("back");
            document.querySelector(`[data-card-name="${cardName1}"]`).children[0].classList.remove("front");   
            document.querySelector(`[data-card-name="${cardName1}"]`).children[1].classList.add("front");
            document.querySelector(`[data-card-name="${cardName1}"]`).children[1].classList.remove("back");
            console.log(memoryGame.pickedCards[0]);
            memoryGame.pickedCards=[];
            memoryGame.pairsClicked=0; 
            document.getElementById("pairs_clicked").innerHTML=memoryGame.pairsClicked;   
            console.log(memoryGame.pickedCards.length%2===0);
            console.log(memoryGame.pickedCards[0] !== memoryGame.pickedCards[1]);
            
          },1000);
        };

        if ((memoryGame.pickedCards.length===2) && (memoryGame.pickedCards[0].substring(0, memoryGame.pickedCards[0].length - 1) === memoryGame.pickedCards[1].substring(0, memoryGame.pickedCards[1].length - 1))) {
          setTimeout(function(){
            memoryGame.pickedCards=[]; 
            memoryGame.pairsClicked=0; 
            document.getElementById("pairs_clicked").innerHTML=memoryGame.pairsClicked;   
          },500);
        };        

      console.log('Card clicked: ', card);
      console.log("picked Cards:", memoryGame.pickedCards);
      if (memoryGame.isFinished(memoryGame.cards)==true) {alert("you win")};
      
      };
 

  });
});


