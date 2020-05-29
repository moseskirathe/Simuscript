let theTokenizer = null;
let literals;

export default class tokenizer {

    constructor(literal, input) {
        literals = literal;
        this.program = input;
        this.theTokenizer = null;
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
        literals.forEach(function(s) {
            console.log(s);
            //let regex = new RegExp(s, 'g')
            tokenizedProgram = tokenizedProgram.split(s).join("_"+s.trim()+"_");
            console.log(tokenizedProgram);
        });
        //3. Replace all “RESERVEDWORDRESERVEDWORD” with just “RESERVEDWORD”
        tokenizedProgram = tokenizedProgram.replace("__","_");
        console.log(tokenizedProgram);
        //4. Remove leading “_” character, then split on “_”
        if(tokenizedProgram.length>0 && tokenizedProgram[0] == "_"){
            tokenizedProgram = tokenizedProgram.substring(1);
        }
        let tokens = tokenizedProgram.split("_");
        //5. Trim whitespace around tokens
        for(let i = 0; i < tokens.length; i++){
            let t = tokens[i].trim();
            if (t.length > 0)
                this.tokens.push(t);
        }
        console.log(this.tokens);
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
        return (s === regexp);
    }

    getAndCheckNext(regexp) {
        let s = this.getNext();
        if (!(s === regexp)) {
            throw "Unexpected next token for Parsing! Expected something matching: " + regexp + " but got: " + s;
        }
        return s;
    }

    moreTokens() {
        return this.currentToken < this.tokens.length;
    }

    static makeTokenizer(literals, input) {
        if (theTokenizer === null) {
            theTokenizer = new tokenizer(literals, input);
        }
    }

    static getTokenizer() {
        return theTokenizer;
    }
}


