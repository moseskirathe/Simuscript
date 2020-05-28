var Node = require('../libs/Node.js');

module.exports = class CREATURETYPE extends Node {

    constructor() {
        super();
        this.type = "";
    }

    parse() {
        if (this.tokenizer.checkToken() === "chicken") {
            this.type = "chicken";
        } else if (this.tokenizer.checkToken() === "cat") {
            this.type = "cat";
        } else if (this.tokenizer.checkToken() === "parrot") {
            this.type = "parrot";
        } else if (this.tokenizer.checkToken() === "squirrel") {
            this.type = "squirrel";
        } else if (this.tokenizer.checkToken() === "duck") {
            this.type = "duck";
        } else if (this.tokenizer.checkToken() === "dog") {
            this.type = "dog";
        } else if (this.tokenizer.checkToken() === "snail") {
            this.type = "snail";
        } else if (this.tokenizer.checkToken() === "tortoise") {
            this.type = "tortoise";
        } else if (this.tokenizer.checkToken() === "slime") {
            this.type = "slime";
        } else {

        }
    }
}
