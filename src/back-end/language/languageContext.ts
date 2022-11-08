import {ILanguageContext, ILanguagePiece} from './interfaces';

export class LanguageContext implements ILanguageContext {
    readonly allLanguagePieces: ILanguagePiece[] = [];

    readonly createPiece = <ProblemPiece extends ILanguagePiece>(
        piece: {
            new (context: ILanguageContext, difficulty: number): ProblemPiece;
        },
        context: ILanguageContext,
        difficulty: number
    ): ProblemPiece => {
        const problemPiece: ProblemPiece = new piece(context, difficulty);
        this.allLanguagePieces.push(problemPiece);
        return problemPiece;
    };
}
