import Node from '../libs/Node.js';
export default class Item extends Node {

    constructor() {
        super();
        this.valid = ["feathers" , "gold" , "meat" , "eggs" , "weapon" , "potion"]
        this.name = "";
    }

    parse() {
        this.name = this.tokenizer.getNext();
        if (!this.valid.contains(this.name)) {
            throw "Invalid  item";
        }
    }

    evaluate(gameState) {
        return this.name;
    }
}