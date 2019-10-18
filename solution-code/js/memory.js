class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    this.shuffleCards();
  }
  shuffleCards() {
    this.cards.sort(function (a, b) {
      return Math.random() - 0.5;
    });
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }

    return false;
  }
  isFinished() {
    return this.pairsGuessed >= (this.cards.length /2);
  }
}