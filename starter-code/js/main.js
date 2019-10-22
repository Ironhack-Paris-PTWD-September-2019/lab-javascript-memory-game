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
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      if (card.parentNode.children[0].classList.contains("back")==true){
        card.parentNode.children[0].classList.add("front");
        card.parentNode.children[0].classList.remove("back");
      } 

      if (card.parentNode.children[1].classList.contains("front")==true){
        card.parentNode.children[1].classList.add("back");
        card.parentNode.children[1].classList.remove("front");        
      }

      memoryGame.pickedCards.push(card.parentNode.getAttribute("data-card-name"));
      document.getElementById("pairs_clicked").innerHTML=memoryGame.pickedCards.length/2;

      console.log('Card clicked: ', card);
    };
  });

  document.querySelectorAll('.front').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      if (card.parentNode.children[0].classList.contains("front")==true){
        card.parentNode.children[0].classList.add("back");
        card.parentNode.children[0].classList.remove("front");
      } 

      if (card.parentNode.children[1].classList.contains("back")==true){
        card.parentNode.children[1].classList.add("front");
        card.parentNode.children[1].classList.remove("back");        
      }

      console.log('Card clicked: ', card);
    };
  });

});


