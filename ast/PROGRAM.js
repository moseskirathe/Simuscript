import GRID from "./GRID.js";
import TERRAIN from "./TERRAIN.js"

import Node from '../libs/Node.js';
import {CREATUREDEF} from "./CREATUREDEF.js";
import CREATUREPOS from "./CREATUREPOS.js";
import PATH from "./PATH.js";
import LANDMARKPOS from "./LANDMARKPOS.js";
import PLAY from "./PLAY.js";

export default class PROGRAM extends Node {

    constructor() {
        super();
        this.grid = null;
        this.terrain = [];
        this.paths = [];
        this.creatureDefs = [];
        this.landmarks = [];
        this.creatures = [];
        this.play = null;
    }

    parse() {
        while (this.tokenizer.moreTokens()) {
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
            this.play = new PLAY();
            this.play.parse();
        }
    }

    evaluate(gameState) {
        this.grid.evaluate(gameState);
        this.terrain.forEach(terr => {
            terr.evaluate(gameState);
        });
        this.paths.forEach(path => {
            path.evaluate(gameState);
        });
        this.creatureDefs.forEach(def => {
            def.evaluate(gameState);
        });
        this.landmarks.forEach(landmark => {
            landmark.evaluate(gameState);
        });
        this.creatures.forEach(creature => {
            creature.evaluate(gameState);
        });
        this.play.evaluate(gameState);
    }
}
