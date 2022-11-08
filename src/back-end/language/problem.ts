import {IGuard, randomIntFromInterval} from '../utils';
import {
    ILanguageContext,
    ILanguagePiece,
    ILanguageVariable,
    IPieceGenerator,
} from './interfaces';
import {LanguageContext} from './languageContext';
import {
    generateOneStatementsOfDifficulty,
    generateStatementsTillDifficulty,
} from './utils';

export class Problem implements ILanguagePiece {
    private readonly guard: 'Problem' = 'Problem';
    protected static readonly allStatementGenerators: IPieceGenerator[] = [];
    public static readonly register = (statement: IPieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };

    private readonly statements: ILanguagePiece[] = [];
    constructor(context: ILanguageContext, difficulty: number) {
        this.statements = generateOneStatementsOfDifficulty(
            context,
            Problem.allStatementGenerators,
            difficulty
        );
    }

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
