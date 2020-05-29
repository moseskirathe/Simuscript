import Node from '../libs/Node.js';

export default class CREATURETYPE extends Node {

    //TODO add sprites

    constructor() {
        super();
        this.valid = ["cat", "chicken", "dog", "deer", "hamster", "horse", "monkey", "parrot", "squirrel", "wolf"]
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
