var Node = require('../libs/Node.js');

module.exports = class CREATURENAME extends Node {

    constructor() {
        super();
        this.name = "";
    }

    parse() {
        this.name = this.tokenizer.getNext();
    }

    evaluate(gameState) {
        return this.name;
    }
}
