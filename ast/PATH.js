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
        this.waviness = 1;
        this.thickness = 1;
    }

    parse() {
        this.tokenizer.getAndCheckNext("draw from");
        this.tokenizer.getAndCheckNext("(");
        this.topLeftX = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.topLeftY = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(")");
        this.tokenizer.getAndCheckNext("(");
        this.bottomRightX = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(",");
        this.bottomRightY = this.tokenizer.getNext();
        this.tokenizer.getAndCheckNext(")");
        this.tokenizer.getAndCheckNext("using");
        this.texture = new TEXTURE();
        this.texture.parse();
        if (this.tokenizer.checkToken("with")) {
            this.tokenizer.getAndCheckNext("with");
            if (this.tokenizer.checkToken("waviness")) {
                this.tokenizer.getAndCheckNext("waviness");
                this.waviness = Number(this.tokenizer.getNext());
            }
            if (this.tokenizer.checkToken("thickness")) {
                this.tokenizer.getAndCheckNext("thickness");
                this.thickness = Number(this.tokenizer.getNext());
            }
        }
    }

    evaluate(gameState) {
        let tex = this.texture.evaluate();
        let x = Number(this.topLeftX);
        let y = Number(this.topLeftY);
        let newx = x;
        let newy = y;
        let horiz = true;
        let waviness = this.waviness;
        let thickness = this.thickness;
        while (x < this.bottomRightX && y < this.bottomRightY) {
            if (horiz) {
                newx = x + Math.max(waviness, 1);
                newy = y + thickness - 1;
            } else {
                newx = x + thickness - 1;
                newy = y + Math.max(waviness, 1);
            }
            gameState.draw_terrain_by_rectangle(tex, x, y, Math.min(newx, this.bottomRightX), Math.min(newy, this.bottomRightY));
            if (horiz) {
                x = newx;
                y = Math.max(newy - thickness + 1, y);
            } else {
                x = Math.max(newx - thickness + 1, x);
                y = newy;
            }
            horiz = !horiz;
        }
    }
}