import GRID from "./GRID";
import TERRAIN from "./TERRAIN"

import Node from '../libs/Node.js';
import {CREATUREDEF} from "./CREATUREDEF";

export default class PROGRAM extends Node {

    constructor() {
        super();
        this.grid = null;
        this.terrain = [];
        this.creatureDefs = {};
        this.creatures = {};
    }

    parse() {
        this.grid = new GRID();
        this.grid.parse();
        this.grid = new GRID();
        while (this.tokenizer.checkToken("set rectangle")) {
            let terrain = new TERRAIN();
            terrain.parse();
            this.terrain.push(terrain);
        }
        while (this.tokenizer.checkToken("draw from")) {
            let terrain = new TERRAIN();
            terrain.parse();
            this.terrain.push(terrain);
        }
        while (this.tokenizer.checkToken("define")) {
            let creatureDef = new CREATUREDEF();
            creatureDef.parse();
            this.creatureDefs.push(creatureDef);
        }
        while (this.tokenizer.checkToken("place")) {
            let creature = new CREATUREPOS();
            creature.parse();
            this.creatures.push(creature);
        }

        this.grid.parse();
    }

    evaluate(gameState) {
        return this.type;
    }
}
