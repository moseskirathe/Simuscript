import tokenizer from './tokenizer.js';

export class Node {
    constructor() {
        this.tokenizer = tokenizer.getTokenizer();
    }
}