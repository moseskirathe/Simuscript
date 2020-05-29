import Node from '../libs/Node.js';
import CREATURENAME from './CREATURENAME.js';
import CREATURETYPE from  './CREATURETYPE.js';
import CREATUREATTRIBUTES from './CREATUREATTRIBUTES.js';
import { creatureTable } from '../ui/main.js';

export class CREATUREDEF extends Node {

    constructor() {
        super();
        this.creaturename = null;
        this.creaturetype = null;
        this.creatureattributes = null;
    }

    parse() {
        this.tokenizer.getAndCheckNext("define");
        this.creaturename = new CREATURENAME();
        this.creaturename.parse();
        this.tokenizer.getAndCheckNext("as");
        this.creaturetype = new CREATURETYPE();
        this.creaturetype.parse();
        if (this.tokenizer.checkNext() === "that") {
            let creatureAttributes = new CREATUREATTRIBUTES();
            creatureAttributes.parse();
            this.creatureattributes = creatureAttributes;
        }
    }

    evaluate(gameState) {
        let attributes = this.creatureattributes;
        if (attributes !== null) {
            attributes = this.creatureattributes.evaluate(gameState);
        }
        let name = this.creaturename.evaluate(gameState);
        let type = this.creaturetype.evaluate(gameState);
        creatureTable[name] = {
            type: type,
            attributes: attributes
        }
    }
}