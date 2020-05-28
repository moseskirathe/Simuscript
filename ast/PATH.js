import Node from '../libs/Node.js';
import TEXTURE  from './TEXTURE.js';

export default class PATH extends Node {

    constructor() {
        super();
        this.topLeftX = 0;
        this.topLeftY = 0;
        this.bottomRightX = 0;
        this.bottomRightY = 0;
        this.texture = null;
    }

    parse() {
        this.tokenizer.getAndCheckNext("draw from \\(");
        this.tokenizer.getAndCheckNext("\\(");
        this.topLeftX = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.topLeftY = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("\\)");
        this.tokenizer.getAndCheckNext("\\(");
        this.bottomRightX = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.bottomRightY = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext("\\)");
        this.tokenizer.getAndCheckNext("using");
        this.texture = new TEXTURE();
        this.texture.parse();
        // add checks for waviness and thickness once implemented
    }

    evaluate(gameState) {
        let tex = this.texture.evaluate();
        gameState.draw_terrain_by_rectangle(tex, this.topLeftX, this.topLeftY, this.bottomRightX, this.bottomRightY)
    }
}