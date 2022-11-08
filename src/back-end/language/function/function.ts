import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {IProblemPiece, PieceGenerator} from '../interfaces';
import {MRegistrate} from '../registrator';
import {createGenerator, generateStatementsTillDifficulty} from '../utils';

export class Function extends MRegistrate implements IProblemPiece {
    private readonly statements: IProblemPiece[] = [];
    constructor(difficulty: number) {
        super();
        this.statements = generateStatementsTillDifficulty(
            MRegistrate.allStatementGenerators,
            difficulty
        );
    }

    readonly description = (): string => {
        return `a function that ${this.statements
            .map(s => s.description())
            .join(', ')}`;
    };
    readonly code = (): string => {
        return `${this.statements.map(s => s.code()).join('')}\n`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}

export const functionGenerator = createGenerator(
    Function,
    new Difficulty(1, 10)
);
