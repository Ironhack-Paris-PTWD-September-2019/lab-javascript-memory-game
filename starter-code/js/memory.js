class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		// add the rest of the class properties here
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}
	shuffleCards() {
		let n = this.cards.length;
		let j, tmp;
		for (let i = n - 1; i >= 1; i--) {
			j = Math.floor(Math.random() * i);
			tmp = this.cards[i];
			// Permutations
			this.cards[i] = this.cards[j];
			this.cards[j] = tmp;
		}
	}
	checkIfPair(card1, card2) {
		this.pairsClicked++;
		let result = false;
		if (card1 === card2) {
			this.pairsGuessed++;
			result = true;
		}
		return result;
	}
	isFinished() {
		return this.pairsGuessed === this.cards.length / 2 ? true : false;
	}
}
