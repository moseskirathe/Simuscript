import Node from '../libs/Node.js';
import CREATURE from './CREATURE.js';
import CREATURETYPE from './CREATURETYPE.js';
import INANIMATE from './INANIMATE.js';
import TEXTURE from './TEXTURE.js'

export default class ENTITY extends Node {

    constructor() {
        super();
        this.entityname = "";
        this.entitytype = null;
    }

    parse() {
        /* Did not include and cases, as we wouldn't know whether the next
           token is an item or an entity;
           Dislikes is yet to be implemented
           */
        if(this.tokenizer.checkToken("likes")){
            this.tokenizer.getAndCheckNext("likes");
            if(this.tokenizer.checkToken("[a-z]+")){
                this.entitytype = new CREATURE();
            } 
            else if(this.tokenizer.checkToken("chicken") || this.tokenizer.checkToken("cat")) {
                this.entitytype = new CREATURETYPE();
            } else if(this.tokenizer.checkToken("castle") || this.tokenizer.checkToken("farm")) {
                this.entitytype = new INANIMATE();
            } else if (this.tokenizer.checkToken("ice") || this.tokenizer.checkToken("swamp")
                    || this.tokenizer.checkToken("rock") || this.tokenizer.checkToken("grass")
                    || this.tokenizer.checkToken("desert") || this.tokenizer.checkToken("forest")) {
                        this.entitytype = new TEXTURE();
            } else {
                throw "Unidentified entity";
            }
        }
        else if(this.tokenizer.checkToken("eats")){
            this.tokenizer.getAndCheckNext("eats");
            if(this.tokenizer.checkToken("[a-z]+")){
             this.entitytype = new CREATURE();
            } 
            else if(this.tokenizer.checkToken("chicken") || this.tokenizer.checkToken("cat")) {
            this.entitytype = new CREATURETYPE();
            } else if(this.tokenizer.checkToken("castle") || this.tokenizer.checkToken("farm")) {
            this.entitytype = new INANIMATE();
            } else if (this.tokenizer.checkToken("ice") || this.tokenizer.checkToken("swamp")
            || this.tokenizer.checkToken("rock") || this.tokenizer.checkToken("grass")
            || this.tokenizer.checkToken("desert") || this.tokenizer.checkToken("forest")) {
                this.entitytype = new TEXTURE();
             } else {
           throw "Unidentified entity";
            }
      }
      this.entitytype.parse();
    }
}