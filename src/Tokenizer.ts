import { Scanner } from './scanner';
import { TokenModel } from './TokenModel';
import { Token } from './token';

export class Tokenizer {
    scanner: Scanner;
    constructor(formula: string){
        this.scanner = new Scanner(formula);
    }

    public getNextToken(): TokenModel {
        // scan starts with index of -1
        this.scanner.readOneChar();

        this.skipWhiteSpace();

        let currentCh = this.scanner.currentChar;
        console.log(this.scanner.nextChar);

        var retToken: TokenModel = {type: -1, value: ''};

        switch(currentCh)
        {
            // Tokens of one character
            case '(':
            case ')':
            case '{':
            case '}':
            case '[':
            case ']':
            case ',':
                retToken.type = Token.Punctuator;
                retToken.value = currentCh;
                break;
            case '!':
                retToken.type = Token.LogicalSymbol;
                retToken.value = currentCh;
                break;
            // Tokens of at least two characters
            case '-':
                if(this.scanner.nextChar === '>'){
                    retToken.type = Token.LogicalSymbol;
                    retToken.value = '->';
                }
                else{
                    retToken.type = Token.Illegal;
                    retToken.value = currentCh + this.scanner.nextChar;
                }
                this.scanner.readOneChar();
                break;
            case '|':
                if(this.scanner.nextChar === '-'){
                    retToken.type = Token.LogicalSymbol;
                    retToken.value = '|-';
                }
                else{
                    retToken.type = Token.Illegal;
                    retToken.value = currentCh + this.scanner.nextChar;
                }
                this.scanner.readOneChar();
                break;
            case 'EOF':
                retToken.type = Token.EOF;
                retToken.value = currentCh;
                break;
            default:
                if(this.isLiteralStart(currentCh)) {
                    retToken = this.readTokenModel();
                } else {
                    retToken = {type: Token.Illegal, value: currentCh};
                }
                break;
        }
        return retToken;
    }

    private readTokenModel(): TokenModel {
        var strLiteral = this.scanner.currentChar;

        if(this.scanner.nextChar != undefined){
           while(this.isLiteralPart(this.scanner.nextChar)) {
               strLiteral = strLiteral + this.scanner.nextChar;
               this.scanner.readOneChar();
           }
           if(['AND', 'OR'].includes(strLiteral.toUpperCase())){
               return {type: Token.LogicalSymbol, value: strLiteral};
           }
           return {type: Token.Literal, value: strLiteral};
        }
        else {
            return {type: Token.Illegal, value: strLiteral};
        }
    }

    private isLiteralStart(char: string): boolean {
        // Literals must start with a letter or underscore
        if (char.length > 1) return false;
        let charCode = char.charCodeAt(0);

        return (charCode >= 0x41 && charCode <= 0x5A) ||    // A...Z
            (charCode >= 0x61 && charCode <= 0x7A)          // a...z
    }

    private isLiteralPart(char: string): boolean {
        if (char.length > 1) return false;
        let charCode = char.charCodeAt(0);

        return (charCode >= 0x21 && charCode <= 0x7E)   // Characters and symbols
    }

    private skipWhiteSpace(): void {
        while(this.isWhiteSpace(this.scanner.currentChar))
            this.scanner.readOneChar();
    }

    private isWhiteSpace(char: string): boolean {
        let charCode = char.charCodeAt(0);
        return (charCode === 0x20) || (charCode === 0x09) ||
            (charCode === 0x0B) || (charCode === 0x0C) ||
            (charCode === 0xA0) || (charCode === 0x2028) || (charCode === 0x2029) ||
            (charCode >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(charCode) >= 0);
    }
}