import {DifficultyNamespace} from './difficulty';
import {PrimitiveTypesNamespace} from './primitiveTypes';

import Difficulty = DifficultyNamespace.Difficulty;
import primitiveTypes = PrimitiveTypesNamespace.primitiveTypes;

export namespace InterfacesNamespace {
    export interface ILanguageContext {
        readonly createPiece: <ProblemPiece extends ILanguagePiece>(
            piece: {
                new (
                    context: ILanguageContext,
                    difficulty: number
                ): ProblemPiece;
            },
            difficulty: number
        ) => ProblemPiece;
        readonly generateValidPieceName: () => ILanguagePieceName;
        readonly generateValidPrimitiveType: () => PrimitiveTypesType;
        readonly getValidUsedVariable: () => ILanguageVariable | null;
        readonly validUsedVariableExists: () => boolean;
    }

    export interface ILanguagePieceName {
        readonly name: string;
    }

    export interface ILanguagePiece {
        readonly currentDifficulty: () => number;
        readonly description: () => string;
        readonly code: () => string;
        readonly assignToVariable: (context: ILanguageContext) => boolean;
        readonly relatedVariableName: (
            context: ILanguageContext
        ) => ILanguageVariable | null;
        // TODO: add links
        // TODO: add unlocks
    }

    export interface IPieceGenerator {
        readonly canGenerate: (
            context: ILanguageContext,
            difficulty: number
        ) => boolean;
        readonly canGenerateOnlyOne: (
            context: ILanguageContext,
            difficulty: number
        ) => boolean;
        readonly generate: (
            context: ILanguageContext,
            difficulty: number
        ) => ILanguagePiece;
        readonly generateWithRandomDifficulty: (
            context: ILanguageContext,
            difficulty: number
        ) => ILanguagePiece;
        // readonly difficulty: (context: ILanguageContext) => Difficulty;
    }

    export interface IProblem {}

    export type PrimitiveTypesType = typeof primitiveTypes[number];

    export interface ILanguageVariable {
        readonly description: () => string;
        readonly code: () => string;
        readonly getName: () => ILanguagePieceName;
        readonly getType: () => PrimitiveTypesType;
    }
}
