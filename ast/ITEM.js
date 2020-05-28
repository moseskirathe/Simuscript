import Node from '../libs/Node.js';
export default class Item extends Node {

    constructor() {
        super();
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
            throw "Invalid use of item";
        }
    }
}