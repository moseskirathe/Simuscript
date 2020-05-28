var Node = require('../libs/Node.js');
module.exports = class Play extends Node {

    constructor() {
        this.duration = 0;
    }

    parse() {
        this.tokenizer.getAndCheckNext("play for");
        this.duration = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("turns");
    }
}