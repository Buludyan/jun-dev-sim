import {randomIntFromInterval} from '../utils';
import {InterfacesNamespace} from './interfaces';
import {PrimitiveTypesNamespace} from './primitiveTypes';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguagePieceName = InterfacesNamespace.ILanguagePieceName;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;
import primitiveTypes = PrimitiveTypesNamespace.primitiveTypes;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;

export namespace LanguageContextNamespace {
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
                new (
                    context: ILanguageContext,
                    difficulty: number
                ): ProblemPiece;
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

        readonly getValidUsedVariable = (): ILanguageVariable | null => {
            let randomIndexOfAllPieces = randomIntFromInterval(
                0,
                this.allLanguagePieces.length - 1
            );
            if (this.allLanguagePieces.length === 0) {
                return null;
            }
            console.log(`randomIndexOfAllPieces = ${randomIndexOfAllPieces}, `);
            let numberOfRetries = 100;
            while (
                this.allLanguagePieces[
                    randomIndexOfAllPieces
                ].relatedVariableName(this) === null &&
                numberOfRetries !== 0
            ) {
                console.log(
                    `randomIndexOfAllPieces = ${randomIndexOfAllPieces}`
                );

                if (
                    this.allLanguagePieces[
                        randomIndexOfAllPieces
                    ].assignToVariable(this)
                ) {
                    break;
                }
                numberOfRetries--;
                randomIndexOfAllPieces = randomIntFromInterval(
                    0,
                    this.allLanguagePieces.length - 1
                );
            }
            const relatedVariableName =
                this.allLanguagePieces[
                    randomIndexOfAllPieces
                ].relatedVariableName(this);
            return relatedVariableName;
        };

        readonly validUsedVariableExists = (): boolean => {
            return this.getValidUsedVariable() !== null;
        };
    }
}
