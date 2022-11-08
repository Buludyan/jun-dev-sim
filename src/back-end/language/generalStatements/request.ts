import {randomIntFromInterval} from '../../utils';
import {Difficulty} from '../difficulty';
import {IProblemPiece, PieceGenerator} from '../interfaces';
import {Problem} from '../problem';
import {createGenerator} from '../utils';

class RequestToDb implements IProblemPiece {
    readonly description = (): string => {
        return `db`;
    };
    readonly code = (): string => {
        return `db`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}

export const requestToDbGenerator = createGenerator(
    RequestToDb,
    new Difficulty(0, 0)
);

class RequestToOs implements IProblemPiece {
    readonly description = (): string => {
        return `os`;
    };
    readonly code = (): string => {
        return `os`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}
export const requestToOsGenerator = createGenerator(
    RequestToOs,
    new Difficulty(0, 0)
);

class RequestToFs implements IProblemPiece {
    readonly description = (): string => {
        return `fs`;
    };
    readonly code = (): string => {
        return `fs`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}
export const requestToFsGenerator = createGenerator(
    RequestToFs,
    new Difficulty(0, 0)
);

class RequestToWeb implements IProblemPiece {
    readonly description = (): string => {
        return `web`;
    };
    readonly code = (): string => {
        return `web`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}
export const requestToWebGenerator = createGenerator(
    RequestToWeb,
    new Difficulty(0, 0)
);

export class Request implements IProblemPiece {
    private static readonly allRequestsTo: PieceGenerator[] = [];
    static readonly register = (requestTo: PieceGenerator) => {
        this.allRequestsTo.push(requestTo);
    };

    private readonly requestTo: IProblemPiece;
    constructor(difficulty: number) {
        const index = randomIntFromInterval(
            0,
            Request.allRequestsTo.length - 1
        );
        this.requestTo = Request.allRequestsTo[index].generate(difficulty);
    }

    readonly description = (): string => {
        return `makes request to ${this.requestTo.description()}`;
    };
    readonly code = (): string => {
        return `request to ${this.requestTo.code()}\n`;
    };
    readonly relatedVariableName = (): string | null => {
        return null;
    };
}

export const requestGenerator = createGenerator(Request, new Difficulty(1, 1));
