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
