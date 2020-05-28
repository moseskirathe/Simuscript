import Node from '../libs/Node.js';

export default class TEXTURE extends Node {

    constructor() {
        super();
        this.type = "";
        this.valid = ["forest" , "rock" , "ice" , "lava" , "swamp" , "desert", "dirt", "grass", "path"]
    }

    parse() {
        this.type = this.tokenizer.getNext();
        if (!this.valid.includes(this.type)) {
            throw (this.tokenizer.getNext() + " is not a valid TEXTURE");
        }
    }

    evaluate(gameState) {
        return this.type;
    }
}
