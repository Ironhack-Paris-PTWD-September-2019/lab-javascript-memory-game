class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []; 
    this.pairsClicked = 0; 
    this.pairsGuessed = 0; 
  }
  shuffleCards() {
    for (let i = this.cards.length-1; i >= 1; i--) {
      let j = Math.floor(Math.random()*i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }


  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    // let result = false;
    // if (this.pairsGuessed === this.cards.length/2) {
    //   result = true;
    // }
    // return result;
    // Expression ternaire
    return this.pairsGuessed === this.cards.length/2? true:false;
  }
}