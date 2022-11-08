import {randomIntFromInterval} from '../utils';
import {ILanguageContext, ILanguagePiece, IPieceGenerator} from './interfaces';
import {MRegistrate} from './registerMixin';
import {generateStatementsTillDifficulty} from './utils';

export class Problem extends MRegistrate implements ILanguagePiece {
    private readonly statements: ILanguagePiece[] = [];
    constructor(context: ILanguageContext, difficulty: number) {
        super();
        this.statements = generateStatementsTillDifficulty(
            context,
            MRegistrate.allStatementGenerators,
            difficulty
        );
    }

    readonly description = (context: ILanguageContext): string => {
        return `${this.statements
            .map(s => `Write ${s.description(context)}`)
            .join('\n')}`;
    };
    readonly code = (context: ILanguageContext): string => {
        return `${this.statements.map(s => s.code(context)).join('')}\n`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        throw new Error(`implement`);
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        return null;
    };
}
