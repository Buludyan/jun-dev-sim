import {randomIntFromInterval} from '../utils';
import {Difficulty, IProblemPiece, PieceGenerator} from './interfaces';
import {Problem} from './program';

class RequestToDb implements IProblemPiece {
    readonly description = (): string => {
        return `db`;
    };
    readonly code = (): string => {
        return `db`;
    };
}
export const requestToDbGenerator: PieceGenerator = {
    difficulty: (): Difficulty => {
        return new Difficulty(0, 0);
    },
    generate: (difficulty: number): IProblemPiece => {
        return new RequestToDb();
    },
};

class RequestToOs implements IProblemPiece {
    readonly description = (): string => {
        return `os`;
    };
    readonly code = (): string => {
        return `os`;
    };
}
export const requestToOsGenerator: PieceGenerator = {
    difficulty: (): Difficulty => {
        return new Difficulty(0, 0);
    },
    generate: (difficulty: number): IProblemPiece => {
        return new RequestToOs();
    },
};

class RequestToFs implements IProblemPiece {
    readonly description = (): string => {
        return `fs`;
    };
    readonly code = (): string => {
        return `fs`;
    };
}
export const requestToFsGenerator: PieceGenerator = {
    difficulty: (): Difficulty => {
        return new Difficulty(0, 0);
    },
    generate: (difficulty: number): IProblemPiece => {
        return new RequestToFs();
    },
};

class RequestToWeb implements IProblemPiece {
    readonly description = (): string => {
        return `web`;
    };
    readonly code = (): string => {
        return `web`;
    };
}
export const requestToWebGenerator: PieceGenerator = {
    difficulty: (): Difficulty => {
        return new Difficulty(0, 0);
    },
    generate: (difficulty: number): IProblemPiece => {
        return new RequestToWeb();
    },
};

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
        return `request to ${this.requestTo.description()}\n`;
    };
    readonly code = (): string => {
        return `request to ${this.requestTo.code()}\n`;
    };
}

export const requestGenerator: PieceGenerator = {
    difficulty: (): Difficulty => {
        return new Difficulty(1, 1);
    },
    generate: (difficulty: number): IProblemPiece => {
        return new Request(difficulty);
    },
};
