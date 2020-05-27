var tokenizer = require('../libs/tokenizer.js');
var Grid = require('../ast/Grid.js');
function init(){
    
    // initialize tokenizer
    var literals = ["set grid size to be ","set rectangle","draw","from",
                    "using","with","waviness","thickness","define","as","that","place",
                    "anywhere","times","play for","turns", "(", ")", ","];

    // TODO: ensure input string is lowercase
    var testInput = "set grid size to be (4, 3)";

    // tokenize
    let t = new tokenizer(literals, testInput);
    let grid = new Grid(t);
    grid.parse();
    console.log(grid.width);
    console.log(grid.height);
}

init();