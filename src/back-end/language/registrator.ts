import {Problem} from './program';
import {
    requestGenerator,
    Request,
    requestToDbGenerator,
    requestToFsGenerator,
    requestToOsGenerator,
    requestToWebGenerator,
} from './request';

export const registrateAllComponents = () => {
    /************************ REQUEST **************************/
    Request.register(requestToDbGenerator);
    Request.register(requestToFsGenerator);
    Request.register(requestToOsGenerator);
    Request.register(requestToWebGenerator);

    /************************ PROBLEM **************************/
    Problem.register(requestGenerator);
};
