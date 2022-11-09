import {randomIntFromInterval} from '../../utils';
import {DifficultyNamespace} from '../difficulty';
import {LanguageVariableNamespace} from '../languageVariable';
import {UtilsNamespace} from '../utils';
import {FunctionArgumentNamespace} from './functionArgument';
import {InterfacesNamespace} from '../interfaces';

import Difficulty = DifficultyNamespace.Difficulty;
import LanguageVariable = LanguageVariableNamespace.LanguageVariable;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import ILanguagePieceName = InterfacesNamespace.ILanguagePieceName;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;

import createGenerator = UtilsNamespace.createGenerator;
import generateStatementsTillDifficulty = UtilsNamespace.generateStatementsTillDifficulty;
import FunctionArgument = FunctionArgumentNamespace.FunctionArgument;
import {ProblemNamespace} from '../problem';

export namespace FunctionNamespace {
    export class Function implements ILanguagePiece {
        private readonly guard: 'Function' = 'Function';
        // TODO: move from here
        protected static readonly allStatementGenerators: IPieceGenerator[] =
            [];
        public static readonly register = (statement: IPieceGenerator) => {
            this.allStatementGenerators.push(statement);
        };

        private readonly functionName: ILanguagePieceName;
        private readonly functionArguments: FunctionArgument[];
        private readonly statements: ILanguagePiece[] = [];
        constructor(context: ILanguageContext, private difficulty: number) {
            this.functionName = context.generateValidPieceName();
            this.functionArguments = [
                context.createPiece(FunctionArgument, difficulty),
                context.createPiece(FunctionArgument, difficulty),
            ];
            this.statements = generateStatementsTillDifficulty(
                context,
                Function.allStatementGenerators,
                difficulty
            );
        }
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };

        readonly description = (): string => {
            const argumentsString =
                this.functionArguments.length === 0
                    ? ''
                    : ` and with argument${
                          this.functionArguments.length === 1 ? '' : 's'
                      } ${this.functionArguments
                          .map(arg => arg.description())
                          .join(', ')}`;
            return `a function with name '${
                this.functionName.name
            }'${argumentsString} that ${this.statements
                .map(s => s.description())
                .join(', ')}`;
        };
        readonly code = (): string => {
            return `function ${this.functionName.name} (${this.functionArguments
                .map(arg => arg.code())
                .join(', ')})\n${this.statements
                .map(s => s.code())
                .join('')}\n`;
        };
        readonly assignToVariable = (context: ILanguageContext): boolean => {
            throw new Error('Implement');
        };
        readonly relatedVariableName = (
            context: ILanguageContext
        ): ILanguageVariable | null => {
            throw new Error('Implement');
        };
    }

    export const functionGenerator = createGenerator(
        Function,
        new Difficulty(1, 10),
        null
    );
    ProblemNamespace.Problem.register(functionGenerator);
}
