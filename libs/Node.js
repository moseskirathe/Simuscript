var tokenizer = require('./tokenizer.js');

module.exports = class Node {
    constructor() {
        this.tokenizer = tokenizer.getTokenizer();
    }
}