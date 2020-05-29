import Node from '../libs/Node.js';
import LANDMARK from './LANDMARK.js';

export default class LANDMARKPOS extends Node {

    constructor() {
        super();
        this.landmark = null;
        this.coordinates = [];
        this.times = 0;
    }

    parse() {
        this.tokenizer.getAndCheckNext("plant");
        this.landmark = new LANDMARK();
        this.landmark.parse();
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
        if (this.times !== 0) {
            for (let i = 0; i < this.times; i++) {
                this.coordinates.push([Math.floor(Math.random() * gameState.grid_width), Math.floor(Math.random() * gameState.grid_height)]);
            }
        }
        let landmark = this.landmark.evaluate();
        gameState.draw_landmark_by_coordinates(landmark, this.coordinates);
    }
}