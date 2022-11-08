import {randomIntFromInterval} from '../utils';
import {Difficulty} from './difficulty';
import {IProblemPiece, PieceGenerator} from './interfaces';

export const generateStatementsTillDifficulty = (
    allStatementGenerators: PieceGenerator[],
    difficulty: number
): IProblemPiece[] => {
    const statements: IProblemPiece[] = [];
    const allLength = allStatementGenerators.length;
    let numberOfRetries = 100;
    while (difficulty > 0 && numberOfRetries !== 0) {
        --numberOfRetries;
        const index = randomIntFromInterval(0, allLength - 1);
        const statementGenerator = allStatementGenerators[index];
        console.log(statementGenerator);
        if (statementGenerator.difficulty().canBeLess(difficulty)) {
            const difficultyOfThisStatement = statementGenerator
                .difficulty()
                .randomDifficultyThatFits(difficulty);
            statements.push(
                statementGenerator.generate(difficultyOfThisStatement)
            );
            difficulty -= difficultyOfThisStatement;
        }
    }
    if (numberOfRetries === 0) {
        throw new Error(`Couldn't generate problem :(`);
    }
    return statements;
};

export const createGenerator = <ProblemPiece extends IProblemPiece>(
    piece: {new (difficulty: number): ProblemPiece},
    difficulty: Difficulty
): PieceGenerator => {
    return {
        difficulty: (): Difficulty => {
            return difficulty;
        },
        generate: (difficulty: number): IProblemPiece => {
            return new piece(difficulty);
        },
    };
};
