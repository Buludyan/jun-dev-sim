import {randomIntFromInterval} from '../utils';
import {Difficulty} from './difficulty';
import {ILanguageContext, ILanguagePiece, IPieceGenerator} from './interfaces';

export const generateStatementsTillDifficulty = (
    context: ILanguageContext,
    allStatementGenerators: IPieceGenerator[],
    difficulty: number
): ILanguagePiece[] => {
    const statements: ILanguagePiece[] = [];
    const allLength = allStatementGenerators.length;
    let numberOfFailedRetries = 100;
    while (difficulty > 0 && numberOfFailedRetries !== 0) {
        const index = randomIntFromInterval(0, allLength - 1);
        const statementGenerator = allStatementGenerators[index];
        if (statementGenerator.difficulty(context).canBeLess(difficulty)) {
            const difficultyOfThisStatement = statementGenerator
                .difficulty(context)
                .randomDifficultyThatFits(difficulty);
            statements.push(
                statementGenerator.generate(context, difficultyOfThisStatement)
            );
            difficulty -= difficultyOfThisStatement;
        } else {
            --numberOfFailedRetries;
            console.log(difficulty, index, allStatementGenerators);
        }
    }
    if (numberOfFailedRetries === 0) {
        throw new Error(`Couldn't generate problem :(`);
    }
    return statements;
};

export const createGenerator = <ProblemPiece extends ILanguagePiece>(
    piece: {new (context: ILanguageContext, difficulty: number): ProblemPiece},
    difficulty: Difficulty
): IPieceGenerator => {
    return {
        difficulty: (context: ILanguageContext): Difficulty => {
            return difficulty;
        },
        generate: (
            context: ILanguageContext,
            difficulty: number
        ): ILanguagePiece => {
            return context.createPiece(piece, difficulty);
        },
    };
};
