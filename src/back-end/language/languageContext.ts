import {ILanguageContext, ILanguagePiece} from './interfaces';

export class LanguageContext implements ILanguageContext {
    private readonly allLanguagePieces: ILanguagePiece[] = [];

    readonly createPiece = <ProblemPiece extends ILanguagePiece>(
        piece: {
            new (context: ILanguageContext, difficulty: number): ProblemPiece;
        },
        context: ILanguageContext,
        difficulty: number
    ): ProblemPiece => {
        const problemPiece: ProblemPiece = new piece(context, difficulty);
        console.log(`AAAAAAAAAAAAAAAA = ${JSON.stringify(problemPiece)}`);
        this.allLanguagePieces.unshift(problemPiece);
        return problemPiece;
    };

    readonly getAllPieces = () => this.allLanguagePieces;
}
