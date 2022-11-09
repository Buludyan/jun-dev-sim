import {DifficultyNamespace} from './difficulty';
import {InterfacesNamespace} from './interfaces';
import {UtilsNamespace} from './utils';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePieceName = InterfacesNamespace.ILanguagePieceName;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;

export namespace LanguageVariableNamespace {
    export class LanguageVariable implements ILanguageVariable {
        private readonly name: ILanguagePieceName;
        private readonly type: PrimitiveTypesType;
        constructor(context: ILanguageContext) {
            this.name = context.generateValidPieceName();
            this.type = context.generateValidPrimitiveType();
        }
        readonly description = (): string => {
            return `and assign it to variable '${this.name.name}' of type ${this.type}`;
        };
        readonly code = (): string => {
            return `var ${this.name.name}:${this.type} =`;
        };

        readonly getName = (): ILanguagePieceName => {
            return this.name;
        };
        readonly getType = (): PrimitiveTypesType => {
            return this.type;
        };
    }
}
