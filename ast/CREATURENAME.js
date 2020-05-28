import Node from '../libs/Node.js';

export default class CREATURENAME extends Node {

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
