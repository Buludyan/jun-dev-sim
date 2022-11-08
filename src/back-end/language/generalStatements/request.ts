import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {ILanguageContext, ILanguagePiece, IPieceGenerator} from '../interfaces';
import {Problem} from '../problem';
import {createGenerator} from '../utils';

class RequestToDb implements ILanguagePiece {
    private readonly guard: 'RequestToDb' = 'RequestToDb';
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (): string => {
        return `db`;
    };
    readonly code = (): string => {
        return `db`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        return false;
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        return null;
    };
}

export const requestToDbGenerator = createGenerator(
    RequestToDb,
    new Difficulty(0, 0)
);

class RequestToOs implements ILanguagePiece {
    private readonly guard: 'RequestToOs' = 'RequestToOs';
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (): string => {
        return `os`;
    };
    readonly code = (): string => {
        return `os`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        return false;
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        return null;
    };
}
export const requestToOsGenerator = createGenerator(
    RequestToOs,
    new Difficulty(0, 0)
);

class RequestToFs implements ILanguagePiece {
    private readonly guard: 'RequestToFs' = 'RequestToFs';
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (): string => {
        return `fs`;
    };
    readonly code = (): string => {
        return `fs`;
    };

    readonly assignToVariable = (context: ILanguageContext): boolean => {
        return false;
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        return null;
    };
}
export const requestToFsGenerator = createGenerator(
    RequestToFs,
    new Difficulty(0, 0)
);

class RequestToWeb implements ILanguagePiece {
    private readonly guard: 'RequestToWeb' = 'RequestToWeb';
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (): string => {
        return `web`;
    };
    readonly code = (): string => {
        return `web`;
    };
    readonly assignToVariable = (context: ILanguageContext): boolean => {
        return false;
    };
    readonly relatedVariableName = (
        context: ILanguageContext
    ): string | null => {
        return null;
    };
}
export const requestToWebGenerator = createGenerator(
    RequestToWeb,
    new Difficulty(0, 0)
);

export class Request implements ILanguagePiece {
    private readonly guard: 'Request' = 'Request';

    protected static readonly allStatementGenerators: IPieceGenerator[] = [];
    public static readonly register = (statement: IPieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };

    private readonly requestTo: ILanguagePiece;
    constructor(context: ILanguageContext, difficulty: number) {
        const index = randomIntFromInterval(
            0,
            Request.allStatementGenerators.length - 1
        );
        this.requestTo = Request.allStatementGenerators[index].generate(
            context,
            difficulty
        );
    }

    readonly description = (): string => {
        return `makes request to ${this.requestTo.description()}`;
    };
    readonly code = (): string => {
        return `request to ${this.requestTo.code()}\n`;
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

export const requestGenerator = createGenerator(Request, new Difficulty(1, 1));
