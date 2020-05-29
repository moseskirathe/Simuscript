let theTokenizer = null;
let literals;

export default class tokenizer {

    constructor(literal, input) {
        this.RESERVEDWORD = "_"
        literals = literal;
        this.program = input;
        this.currentToken = 0;
        this.tokens = [];
        this.tokenize();
    }

    //implemented using the method outlined in lecture 2 by Alex Summers
    tokenize () {
        console.log("Initializing tokenizer");
        //0. Pick some RESERVEDWORD (string which never occurs in your input)
        //1. Read the whole program into a single string; kill the newlines and tabs
        let tokenizedProgram = this.program.replace("\n","");
        //2. Replace all constant literals with “RESERVEDWORD”<the literal>“RESERVEDWORD”
        let that = this;
        literals.forEach(function(s) {
            tokenizedProgram = tokenizedProgram.split(s).join(that.RESERVEDWORD + s.trim() + that.RESERVEDWORD);
        });
        //3. Replace all “RESERVEDWORDRESERVEDWORD” with just “RESERVEDWORD”
        tokenizedProgram = tokenizedProgram.replace(this.RESERVEDWORD + this.RESERVEDWORD, this.RESERVEDWORD);
        //4. Remove leading “RESERVEDWORD” character, then split on “RESERVEDWORD”
        if(tokenizedProgram.length>0 && tokenizedProgram[0] === this.RESERVEDWORD){
            tokenizedProgram = tokenizedProgram.substring(1);
        }
        let tokens = tokenizedProgram.split(this.RESERVEDWORD);
        //5. Trim whitespace around tokens
        for(let i = 0; i < tokens.length; i++){
            let t = tokens[i].trim();
            if (t.length > 0) {
                this.tokens.push(t);
            }
        }
        console.log(this.tokens);
        console.log("Done tokenizing");
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    checkNext() {
        let token;
        if (this.currentToken < this.tokens.length){
            token = this.tokens[this.currentToken];
        }
        else
            token = "NO_MORE_TOKENS";
        return token;
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    getNext() {
        let token;
        if (this.currentToken < this.tokens.length){
            token = this.tokens[this.currentToken];
            this.currentToken++;
        }
        else
            token = "NULLTOKEN";
        return token;
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    checkToken(toMatch) {
        let s = this.checkNext();
        return (s === toMatch);
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    getAndCheckNext(toMatch) {
        let s = this.getNext();
        if (!(s === toMatch)) {
            throw "That's not what the grammar expects! The parser saw: \"" + s + "\" at token " + this.currentToken + "but wanted: \"" + toMatch + "\"";
        }
        return s;
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    moreTokens() {
        return this.currentToken < this.tokens.length;
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    static makeTokenizer(literals, input) {
        if (theTokenizer === null) {
            theTokenizer = new tokenizer(literals, input);
        }
    }

    //implemented from sample code of the tinyDot program, provided by Alex Summers in lecture 2
    static getTokenizer() {
        return theTokenizer;
    }
}


