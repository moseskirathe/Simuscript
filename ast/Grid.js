var Node = require('../libs/Node.js');
module.exports = class Grid extends Node {

    constructor(t) {
        super(t);
        this.width = 0;
        this.height = 0;
    }

    parse() {
        this.tokenizer.getAndCheckNext("set grid size to be");
        this.tokenizer.getAndCheckNext("(");
        this.width = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.height = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(")");
    }
}