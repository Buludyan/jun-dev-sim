import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {ILanguageContext, ILanguagePiece, IPieceGenerator} from '../interfaces';
import {MRegistrate} from '../registerMixin';
import {createGenerator, generateStatementsTillDifficulty} from '../utils';

export class Function extends MRegistrate implements ILanguagePiece {
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
        return `a function that ${this.statements
            .map(s => s.description(context))
            .join(', ')}`;
    };
    readonly code = (context: ILanguageContext): string => {
        return `${this.statements.map(s => s.code(context)).join('')}\n`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        throw new Error('Implement');
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        throw new Error('Implement');
    };
}

export const functionGenerator = createGenerator(
    Function,
    new Difficulty(1, 10)
);
