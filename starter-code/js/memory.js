class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length; i > 1; i--) {
      var randomNbCard = Math.floor(Math.random() * i);
      this.cards[i] = this.cards[randomNbCard];
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
    //le jeu continue tant qu'il reste des paires non identifiées
    let status = false;
    if (this.pairsGuessed === 12) {
      status = true;
    }
    return status;
  }
}
