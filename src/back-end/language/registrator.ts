import {Function, functionGenerator} from './function/function';
import {Problem} from './problem';
import {
    requestGenerator,
    Request,
    requestToDbGenerator,
    requestToFsGenerator,
    requestToOsGenerator,
    requestToWebGenerator,
} from './generalStatements/request';
import {PieceGenerator} from './interfaces';

export class MRegistrate {
    protected static readonly allStatementGenerators: PieceGenerator[] = [];
    public static readonly register = (statement: PieceGenerator) => {
        this.allStatementGenerators.push(statement);
    };
}

export const registrateAllComponents = () => {
    /************************ REQUEST **************************/
    Request.register(requestToDbGenerator);
    Request.register(requestToFsGenerator);
    Request.register(requestToOsGenerator);
    Request.register(requestToWebGenerator);

    /************************ FUNCTION **************************/
    Function.register(requestGenerator);

    /************************ PROBLEM **************************/
    Problem.register(functionGenerator);
};
