import Node from '../libs/Node.js';

export default class CREATURETYPE extends Node {

    constructor() {
        super();
        this.type = "";
    }

    parse() {
        if (this.tokenizer.checkToken("chicken")) {
            this.type = this.tokenizer.getAndCheckNext("chicken");
        } else if (this.tokenizer.checkToken("cat")) {
            this.type = this.tokenizer.getAndCheckNext("cat");
        } else if (this.tokenizer.checkToken("parrot")) {
            this.type = this.tokenizer.getAndCheckNext("parrot");
        } else if (this.tokenizer.checkToken("squirrel")) {
            this.type = this.tokenizer.getAndCheckNext("squirrel");
        } else if (this.tokenizer.checkToken("duck")) {
            this.type = this.tokenizer.getAndCheckNext("duck");
        } else if (this.tokenizer.checkToken("dog")) {
            this.type = this.tokenizer.getAndCheckNext("dog");
        } else if (this.tokenizer.checkToken("snail")) {
            this.type = this.tokenizer.getAndCheckNext("snail");
        } else if (this.tokenizer.checkToken("tortoise")) {
            this.type = this.tokenizer.getAndCheckNext("tortoise");
        } else if (this.tokenizer.checkToken("slime")) {
            this.type = this.tokenizer.getAndCheckNext("slime");
        } else {
            console.error(this.tokenizer.getNext() + " is not a valid CREATURETYPE");
        }
    }

    evaluate(gameState) {
        return this.type;
    }
}
