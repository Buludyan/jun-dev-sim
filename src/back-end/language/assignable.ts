import {InterfacesNamespace} from './interfaces';
import {LanguageVariableNamespace} from './languageVariable';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;

import LanguageVariable = LanguageVariableNamespace.LanguageVariable;

export namespace AssignableNamespace {
    export class Assignable {
        private assignToVariableName: ILanguageVariable | null = null;

        readonly assignToVariable = (context: ILanguageContext): boolean => {
            if (this.assignToVariableName === null) {
                this.assignToVariableName = new LanguageVariable(context);
            }
            return true;
        };

        readonly assignDescription = (): string => {
            return this.assignToVariableName ? ` ${this.assignToVariableName.description()}` : '';
        };

        readonly assignCode = (): string => {
            return this.assignToVariableName ? `${this.assignToVariableName.code()} ` : '';
        };
    }
    export const isAssignable = (x: unknown): x is Assignable => {
        return (x as Assignable).assignToVariable !== undefined;
    };
}
