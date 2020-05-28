import Node from '../libs/Node.js';
export default class LANDMARK extends Node {

    constructor() {
        super();
        this.name = "";
        this.valid = ["barrel", "box", "chest", "boot", "book"];
    }

    parse() {
        this.name = this.tokenizer.getNext();
        if (!this.valid.includes(this.name)) {
            throw "Invalid object";
        }
    }

    evaluate(gameState) {
        return this.name;
    }
}