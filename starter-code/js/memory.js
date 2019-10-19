class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [],
    this.pairsClicked = 0,
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
  shuffleCards() {
    var j=0;
    var exchange;
    for (let i=0; i<this.cards.length; i++){
      j=Math.floor(Math.random()*this.cards.length);
      exchange= this.cards[i];
      this.cards[i]=this.cards[j];
      this.cards[j]=exchange;
    }

  }
  checkIfPair(card1, card2) {
    this.pairsClicked+=1;
    if (card1===card2){
      this.pairsGuessed+=1;
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.pairsGuessed < (this.cards.length/2)){
      return false;
    }
    return true;
  }
}