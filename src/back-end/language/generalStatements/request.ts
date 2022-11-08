import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {ILanguageContext, ILanguagePiece, IPieceGenerator} from '../interfaces';
import {Problem} from '../problem';
import {createGenerator} from '../utils';

class RequestToDb implements ILanguagePiece {
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (context: ILanguageContext): string => {
        return `db`;
    };
    readonly code = (context: ILanguageContext): string => {
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
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (context: ILanguageContext): string => {
        return `os`;
    };
    readonly code = (context: ILanguageContext): string => {
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
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (context: ILanguageContext): string => {
        return `fs`;
    };
    readonly code = (context: ILanguageContext): string => {
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
    constructor(context: ILanguageContext, difficulty: number) {}
    readonly description = (context: ILanguageContext): string => {
        return `web`;
    };
    readonly code = (context: ILanguageContext): string => {
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
    private static readonly allRequestsTo: IPieceGenerator[] = [];
    static readonly register = (requestTo: IPieceGenerator) => {
        this.allRequestsTo.push(requestTo);
    };

    private readonly requestTo: ILanguagePiece;
    constructor(context: ILanguageContext, difficulty: number) {
        const index = randomIntFromInterval(
            0,
            Request.allRequestsTo.length - 1
        );
        this.requestTo = Request.allRequestsTo[index].generate(
            context,
            difficulty
        );
    }

    readonly description = (context: ILanguageContext): string => {
        return `makes request to ${this.requestTo.description(context)}`;
    };
    readonly code = (context: ILanguageContext): string => {
        return `request to ${this.requestTo.code(context)}\n`;
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
