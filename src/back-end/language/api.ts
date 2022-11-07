import {Problem} from './problem';
import {registrateAllComponents} from './registrator';

let initialized = false;
export const initLanguage = () => {
    registrateAllComponents();
    initialized = true;
};

export const randomProblem = (difficulty: number) => {
    if (!initialized) {
        throw new Error(`Initialize language before use (call initLanguage)`);
    }
    return new Problem(difficulty);
};
