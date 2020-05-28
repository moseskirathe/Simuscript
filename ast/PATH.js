var Node = require('../libs/Node.js');
var TEXTURE = require('./TEXTURE.js');

module.exports = class Path extends Node {

    constructor() {
        this.topLeft = 0;
        this.bottomRight = 0;
        this.texture = null;
    }

    parse() {
        this.tokenizer.getAndCheckNext("draw from \\(");
        this.topLeft = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.bottomRight = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("using");
        this.texture = new TEXTURE();
        this.texture.parse();
        // add checks for waviness and thickness once implemented
    }
}