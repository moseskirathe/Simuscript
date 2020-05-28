var Node = require('../libs/Node.js');

module.exports = class TEXTURE extends Node {

    constructor() {
        super();
        this.type = "";
    }

    parse() {
        if (this.tokenizer.checkToken() === "rock") {
            this.type = "rock";
        } else if (this.tokenizer.checkToken() === "grass") {
            this.type = "grass";
        } else if (this.tokenizer.checkToken() === "swamp") {
            this.type = "swamp";
        } else if (this.tokenizer.checkToken() === "tree") {
            this.type = "tree";
        } else if (this.tokenizer.checkToken() === "hill") {
            this.type = "hill";
        } else if (this.tokenizer.checkToken() === "dirt") {
            this.type = "dirt";
        } else if (this.tokenizer.checkToken() === "water") {
            this.type = "water";
        } else {
            throw "ERROR: Unidentified texture type. Please use one of the following textures: grass, swamp, tree, hill, dirt or water";
        }
    }
}