class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;

    // add the rest of the class properties here
  }
  shuffleCards() {

    this.cards=shuffleFisherYates(this.cards);

  }

  checkIfPair(card1, card2) {
    this.pairsClicked+=1; 
    if(card1===card2) {
      this.pairsGuessed+=1;
      return true;
    }
    return false; 
  }

  isFinished() {
    let numOfPairs=this.cards.length/2; 
    if (this.pairsGuessed===numOfPairs) {
      return true; 
    }
    return false;
  }
}

function shuffleFisherYates(cards){
  let stack=[...cards];
  let newCards=[];
  while (stack.length>0){
    let index=Math.floor(Math.random()*stack.length);
    newCards.push(stack[index]);
    stack.splice(index,1);
  }
  
  return newCards;
  }