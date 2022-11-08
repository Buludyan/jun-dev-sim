import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {
    ILanguageContext,
    ILanguagePiece,
    ILanguagePieceName,
    IPieceGenerator,
} from '../interfaces';
import {createGenerator, generateStatementsTillDifficulty} from '../utils';
import {FunctionArgument} from './functionArgument';

export class Function implements ILanguagePiece {
    private readonly guard: 'Function' = 'Function';
    // TODO: move from here
    protected static readonly allStatementGenerators: IPieceGenerator[] = [];
    public static readonly register = (statement: IPieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };

    private readonly functionName: ILanguagePieceName;
    private readonly functionArguments: FunctionArgument[];
    private readonly statements: ILanguagePiece[] = [];
    constructor(context: ILanguageContext, difficulty: number) {
        this.functionName = context.generateValidPieceName();
        this.statements = generateStatementsTillDifficulty(
            context,
            Function.allStatementGenerators,
            difficulty
        );
        this.functionArguments = [
            context.createPiece(FunctionArgument, difficulty),
            context.createPiece(FunctionArgument, difficulty),
        ];
    }

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
            .join(', ')})\n${this.statements.map(s => s.code()).join('')}\n`;
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
