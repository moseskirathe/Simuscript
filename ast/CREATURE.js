import Node from '../libs/Node.js';
import CREATUREDEF from './CREATUREDEF.js';
import CREATUREPOS from './CREATUREPOS.js';

module.exports = class CREATURE extends Node {

    constructor() {
        super();
        this.creaturedef = null;
        this.creaturepos = null;
    }

    parse() {
        this.creaturedef = new CREATUREDEF();
        this.creaturedef.parse();
        if (this.tokenizer.checkToken("place")) {
            this.creaturepos = new CREATUREPOS();
            this.creaturepos.parse();
        }
    }
}
