class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.lastGuess = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	var promp = Math.floor((this.min + this.max + 1) / 2);
    	this.lastGuess = promp;
    	
    	return promp;
    }

    lower() {
    	this.max = this.lastGuess;
    }

    greater() {
    	this.min = this.lastGuess;
    }
}

module.exports = GuessingGame;
