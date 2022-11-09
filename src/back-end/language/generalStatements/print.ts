import {randomIntFromInterval} from '../../utils';
import {DifficultyNamespace} from '../difficulty';
import {InterfacesNamespace} from '../interfaces';

import {ProblemNamespace} from '../problem';
import {UtilsNamespace} from '../utils';
import {LanguageVariableNamespace} from '../languageVariable';
import {FunctionNamespace} from '../function/function';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguagePieceName = InterfacesNamespace.ILanguagePieceName;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;
import LanguageVariable = LanguageVariableNamespace.LanguageVariable;
import Difficulty = DifficultyNamespace.Difficulty;
import createGenerator = UtilsNamespace.createGenerator;
import Function = FunctionNamespace.Function;

export namespace PrintNamespace {
    export class Print implements ILanguagePiece {
        private readonly guard: 'Print' = 'Print';

        private readonly printVariable: ILanguageVariable;
        constructor(context: ILanguageContext, private difficulty: number) {
            const variable = context.getValidUsedVariable();
            if (variable === null) {
                throw new Error(`Cannot create print statement`);
            }
            this.printVariable = variable;
        }
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };

        readonly description = (): string => {
            return `prints object '${this.printVariable.getName().name}'`;
        };
        readonly code = (): string => {
            return `print ${this.printVariable.getName().name}\n`;
        };
        readonly assignToVariable = (context: ILanguageContext): boolean => {
            return false;
        };
    }

    export const printGenerator = createGenerator(Print, new Difficulty(1, 1), (context: ILanguageContext): boolean => {
        return context.validUsedVariableExists();
    });

    Function.register(printGenerator);
}
