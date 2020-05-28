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
                this.drops.push(item);
                while (this.tokenizer.checkNext() === "and") {
                    this.tokenizer.getAndCheckNext("and");
                    let item = new ITEM();
                    item.parse();
                    this.drops.push(item);
                }
            } else if (this.tokenizer.checkNext() === "likes") {
                this.tokenizer.getAndCheckNext("likes");
                this.likes = [];
                this.likes.push(this.tokenizer.getNext());
                while (this.tokenizer.checkNext() === "and") {
                    this.tokenizer.getAndCheckNext("and");
                    this.likes.push(this.tokenizer.getNext());
                }
            } else if (this.tokenizer.checkNext() === "collects") {
                this.tokenizer.getAndCheckNext("collects");
                this.collects = [];
                this.collects.push(this.tokenizer.getNext());
                while (this.tokenizer.checkNext() === "and") {
                    this.tokenizer.getAndCheckNext("and");
                    this.collects.push(this.tokenizer.getNext());
                }
            } else if (this.tokenizer.checkNext() === "dislikes") {
                this.tokenizer.getAndCheckNext("dislikes");
                this.scared_of = [];
                this.scared_of.push(this.tokenizer.getNext());
                while (this.tokenizer.checkNext() === "and") {
                    this.tokenizer.getAndCheckNext("and");
                    this.scared_of.push(this.tokenizer.getNext());
                }
            } else {
                throw "ERROR: Unidentified texture type. Please use one of the following textures: grass, swamp, tree, hill, dirt or water";
            }
        }
    }

    evaluate(gameState) {
        return {
            moves: this.moves,
            drops: this.drops,
            likes: this.likes,
            collects: this.collects,
            scared_of: this.scared_of
        }
    }
}