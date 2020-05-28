import Node from '../libs/Node.js';
import TEXTURE from './TEXTURE.js';

export default class TERRAIN extends Node {

    constructor() {
        super();
        this.topleftx = 0;
        this.toplefty = 0;
        this.bottomrightx = 0;
        this.bottomrighty = 0;
        this.texture = new TEXTURE();
    }

    parse() {
        this.tokenizer.getAndCheckNext("set rectangle");
        this.tokenizer.getAndCheckNext("(");
        this.topleftx = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.toplefty = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(")");

        this.tokenizer.getAndCheckNext("(");
        this.bottomrightx = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.bottomrighty = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(")");

        this.tokenizer.getAndCheckNext("to");

        this.texture.parse();
    }

    evaluate(gameState) {
        let tex = this.texture;
        gameState.draw_terrain_by_rectangle(tex, this.topleftx, this.toplefty, this.bottomrightx, this.bottomrighty);
    }
}
