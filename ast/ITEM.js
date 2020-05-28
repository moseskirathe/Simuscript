import Node from '../libs/Node.js';
export default class Item extends Node {

    constructor() {
        super();
        this.valid = ["feathers" , "gold" , "meat" , "egg" , "weapon" , "potion"]
        this.name = "";
    }

    parse() {
        this.name = this.tokenizer.getNext();
        if (!this.valid.includes(this.name)) {
            throw "Invalid  item";
        }
    }

    evaluate(gameState) {
        return this.name;
    }
}