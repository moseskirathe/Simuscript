import Node from '../libs/Node.js';

export default class CREATURETYPE extends Node {

    //TODO add sprites

    constructor() {
        super();
        this.valid = ["cat", "chicken", "dog", "demon", "lizard", "mouse", "slime", "zombie", "sheep", "rhino"]
        this.type = "";
    }

    parse() {
        this.type = this.tokenizer.getNext()
        if (!this.valid.includes(this.type)) {
            throw (this.tokenizer.getNext() + " is not a valid CREATURETYPE");
        }
    }

    evaluate(gameState) {
        return this.type;
    }
}
