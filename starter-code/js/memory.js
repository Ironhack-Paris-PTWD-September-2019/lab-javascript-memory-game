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

  checkIfPair(pickedCards) {
    if (pickedCards.length%2===0){
      this.pairsClicked=1;
      if (pickedCards[0].substring(0, pickedCards[0].length - 1)===pickedCards[1].substring(0, pickedCards[1].length - 1)){
      this.pairsGuessed+=1;
      }
    }
    return this.pairsClicked;
  }
  isFinished(cards) {
    if (this.pairsGuessed===cards.length/2){
      return true;
    } else {
      return false;
    }
  }
}