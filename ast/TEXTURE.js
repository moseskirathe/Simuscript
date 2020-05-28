var Node = require('../libs/Node.js');

module.exports = class TEXTURE extends Node {

    constructor() {
        super();
        this.type = "";
    }

    parse() {
        if (this.tokenizer.checkNext() === "rock") {
            this.type = "rock";
        } else if (this.tokenizer.checkNext() === "grass") {
            this.type = "grass";
        } else if (this.tokenizer.checkNext() === "swamp") {
            this.type = "swamp";
        } else if (this.tokenizer.checkNext() === "tree") {
            this.type = "tree";
        } else if (this.tokenizer.checkNext() === "hill") {
            this.type = "hill";
        } else if (this.tokenizer.checkNext() === "dirt") {
            this.type = "dirt";
        } else if (this.tokenizer.checkNext() === "water") {
            this.type = "water";
        } else {
            throw "ERROR: Unidentified texture type. Please use one of the following textures: grass, swamp, tree, hill, dirt or water";
        }
    }
}
