var program;
var programLiterals = [];
var tokens = [];
var currentToken = 0;

// params: literals array, input string
exports.tokenize = function(literals, input){
     // init tokenizer variables
    
    programLiterals = literals;
    program = input;

    console.log("Initializing tokenizer");
     //0. Pick some RESERVEDWORD (string which never occurs in your input) : we'll use _
     //1. Read the whole program into a single string; kill the newlines
     var tokenizedProgram = program.replace("\n","");
     //2. Replace all constant literals with _<literal>_
    programLiterals.forEach(function(s) {
         tokenizedProgram = tokenizedProgram.replace(s,"_"+s+"_");
     });
     //3. Replace all “RESERVEDWORDRESERVEDWORD” with just “RESERVEDWORD”
     tokenizedProgram = tokenizedProgram.replace("__","_");
     //4. Remove leading “_” character, then split on “_”
     if(tokenizedProgram.length>0 && tokenizedProgram[0] == "_"){
         tokenizedProgram = tokenizedProgram.substring(1);
     }
     tokens = tokenizedProgram.split("_");
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





