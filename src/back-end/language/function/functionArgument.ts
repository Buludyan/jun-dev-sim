import {InterfacesNamespace} from '../interfaces';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import ILanguagePieceName = InterfacesNamespace.ILanguagePieceName;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;

export namespace FunctionArgumentNamespace {
    export class FunctionArgument implements ILanguagePiece {
        private readonly name: ILanguagePieceName;
        private readonly type: PrimitiveTypesType;
        constructor(context: ILanguageContext, private difficulty: number) {
            this.name = context.generateValidPieceName();
            this.type = context.generateValidPrimitiveType();
        }
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };
        readonly description = (): string => {
            return `'${this.name.name}' of type ${this.type}`;
        };
        readonly code = (): string => {
            return `${this.name.name}:${this.type}`;
        };
        readonly assignToVariable = (context: ILanguageContext): boolean => {
            return false;
        };
        readonly relatedVariableName = (
            context: ILanguageContext
        ): ILanguageVariable | null => {
            return null;
        };
        readonly getVariableName = (): ILanguagePieceName => {
            return this.name;
        };
    }
}
