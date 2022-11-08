import {IPieceGenerator} from './interfaces';

export class MRegistrate {
    protected static readonly allStatementGenerators: IPieceGenerator[] = [];
    public static readonly register = (statement: IPieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };
    constructor() {}
}
