import {randomIntFromInterval} from '../utils';
import {
    ILanguageContext,
    ILanguagePiece,
    ILanguagePieceName,
    PrimitiveTypesType,
} from './interfaces';
import {primitiveTypes} from './primitiveTypes';

export class LanguageContext implements ILanguageContext {
    nextPieceNameIndex: number = 0;
    readonly pieceNames: ILanguagePieceName[] = [];
    constructor() {
        for (let i = 0; i < 10000; ++i) {
            this.pieceNames.push({
                name: `a${i}`,
            });
        }
    }

    private readonly allLanguagePieces: ILanguagePiece[] = [];

    readonly createPiece = <ProblemPiece extends ILanguagePiece>(
        piece: {
            new (context: ILanguageContext, difficulty: number): ProblemPiece;
        },
        difficulty: number
    ): ProblemPiece => {
        const problemPiece: ProblemPiece = new piece(this, difficulty);
        this.allLanguagePieces.unshift(problemPiece);
        return problemPiece;
    };

    readonly getAllPieces = () => this.allLanguagePieces;

    readonly generateValidPieceName = (): ILanguagePieceName => {
        return this.pieceNames[this.nextPieceNameIndex++];
    };

    readonly generateValidPrimitiveType = (): PrimitiveTypesType => {
        return primitiveTypes[
            randomIntFromInterval(0, primitiveTypes.length - 1)
        ];
    };
}
