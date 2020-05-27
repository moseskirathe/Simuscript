//var program;
//var programLiterals = [];
//var tokens = [];
//var currentToken = 0;

// params: literals array, input string
/*exports.tokenize = function(literals, input) {
     // init tokenizer variables
    
    programLiterals = literals;
    program = input;

    console.log("Initializing tokenizer");
    //0. Pick some RESERVEDWORD (string which never occurs in your input) : we'll use _
    //1. Read the whole program into a single string; kill the newlines
    var tokenizedProgram = program.replace("\n","");
    console.log(tokenizedProgram);
    //2. Replace all constant literals with _<literal>_
    programLiterals.forEach(function(s) {
        console.log(s);
        tokenizedProgram = tokenizedProgram.replace(s,"_"+s+"_");
        console.log(tokenizedProgram);
    });
    //3. Replace all “RESERVEDWORDRESERVEDWORD” with just “RESERVEDWORD”
    tokenizedProgram = tokenizedProgram.replace("__","_");
    console.log(tokenizedProgram);
    //4. Remove leading “_” character, then split on “_”
    if(tokenizedProgram.length>0 && tokenizedProgram[0] == "_"){
        tokenizedProgram = tokenizedProgram.substring(1);
    }
    tokens = tokenizedProgram.split("_");
    console.log(tokens);
    //5. Trim whitespace around tokens
    for(var i = 0; i < tokens.length; i++){
        tokens[i] = tokens[i].trim();
    }
    console.log("Done tokenizing");
}

function checkNext(){
    var token = "";
    if (currentToken<tokens.length){
        token = tokens[currentToken];
    }
    else
        token="NO_MORE_TOKENS";
    return token;
}

function getNext(){
    var token = "";
    if (currentToken<tokens.length){
        token = tokens[currentToken];
        currentToken++;
    }
    else
        token="NULLTOKEN";
    return token;
}


function checkToken(regexp){
    var s = checkNext();
    return (s == regexp);
}


function getAndCheckNext(regexp){
    var s = getNext();
    if (!(s == regexp)) {
        console.log("Unexpected next token for Parsing! Expected something matching: " + regexp + " but got: " + s);
    }
    return s;
}

function moreTokens(){
    return currentToken<tokens.length;
}
*/

module.exports = class tokenizer {
    constructor(literals, input) {
        this.programLiterals = literals;
        this.program = input;
        this.currentToken = 0;
        this.tokens = [];
        this.tokenize();
    }

    tokenize () {
        console.log("Initializing tokenizer");
        //0. Pick some RESERVEDWORD (string which never occurs in your input) : we'll use _
        //1. Read the whole program into a single string; kill the newlines
        let tokenizedProgram = this.program.replace("\n","");
        console.log(tokenizedProgram);
        //2. Replace all constant literals with _<literal>_
        this.programLiterals.forEach(function(s) {
            console.log(s);
            tokenizedProgram = tokenizedProgram.replace(s,"_"+s+"_");
            console.log(tokenizedProgram);
        });
        //3. Replace all “RESERVEDWORDRESERVEDWORD” with just “RESERVEDWORD”
        tokenizedProgram = tokenizedProgram.replace("__","_");
        console.log(tokenizedProgram);
        //4. Remove leading “_” character, then split on “_”
        if(tokenizedProgram.length>0 && tokenizedProgram[0] == "_"){
            tokenizedProgram = tokenizedProgram.substring(1);
        }
        this.tokens = tokenizedProgram.split("_");
        console.log(this.tokens);
        //5. Trim whitespace around tokens
        for(let i = 0; i < this.tokens.length; i++){
            this.tokens[i] = this.tokens[i].trim();
        }
        console.log("Done tokenizing");
    }

    checkNext() {
        let token = "";
        if (this.currentToken < this.tokens.length){
            token = this.tokens[this.currentToken];
        }
        else
            token = "NO_MORE_TOKENS";
        return token;
    }

    getNext() {
        let token = "";
        if (this.currentToken < this.tokens.length){
            token = this.tokens[this.currentToken];
            this.currentToken++;
        }
        else
            token = "NULLTOKEN";
        return token;
    }

    checkToken(regexp) {
        let s = this.checkNext();
        return (s == regexp);
    }

    getAndCheckNext(regexp) {
        let s = this.getNext();
        if (!(s == regexp)) {
            console.log("Unexpected next token for Parsing! Expected something matching: " + regexp + " but got: " + s);
        }
        return s;
    }

    moreTokens() {
        return this.currentToken < this.tokens.length;
    }
}


