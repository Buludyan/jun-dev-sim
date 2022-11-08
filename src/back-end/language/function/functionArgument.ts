import {
    ILanguageContext,
    ILanguagePiece,
    ILanguagePieceName,
    PrimitiveTypesType,
} from '../interfaces';

export class FunctionArgument implements ILanguagePiece {
    private readonly name: ILanguagePieceName;
    private readonly type: PrimitiveTypesType;
    constructor(context: ILanguageContext, difficulty: number) {
        this.name = context.generateValidPieceName();
        this.type = context.generateValidPrimitiveType();
    }
    readonly description = (): string => {
        return `${this.name.name} of type ${this.type}`;
    };
    readonly code = (): string => {
        return `${this.name.name}:${this.type}`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        return false;
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        return null;
    };
}
