var tokenizer = require('../libs/tokenizer.js');

function init(){
    
    // initialize tokenizer
    var literals = ["set grid size to be","set rectangle","to","draw","from",
                    "using","with","waviness","thickness","define","as","that","place",
                    "anywhere","times","play for","turns"];

    // TODO: ensure input string is lowercase
    var testInput = "make creature called perry";

    // tokenize
    tokenizer.tokenize(literals, testInput);
}

init();