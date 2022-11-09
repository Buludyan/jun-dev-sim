import {IGuard, randomIntFromInterval} from '../utils';
import {InterfacesNamespace} from './interfaces';
import {LanguageContextNamespace} from './languageContext';
import {UtilsNamespace} from './utils';
import {FunctionNamespace} from './function/function';

import generateOneStatementsOfDifficulty = UtilsNamespace.generateOneStatementsOfDifficulty;
import generateStatementsTillDifficulty = UtilsNamespace.generateStatementsTillDifficulty;
import LanguageContext = LanguageContextNamespace.LanguageContext;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;

export namespace ProblemNamespace {
    export class Problem implements ILanguagePiece {
        private readonly guard: 'Problem' = 'Problem';
        protected static readonly allStatementGenerators: IPieceGenerator[] =
            [];
        public static readonly register = (statement: IPieceGenerator) => {
            this.allStatementGenerators.push(statement);
        };

        private readonly statements: ILanguagePiece[] = [];
        constructor(context: ILanguageContext, private difficulty: number) {
            this.statements = generateOneStatementsOfDifficulty(
                context,
                Problem.allStatementGenerators,
                difficulty
            );
        }
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };

        readonly description = (): string => {
            return `${this.statements
                .map(s => `Write ${s.description()}`)
                .join('\n')}`;
        };
        readonly code = (): string => {
            return `${this.statements.map(s => s.code()).join('')}\n`;
        };
        readonly assignToVariable = (context: ILanguageContext): boolean => {
            throw new Error(`implement`);
        };
        readonly relatedVariableName = (
            context: ILanguageContext
        ): ILanguageVariable | null => {
            return null;
        };
    }
}
