import tokenizer from './tokenizer.js';

export default class Node {
    constructor() {
        this.tokenizer = tokenizer.getTokenizer();
    }

    parse();
    evaluate(gameState);
}