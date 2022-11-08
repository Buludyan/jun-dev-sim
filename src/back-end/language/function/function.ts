import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {ILanguageContext, ILanguagePiece, IPieceGenerator} from '../interfaces';
import {createGenerator, generateStatementsTillDifficulty} from '../utils';

export class Function implements ILanguagePiece {
    private readonly guard: 'Function' = 'Function';
    // TODO: move from here
    protected static readonly allStatementGenerators: IPieceGenerator[] = [];
    public static readonly register = (statement: IPieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };

    private readonly statements: ILanguagePiece[] = [];
    constructor(context: ILanguageContext, difficulty: number) {
        this.statements = generateStatementsTillDifficulty(
            context,
            Function.allStatementGenerators,
            difficulty
        );
    }

    readonly description = (): string => {
        return `a function that ${this.statements
            .map(s => s.description())
            .join(', ')}`;
    };
    readonly code = (): string => {
        return `${this.statements.map(s => s.code()).join('')}\n`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        throw new Error('Implement');
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        throw new Error('Implement');
    };
}

export const functionGenerator = createGenerator(
    Function,
    new Difficulty(1, 10)
);
