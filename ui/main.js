import tokenizer from '../libs/tokenizer.js';
import PROGRAM from "../ast/PROGRAM";

export const creatureTable = {};

function init(){

    // initialize tokenizer
    let literals = ["set grid size to be","set rectangle","draw from",
                    "using","with","waviness","thickness","define","as","that","place",
                    "anywhere","times","play for","turns", "(", ")", ","];

    // TODO: ensure input string is lowercase
    let testInput = "set grid size to be (40, 30) set rectangle (20, 25) (30, 35) to rock";
    testInput = testInput.replace("(", "_(_");
    console.log(testInput);
    // tokenize
    tokenizer.makeTokenizer(literals, testInput);
    let t = tokenizer.getTokenizer();
    let program = new PROGRAM();
    program.parse();
    program.evaluate(new GameState());
    console.log(grid.width);
    console.log(grid.height);
    console.log(texture.topleftx);
}

init();