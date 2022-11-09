import {InterfacesNamespace} from '../interfaces';
import {LanguageVariableNamespace} from '../languageVariable';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import LanguageVariable = LanguageVariableNamespace.LanguageVariable;
import ILanguagePieceName = InterfacesNamespace.ILanguagePieceName;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;

export namespace FunctionArgumentNamespace {
    export class FunctionArgument implements ILanguagePiece {
        private readonly arg: ILanguageVariable;
        constructor(context: ILanguageContext, private difficulty: number) {
            this.arg = new LanguageVariable(context);
        }
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };
        readonly description = (): string => {
            return `'${this.arg.getName().name}' of type ${this.arg.getType()}`;
        };
        readonly code = (): string => {
            return `${this.arg.getName().name}:${this.arg.getType()}`;
        };
        readonly assignToVariable = (context: ILanguageContext): boolean => {
            return false;
        };
        readonly getVariableName = (): ILanguagePieceName => {
            return this.arg.getName();
        };
    }
}
