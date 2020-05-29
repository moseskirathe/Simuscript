import Node from '../libs/Node.js';
export default class LANDMARK extends Node {

    //TODO add sprites

    constructor() {
        super();
        this.name = "";
        this.valid = ["bamboo", "cactus", "coconuttree", "pond", "rose", "sakura", "shell", "temple", "volcano", "stone", "house"];
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