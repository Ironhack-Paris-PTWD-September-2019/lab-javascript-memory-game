class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  // shuffleCards ne marche qu'après le first click
  shuffleCards() {
    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards;
    
  }
  checkIfPair(card1, card2) {
    this.pairsClicked+=1;
    if (card1===card2){
      this.pairsGuessed+=1;
      return true;
    } else {
      return false;
    };
  }
  isFinished() {
   return this.pairsGuessed>=this.cards.length/2
    }
  }