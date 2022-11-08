import {Difficulty} from './difficulty';

export interface IProblemPiece {
    readonly description: () => string;
    readonly code: () => string;
    readonly relatedVariableName: () => string | null;
    // TODO: add links
    // TODO: add unlocks
}

export interface PieceGenerator {
    readonly generate: (difficulty: number) => IProblemPiece;
    readonly difficulty: () => Difficulty;
}

export interface IProblem {}
