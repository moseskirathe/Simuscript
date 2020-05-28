var Node = require('../libs/Node.js');
var CREATURENAME = require('./CREATURENAME.js');
var CREATURETYPE = require('./CREATURETYPE.js');
var CREATUREATTRIBUTES = require('./CREATUREATTRIBUTES.js');

module.exports = class CREATUREDEF extends Node {

    constructor() {
        super();
        this.creaturename = null;
        this.creaturetype = null;
        this.creatureattributes = [];
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
            let creatureattributes = new CREATUREATTRIBUTES();
            this.creatureattributes.push(creatureattributes);
        }
    }
}