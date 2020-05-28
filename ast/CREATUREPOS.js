import Node from '../libs/Node.js';
import {creatureTable} from "../ui/main.js";

export default class CREATUREPOS extends Node {

    constructor() {
        super();
        this.name = "";
        this.coordinates = [];
        this.times = 0;
    }

    parse() {
        this.tokenizer.getAndCheckNext("place");
        this.name = this.tokenizer.getNext();
        if (this.tokenizer.checkToken("at")) {
            this.tokenizer.getAndCheckNext("at");
            if (this.tokenizer.checkToken("(")) {
                this.tokenizer.getAndCheckNext("(");
                let x = this.tokenizer.getNext();
                this.tokenizer.getAndCheckNext(",");
                let y = this.tokenizer.getNext();
                this.coordinates.push([x, y]);
                this.tokenizer.getAndCheckNext(")");
            } else if (this.tokenizer.checkToken("[")) {
                this.tokenizer.getAndCheckNext("[");
                while (!this.tokenizer.checkToken("]")) {
                    this.tokenizer.getAndCheckNext("(");
                    let x = this.tokenizer.getNext();
                    this.tokenizer.getAndCheckNext(",");
                    let y = this.tokenizer.getNext();
                    this.coordinates.push([x, y]);
                    this.tokenizer.getAndCheckNext(")");
                }
                this.tokenizer.getAndCheckNext("]");
            } else {
                throw "Invalid token in position";
            }
        } else {
            this.tokenizer.getAndCheckNext("anywhere");
            this.times = Number(this.tokenizer.getNext());
            this.tokenizer.getAndCheckNext("times");
        }
    }

    evaluate(gameState) {
        if (creatureTable.hasOwnProperty(this.name)) {
            if (this.times !== 0) {
                for (let i = 0; i < this.times; i++) {
                    this.coordinates.push([Math.floor(Math.random() * gameState.width), Math.floor(Math.random() * gameState.height)]);
                }
            }
            let chars = creatureTable[this.name];
            this.coordinates.forEach(set => {
                let creature = new Sprite(this.name, chars.type, set[0], set[1], gameState.width, gameState.height);
                creature.setAttributes(chars.attributes);
                gameState.add_creature(creature);
            })
        } else {
            throw ("Creature " + this.name + " does not exist!");
        }
    }
}