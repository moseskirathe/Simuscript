var Node = require('../libs/Node.js');

module.exports = class TEXTURE extends Node {

    constructor() {
        super();
        this.type = "";
    }

    parse() {
        if (this.tokenizer.checkToken("rock")) {
            this.type = this.tokenizer.getAndCheckNext("rock");
        } else if (this.tokenizer.checkToken("grass")) {
            this.type = this.tokenizer.getAndCheckNext("grass");
        } else if (this.tokenizer.checkToken("swamp")) {
            this.type = this.tokenizer.getAndCheckNext("swamp");
        } else if (this.tokenizer.checkToken("tree")) {
            this.type = this.tokenizer.getAndCheckNext("tree");
        } else if (this.tokenizer.checkToken("hill")) {
            this.type = this.tokenizer.getAndCheckNext("hill");
        } else if (this.tokenizer.checkToken("dirt")) {
            this.type = this.tokenizer.getAndCheckNext("dirt");
        } else if (this.tokenizer.checkToken("water")) {
            this.type = this.tokenizer.getAndCheckNext("water");
        } else {
            console.log(this.tokenizer.checkToken() + " is not a valid TEXTURE");
        }
    }

    evaluate(gameState) {
        return this.type;
    }
}
