import {randomIntFromInterval} from '../utils';
import {IProblemPiece, PieceGenerator} from './interfaces';
import {MRegistrate} from './registrator';
import {generateStatementsTillDifficulty} from './utils';

export class Problem extends MRegistrate implements IProblemPiece {
    private readonly statements: IProblemPiece[] = [];
    constructor(difficulty: number) {
        super();
        this.statements = generateStatementsTillDifficulty(
            MRegistrate.allStatementGenerators,
            difficulty
        );
    }

    readonly description = (): string => {
        return `${this.statements
            .map(s => `Write ${s.description()}`)
            .join('\n')}`;
    };
    readonly code = (): string => {
        return `${this.statements.map(s => s.code()).join('')}\n`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}
