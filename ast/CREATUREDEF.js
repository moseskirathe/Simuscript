import Node from '../libs/Node.js';
import CREATURENAME from './CREATURENAME.js';
import CREATURETYPE from  './CREATURETYPE.js';
import CREATUREATTRIBUTES from './CREATUREATTRIBUTES.js';
import { creatureTable } from '../ui/main';

export class CREATUREDEF extends Node {

    constructor() {
        super();
        this.creaturename = null;
        this.creaturetype = null;
        this.creatureattributes = [];
        this.creatureAttributesObj = {
            moves: false,
            drops: null,
            likes: null,
            scared_of: null,
            collects: null,
        };
    }

    parse() {
        this.tokenizer.getAndCheckNext("define");
        this.creaturename = new CREATURENAME();
        this.creaturename.parse();
        this.tokenizer.getAndCheckNext("as");
        this.creaturetype = new CREATURETYPE();
        this.creaturetype.parse();
        while (this.tokenizer.checkToken("that")) {
            this.tokenizer.getAndCheckNext("that");
            let creatureattribute = new CREATUREATTRIBUTES();
            creatureattribute.parse();
            this.creatureattributes.push(creatureattribute);
        }
    }

    evaluate(gameState) {
        this.creatureattributes.forEach(attr => {
            attr.evaluate(gameState);
            this.creatureAttributesObj[attr.type] = attr.value;
        });
        creatureTable[this.creaturename] = {
            type: this.creaturetype,
            attributes: this.creatureAttributesObj
        }
    }
}