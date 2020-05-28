var Node = require('../libs/Node.js');

module.exports = class CREATURETYPE extends Node {

    constructor() {
        super();
        this.type = "";
    }

    parse() {
        if (this.tokenizer.checkNext() === "chicken") {
            this.type = "chicken";
        } else if (this.tokenizer.checkNext() === "cat") {
            this.type = "cat";
        } else if (this.tokenizer.checkNext() === "parrot") {
            this.type = "parrot";
        } else if (this.tokenizer.checkNext() === "squirrel") {
            this.type = "squirrel";
        } else if (this.tokenizer.checkNext() === "duck") {
            this.type = "duck";
        } else if (this.tokenizer.checkNext() === "dog") {
            this.type = "dog";
        } else if (this.tokenizer.checkNext() === "snail") {
            this.type = "snail";
        } else if (this.tokenizer.checkNext() === "tortoise") {
            this.type = "tortoise";
        } else if (this.tokenizer.checkNext() === "slime") {
            this.type = "slime";
        } else {
            throw "ERROR: Unidentified creature type. Please use one of the following types: chicken, cat, parrot, " +
            "squirrel, duck, dog, snail, tortoise or slime";
        }
    }
}
