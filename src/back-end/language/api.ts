import {ILanguageContext} from './interfaces';
import {LanguageContext} from './languageContext';
import {Problem} from './problem';
import {registrateAllComponents} from './registrator';

let initialized = false;
export const initLanguage = () => {
    registrateAllComponents();
    initialized = true;
};

export const _randomProblem = (
    context: ILanguageContext,
    difficulty: number
) => {
    if (!initialized) {
        throw new Error(`Initialize language before use (call initLanguage)`);
    }
    return context.createPiece(Problem, context, difficulty);
};

export const randomProblem = (difficulty: number) => {
    const context: LanguageContext = new LanguageContext();
    return _randomProblem(context, difficulty);
};
