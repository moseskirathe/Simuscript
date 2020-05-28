var Node = require('../libs/Node.js');
module.exports = class Item extends Node {

    constructor() {
        this.name = "";
    }

    parse() {
        if(this.tokenizer.checkToken("drops")){
            this.tokenizer.getAndCheckNext("drops");
            this.name = this.tokenizer.getNext();
        }
        else if(this.tokenizer.checkToken("and")){
            this.tokenizer.getAndCheckNext("and");
            this.name = this.tokenizer.getNext();
        } else {
            // Throw exception, invalid token
        }
    }
}