import GRID from "./GRID";
import TERRAIN from "./TERRAIN"

import Node from '../libs/Node.js';
import {CREATUREDEF} from "./CREATUREDEF";
import CREATUREPOS from "./CREATUREPOS";
import PATH from "./PATH";
import LANDMARKPOS from "./LANDMARKPOS";

export default class PROGRAM extends Node {

    constructor() {
        super();
        this.grid = null;
        this.terrain = [];
        this.paths = [];
        this.creatureDefs = [];
        this.landmarks = [];
        this.creatures = [];
    }

    parse() {
        this.grid = new GRID();
        this.grid.parse();
        while (this.tokenizer.checkToken("set rectangle")) {
            let terrain = new TERRAIN();
            terrain.parse();
            this.terrain.push(terrain);
        }
        while (this.tokenizer.checkToken("draw from")) {
            let path = new PATH();
            path.parse();
            this.paths.push(path);
        }
        while (this.tokenizer.checkToken("define")) {
            let creatureDef = new CREATUREDEF();
            creatureDef.parse();
            this.creatureDefs.push(creatureDef);
        }
        while (this.tokenizer.checkToken("plant")) {
            let landmark = new LANDMARKPOS();
            landmark.parse();
            this.landmarks.push(landmark);
        }
        while (this.tokenizer.checkToken("place")) {
            let creature = new CREATUREPOS();
            creature.parse();
            this.creatures.push(creature);
        }
    }

    evaluate(gameState) {
        this.grid.evaluate(gameState);
        this.terrain.forEach(terr => {
            terr.evaluate();
        });
        this.paths.forEach(path => {
            path.evaluate();
        });
        this.creatureDefs.forEach(def => {
            def.evaluate();
        });
        this.landmarks.forEach(landmark => {
            landmark.evaluate();
        });
        this.creatures.forEach(creature => {
            creature.evaluate();
        });
    }
}
