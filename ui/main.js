import tokenizer from '../libs/tokenizer.js';
import PROGRAM from "../ast/PROGRAM.js";

export const creatureTable = {};

export default function init(input){

    // initialize tokenizer
    let literals = ["set grid size to be","set rectangle","draw from",
                    "using","with","waviness","thickness","define"," as", " at", "that","place",
                    "anywhere","times","play for","seconds", "drops", "collects", "dislikes", " likes", "(", ")", ","];

    //TODO add rest of literals
    input = input.toLowerCase();
    let testInput = "set grid size to be (40, 30) set rectangle (20, 25) (30, 35) to rock";
    testInput = testInput.replace("(", "_(_");
    console.log(input);
    // tokenize
    tokenizer.makeTokenizer(literals, input);
    let program = new PROGRAM();
    program.parse();
    let gameState = new GameState()
    program.evaluate(gameState);
    return gameState;
}