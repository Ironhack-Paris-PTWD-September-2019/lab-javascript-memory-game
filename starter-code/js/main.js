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

memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `  <div class="back" name="${pic.img}"></div>`;
    html += `  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });


  function showCard(card){
      card.classList.remove('back');
      card.classList.add('front');
      card.nextElementSibling.classList.remove('front');
      card.nextElementSibling.classList.add('back');


  }

  function hideCard(card){
    console.log("coucoucoucou");
    console.log(card);
    card.classList.remove('front');
    card.classList.add('back');
    card.nextElementSibling.classList.remove('back');
    card.nextElementSibling.classList.add('front');
  }

  function showCardForever(e){
    card.classList.remove('back');
    card.classList.add('front');
    card.nextElementSibling.classList.remove('front');
    card.nextElementSibling.classList.add('back');
  }

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  //while(memoryGame.isFinished === false){

  var card1="";
  var card2="";
  var compt=0;
  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      console.log("eis");
      console.log(card);
      showCard(card);
      console.log("eisnow");
      console.log(card);
      setTimeout(function(){
        console.log("haloa");
        hideCard(card);
      },1000);
      
      console.log('Card clicked: ', card);
      if (compt===0){
        card1=card.getAttribute("name");
        compt=1;
      }
      else{
        card2=card.getAttribute("name");
        let pc=+document.querySelector("#pairs_clicked").textContent;
        document.querySelector("#pairs_clicked").innerHTML= (pc+1).toString();  

        if (memoryGame.checkIfPair(card1,card2)){
          let pg=+document.querySelector("#pairs_guessed").textContent;
          document.querySelector("#pairs_guessed").innerHTML= (pg+1).toString();
        }
        compt=0;
      }
      
    };
  });
});
//}

