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
    html += `<div class="upper-div back" name="${pic.img}"></div>`;
    html += `<div class="lower-div front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;
 

  // Bind the click event of each element to a function
  document.querySelectorAll('.upper-div').forEach( card => {
    card.onclick = function() {
  
      memoryGame.pickedCards.push(card);
      //return card visually 
      returnCard(card);

      //check if pair 
      setTimeout(function(){
      if(memoryGame.pickedCards.length===2){
        let pair= memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"),memoryGame.pickedCards[1].getAttribute("name"));
        if(!pair){
          returnCard(memoryGame.pickedCards[0]);
          returnCard(memoryGame.pickedCards[1]);


        }
        memoryGame.pickedCards=[];

        }
      
       
      //change scores 

      let $pClicked=document.getElementById("pairs_clicked");
      let $pGuessed=document.getElementById("pairs_guessed"); 
      $pClicked.innerHTML=memoryGame.pairsClicked; 
      $pGuessed.innerHTML=memoryGame.pairsGuessed; 

    
      console.log('Card clicked: ', card);
    }, 500);
  
    };
  
  });
});


//DOES NOT WORK
function returnCard(card){
  if(card.className==="upper-div back") { 
    card.className="upper-div front"; 
    card.parentElement.querySelector(".lower-div").className="lower-div back";
  } else {
    card.className="upper-div back";
    card.parentElement.querySelector(".lower-div").className="lower-div front";
  }

}


