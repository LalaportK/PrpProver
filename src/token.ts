/*
    This File defines constants of types of tokens and names of them.
*/

export const enum Token {
    LogicalSymbol,      // AND, OR, !, ->, |-
    EOF,                // EOF
    Punctuator,         // '(', ')', '{', '}', '[', ']', ','
    Literal,            // rest
    Illegal,
}

export const TokenName: { [key: number]: string;} = {};
TokenName[Token.LogicalSymbol] = 'LogicalSymbol';
TokenName[Token.EOF] = 'EOF';
TokenName[Token.Punctuator] = 'Punctuator';
TokenName[Token.Literal] = 'Literal';
TokenName[Token.Illegal] = 'Illegal';