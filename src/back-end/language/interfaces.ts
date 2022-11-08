import {Difficulty} from './difficulty';

export interface ILanguageContext {
    readonly createPiece: <ProblemPiece extends ILanguagePiece>(
        piece: {
            new (context: ILanguageContext, difficulty: number): ProblemPiece;
        },
        context: ILanguageContext,
        difficulty: number
    ) => ProblemPiece;
}

export interface ILanguagePiece {
    readonly description: (context: ILanguageContext) => string;
    readonly code: (context: ILanguageContext) => string;
    readonly assignToVariable: (context: ILanguageContext) => boolean;
    readonly relatedVariableName: (context: ILanguageContext) => string | null;
    // TODO: add links
    // TODO: add unlocks
}

export interface IPieceGenerator {
    readonly generate: (
        context: ILanguageContext,
        difficulty: number
    ) => ILanguagePiece;
    readonly difficulty: (context: ILanguageContext) => Difficulty;
}

export interface IProblem {}
