import Node from '../libs/Node.js';
import ITEM from './ITEM.js';

export default class CREATUREATTRIBUTES extends Node {

    constructor() {
        super();
        this.moves = false;
        this.drops = null;
        this.likes = null;
        this.collects = null;
        this.scared_of = null;
    }

    parse() {
        while (this.tokenizer.checkToken("that")) {
            this.tokenizer.getAndCheckNext("that");
            if (this.tokenizer.checkNext() === "moves") {
                this.tokenizer.getAndCheckNext("moves");
                this.moves = true;
            } else if (this.tokenizer.checkNext() === "drops") {
                this.tokenizer.getAndCheckNext("drops");
                this.drops = [];
                let item = new ITEM();
                item.parse();
                this.drops = item;
            } else if (this.tokenizer.checkNext() === "likes") {
                this.tokenizer.getAndCheckNext("likes");
                this.likes = [];
                this.likes = (this.tokenizer.getNext());
            } else if (this.tokenizer.checkNext() === "collects") {
                this.tokenizer.getAndCheckNext("collects");
                this.collects = [];
                let item = new ITEM();
                item.parse();
                this.collects = item;
            } else if (this.tokenizer.checkNext() === "dislikes") {
                this.tokenizer.getAndCheckNext("dislikes");
                this.scared_of = [];
                this.scared_of = this.tokenizer.getNext();
            } else {
                throw ("got " + this.tokenizer.checkNext() + " instead of attribute");
            }
        }
    }

    evaluate(gameState) {
        let drops = this.drops;
        let collects = this.collects;
        if (drops !== null) {
            drops = drops.evaluate(gameState);
        }
        if (collects !== null) {
            collects = collects.evaluate(gameState);
        }
        return {
            moves: this.moves,
            drops: drops,
            likes: this.likes,
            collects: collects,
            scared_of: this.scared_of
        }
    }
}