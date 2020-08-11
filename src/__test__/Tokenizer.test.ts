import { Tokenizer } from '../Tokenizer';
import { Token } from '../token';

test('Tokens can be obtained.', () => {
    let tokenizer = new Tokenizer('(){}[],-> |- !A_1 AnD A_2');
    let tokenizernext = tokenizer.getNextToken();
    let tokenExpectLparen = {type: Token.Punctuator, value: '('};

    expect(tokenizernext.type).toBe(tokenExpectLparen.type);
    expect(tokenizernext.value).toBe(tokenExpectLparen.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectRparen = {type: Token.Punctuator, value: ')'};

    expect(tokenizernext.type).toBe(tokenExpectRparen.type);
    expect(tokenizernext.value).toBe(tokenExpectRparen.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectLbrace = {type: Token.Punctuator, value: '{'};

    expect(tokenizernext.type).toBe(tokenExpectLbrace.type);
    expect(tokenizernext.value).toBe(tokenExpectLbrace.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectRbrace = {type: Token.Punctuator, value: '}'};

    expect(tokenizernext.type).toBe(tokenExpectRbrace.type);
    expect(tokenizernext.value).toBe(tokenExpectRbrace.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectLdai = {type: Token.Punctuator, value: '['};

    expect(tokenizernext.type).toBe(tokenExpectLdai.type);
    expect(tokenizernext.value).toBe(tokenExpectLdai.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectRdai = {type: Token.Punctuator, value: ']'};

    expect(tokenizernext.type).toBe(tokenExpectRdai.type);
    expect(tokenizernext.value).toBe(tokenExpectRdai.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectComma = {type: Token.Punctuator, value: ','};

    expect(tokenizernext.type).toBe(tokenExpectComma.type);
    expect(tokenizernext.value).toBe(tokenExpectComma.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectImplication = {type: Token.LogicalSymbol, value: '->'};

    expect(tokenizernext.type).toBe(tokenExpectImplication.type);
    expect(tokenizernext.value).toBe(tokenExpectImplication.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectTurnstile = {type: Token.LogicalSymbol, value: '|-'};

    expect(tokenizernext.type).toBe(tokenExpectTurnstile.type);
    expect(tokenizernext.value).toBe(tokenExpectTurnstile.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectNegation = {type: Token.LogicalSymbol, value: '!'};

    expect(tokenizernext.type).toBe(tokenExpectNegation.type);
    expect(tokenizernext.value).toBe(tokenExpectNegation.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectLiteral = {type: Token.Literal, value: 'A_1'};

    expect(tokenizernext.type).toBe(tokenExpectLiteral.type);
    expect(tokenizernext.value).toBe(tokenExpectLiteral.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectAnd = {type: Token.LogicalSymbol, value: 'AnD'};

    expect(tokenizernext.type).toBe(tokenExpectAnd.type);
    expect(tokenizernext.value).toBe(tokenExpectAnd.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectLiteral2 = {type: Token.Literal, value: 'A_2'};

    expect(tokenizernext.type).toBe(tokenExpectLiteral2.type);
    expect(tokenizernext.value).toBe(tokenExpectLiteral2.value);

    tokenizernext = tokenizer.getNextToken();
    let tokenExpectEOF = {type: Token.EOF, value: 'EOF'};

    expect(tokenizernext.type).toBe(tokenExpectEOF.type);
    expect(tokenizernext.value).toBe(tokenExpectEOF.value);
});

/*
    Template
test('foo must be bar', () => {
    expect(foo).toBe(bar);
}
*/