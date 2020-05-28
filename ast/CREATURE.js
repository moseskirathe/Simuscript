import Node from '../libs/Node.js';
import CREATUREDEF from './CREATUREDEF.js';
import CREATUREPOS from './CREATUREPOS.js';

module.exports = class CREATURE extends Node {

    constructor() {
        super();
        this.creaturedef = [];
        this.creaturepos = [];
    }

    parse() {
        while (this.tokenizer.checkToken("define")) {
            this.creaturedef = new CREATUREDEF();
            this.creaturedef.parse();
        }
        while (this.tokenizer.checkToken("place")) {
            this.creaturepos = new CREATUREPOS();
            this.creaturepos.parse();
        }
    }

    evaluate() {
        this.creaturedef.forEach(def => {
            def.evaluate();
        })
        this.creaturepos.forEach(pos => {
            pos.evaluate();
        })
    }
}
