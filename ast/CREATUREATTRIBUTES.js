var Node = require('../libs/Node.js');
var ITEM = require('./ITEM.js');
var ENTITY = require('./ENTITY.js');

module.exports = class CREATUREATTRIBUTES extends Node {

    constructor() {
        super();
        this.drops = [];
        this.likes = [];
        this.eats = [];
        this.dislikes = [];
    }

    parse() {
        if (this.tokenizer.checkNext() === "moves") {
            this.tokenizer.getAndCheckNext("moves");
        } else if (this.tokenizer.checkNext() === "drops") {
            this.tokenizer.getAndCheckNext("drops");
            let firstItem = new ITEM();
            this.drops.push(firstItem);
            while (this.tokenizer.checkNext() === "and") {
                this.tokenizer.getAndCheckNext("and");
                let item = new ITEM();
                this.drops.push(item);
            }
        } else if (this.tokenizer.checkNext() === "likes") {
            this.tokenizer.getAndCheckNext("likes");
            let firstEntity = new ENTITY();
            this.likes.push(firstEntity);
            while (this.tokenizer.checkNext() === "and") {
                this.tokenizer.getAndCheckNext("and");
                let entity = new ENTITY();
                this.likes.push(entity);
            }
        } else if (this.tokenizer.checkNext() === "eats") {
            this.tokenizer.getAndCheckNext("eats");
            let firstEntity = new ENTITY();
            this.eats.push(firstEntity);
            while (this.tokenizer.checkNext() === "and") {
                this.tokenizer.getAndCheckNext("and");
                let entity = new ENTITY();
                this.eats.push(entity);
            }
        } else if (this.tokenizer.checkNext() === "dislikes") {
            this.tokenizer.getAndCheckNext("dislikes");
            let firstEntity = new ENTITY();
            this.dislikes.push(firstEntity);
            while (this.tokenizer.checkNext() === "and") {
                this.tokenizer.getAndCheckNext("and");
                let entity = new ENTITY();
                this.dislikes.push(entity);
            }
        } else {
            throw "ERROR: Unidentified texture type. Please use one of the following textures: grass, swamp, tree, hill, dirt or water";
        }
    }
}