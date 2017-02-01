class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.shot = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.shot = Math.round((this.min + this.max) / 2);
    	return this.shot;
    }

    lower() {
    	this.max = this.shot;
    }

    greater() {
    	this.min = this.shot;
    }
}

module.exports = GuessingGame;
