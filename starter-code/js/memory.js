class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;

  }

  shuffleCards(cards) {
    var currentIndex=cards.length;
    var temporaryValue=0;
    var randomIndex=0;

    while (0 !== currentIndex){
      randomIndex=Math.floor(Math.random()*currentIndex);
      currentIndex-=1;
      temporaryValue=cards[currentIndex];
      cards[currentIndex]=cards[randomIndex];
      cards[randomIndex]=temporaryValue;
    }
    
    return cards;
  }

  checkIfPair(card1, card2) {
    pairsClicked+=1;
    if (card1.name=card2.name){
      pairsGuessed+=1;
    }
  }
  isFinished(cards) {
    if (pairsGuessed===cards.length/2){
      return true;
    } else {
      return false;
    }
  }
}