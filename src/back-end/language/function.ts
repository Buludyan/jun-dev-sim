import {randomIntFromInterval} from '../utils';
import {Difficulty, IProblemPiece, PieceGenerator} from './interfaces';

export class Function implements IProblemPiece {
    static readonly allStatementGenerators: PieceGenerator[] = [];
    static readonly register = (statement: PieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };

    private readonly statements: IProblemPiece[] = [];
    constructor(difficulty: number) {
        const allLength = Function.allStatementGenerators.length;
        console.log(`difficulty=${difficulty}`);
        let numberOfRetries = 100;
        while (difficulty > 0 && numberOfRetries !== 0) {
            --numberOfRetries;
            const index = randomIntFromInterval(0, allLength - 1);
            const statementGenerator = Function.allStatementGenerators[index];
            console.log(statementGenerator);
            if (statementGenerator.difficulty().canBeLess(difficulty)) {
                const difficultyOfThisStatement = statementGenerator
                    .difficulty()
                    .randomDifficultyThatFits(difficulty);
                console.log(
                    `difficultyOfThisStatement=${difficultyOfThisStatement}`
                );
                this.statements.push(
                    statementGenerator.generate(difficultyOfThisStatement)
                );
                difficulty -= difficultyOfThisStatement;
                console.log(`difficulty=${difficulty}`);
            }
        }
        if (numberOfRetries === 0) {
            console.log(`Couldn't generate function :(`);
        }
    }

    readonly description = (): string => {
        return `a function that ${this.statements
            .map(s => s.description())
            .join(', ')}`;
    };
    readonly code = (): string => {
        return `${this.statements.map(s => s.code()).join('')}\n`;
    };
}

export const functionGenerator: PieceGenerator = {
    difficulty: (): Difficulty => {
        return new Difficulty(1, 10);
    },
    generate: (difficulty: number): IProblemPiece => {
        return new Function(difficulty);
    },
};
