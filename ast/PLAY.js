import Node from '../libs/Node.js';

export default class PLAY extends Node {

    constructor() {
        super();
        this.duration = 0;
    }

    parse() {
        this.tokenizer.getAndCheckNext("play for");
        this.duration = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("turns");
    }

    evaluate(gameState) {
        gameState.setSeconds(this.duration);
    }
}