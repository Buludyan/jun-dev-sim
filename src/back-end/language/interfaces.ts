import {randomIntFromInterval} from '../utils';

export class Difficulty {
    readonly minDifficulty: number;
    readonly maxDifficulty: number;
    constructor(minDifficulty: number, maxDifficulty: number) {
        this.minDifficulty = minDifficulty;
        this.maxDifficulty = maxDifficulty;
    }
    readonly contain = (difficulty: number): boolean => {
        return (
            this.minDifficulty <= difficulty && difficulty <= this.maxDifficulty
        );
    };

    readonly canBeLess = (difficulty: number): boolean => {
        return this.minDifficulty <= difficulty;
    };

    readonly randomDifficultyThatFits = (difficulty: number): number => {
        return randomIntFromInterval(
            this.minDifficulty,
            Math.min(difficulty, this.maxDifficulty)
        );
    };
}

export interface IProblemPiece {
    readonly description: () => string;
    readonly code: () => string;
}

export interface PieceGenerator {
    readonly generate: (difficulty: number) => IProblemPiece;
    readonly difficulty: () => Difficulty;
}

export interface IProblem {}
