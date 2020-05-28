var Node = require('../libs/Node.js');
var TEXTURE = require('./TEXTURE.js');

module.exports = class Path extends Node {

    constructor() {
        super();
        this.topLeftX = 0;
        this.topLeftY = 0;
        this.bottomRightX = 0;
        this.bottomRightY = 0;
        this.texture = null;
    }

    parse() {
        this.tokenizer.getAndCheckNext("draw from \\(");
        this.topLeftX = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.topLeftY = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("\\(");
        this.bottomRightX = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.bottomRightY = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("using");
        this.texture = new TEXTURE();
        this.texture.parse();
        this.tokenizer.getAndCheckNext("\\)");
        // add checks for waviness and thickness once implemented
    }
}