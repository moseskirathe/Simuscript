var Node = require('../libs/Node.js');
module.exports = class Inanimate extends Node {

    constructor() {
        super();
        this.name = "";
    }

    parse() {
        this.tokenizer.getAndCheckNext("Create inanimate");
        this.name = this.tokenizer.getNext();
    }
}