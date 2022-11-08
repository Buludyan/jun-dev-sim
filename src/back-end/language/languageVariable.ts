import {
    ILanguageContext,
    ILanguagePiece,
    ILanguagePieceName,
    ILanguageVariable,
    PrimitiveTypesType,
} from './interfaces';

export class LanguageVariable implements ILanguageVariable {
    private readonly name: ILanguagePieceName;
    private readonly type: PrimitiveTypesType;
    constructor(context: ILanguageContext) {
        this.name = context.generateValidPieceName();
        this.type = context.generateValidPrimitiveType();
    }
    readonly description = (): string => {
        return `and assign it to variable ${this.name.name} of type ${this.type}`;
    };
    readonly code = (): string => {
        return `var ${this.name.name}:${this.type} = `;
    };
}
