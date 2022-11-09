import {randomIntFromInterval} from '../utils';

export namespace DifficultyNamespace {
    export class Difficulty {
        private readonly minDifficulty: number;
        private readonly maxDifficulty: number;
        constructor(minDifficulty: number, maxDifficulty: number) {
            this.minDifficulty = minDifficulty;
            this.maxDifficulty = maxDifficulty;
        }
        readonly contain = (difficulty: number): boolean => {
            return this.minDifficulty <= difficulty && difficulty <= this.maxDifficulty;
        };

        readonly canBeLess = (difficulty: number): boolean => {
            return this.minDifficulty <= difficulty;
        };

        readonly randomDifficultyThatFits = (difficulty: number): number => {
            return randomIntFromInterval(this.minDifficulty, Math.min(difficulty, this.maxDifficulty));
        };
    }
}
