var Node = require('../libs/Node.js');
export default class LANDMARK extends Node {

    constructor() {
        super();
        this.name = "";
        this.items = ["barrel", "box", "chest", "boot", "book"];
    }

    parse() {
        this.name = this.tokenizer.getNext();
        if (!this.items.contains(this.name)) {
            throw "Invalid object";
        }
    }

    evaluate(gameState) {
        return this.name;
    }
}