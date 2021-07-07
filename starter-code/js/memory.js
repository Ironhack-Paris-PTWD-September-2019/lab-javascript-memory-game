class MemoryGame {
  constructor(cards){
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  // creer une fonction qui change la place des cards dans le tableau
  shuffleCards() {
    this.cards.forEach(element=> {
      let temp = element;
      element = this.cards[Math.floor(Math.random()*this.cards.length)];
      this.cards[Math.floor(Math.random()*this.cards.length)] = temp;
    });
    return undefined;
  }

  // créer une fonction qui compare deux cartes
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {return false}
   }

  // créer une fonction qui regarde si le jeu est fini
  isFinished() {
    if (this.pairsGuessed < this.cards.length/2){return false}
    else return true
  }
}