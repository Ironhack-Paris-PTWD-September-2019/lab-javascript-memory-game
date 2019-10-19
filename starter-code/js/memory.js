class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length -1; i > 1; i--) {
      let j = Math.floor(Math.random()* i);
      this.cards[i] = this.cards[j]
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1.name === card2.name){
      this.pairsGuessed ++;
      
      return true;
    }
      return false;
    }
  
  isFinished() {
    return this.pairsGuessed >= this.cards.length/2;
  }
}