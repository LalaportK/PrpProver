export class Scanner {
    readonly formula: string;
    index: number;
    currentChar: string;
    nextChar: string | undefined;

    constructor(formula: string){
        this.formula = formula;
        this.index = -1;
        this.currentChar = formula[0];
    }

    public readOneChar(): void {
        this.index++;
        
        if(this.index === this.formula.length - 1){
            this.currentChar = this.formula[this.index];
            this.nextChar = 'EOF';
        }
        else if(this.index === this.formula.length){
            this.currentChar = 'EOF';
            this.nextChar = 'END';
        }
        else{
            this.currentChar = this.formula[this.index];
            this.nextChar = this.formula[this.index + 1];
        }
    }
}