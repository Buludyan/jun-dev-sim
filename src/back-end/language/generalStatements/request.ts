import {randomIntFromInterval} from '../../utils';
import {DifficultyNamespace} from '../difficulty';
import {InterfacesNamespace} from '../interfaces';

import {FunctionNamespace} from '../function/function';
import {UtilsNamespace} from '../utils';
import {LanguageVariableNamespace} from '../languageVariable';
import {AssignableNamespace} from '../assignable';

import Assignable = AssignableNamespace.Assignable;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;
import LanguageVariable = LanguageVariableNamespace.LanguageVariable;
import Difficulty = DifficultyNamespace.Difficulty;
import createGenerator = UtilsNamespace.createGenerator;
import Function = FunctionNamespace.Function;

export namespace RequestNamespace {
    class RequestToDb implements ILanguagePiece {
        private readonly guard: 'RequestToDb' = 'RequestToDb';
        constructor(context: ILanguageContext, private difficulty: number) {}
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };
        readonly description = (): string => {
            return `db`;
        };
        readonly code = (): string => {
            return `db`;
        };
    }

    export const requestToDbGenerator = createGenerator(RequestToDb, new Difficulty(0, 0), null);

    class RequestToOs implements ILanguagePiece {
        private readonly guard: 'RequestToOs' = 'RequestToOs';
        constructor(context: ILanguageContext, private difficulty: number) {}
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };
        readonly description = (): string => {
            return `os`;
        };
        readonly code = (): string => {
            return `os`;
        };
    }
    export const requestToOsGenerator = createGenerator(RequestToOs, new Difficulty(0, 0), null);

    class RequestToFs implements ILanguagePiece {
        private readonly guard: 'RequestToFs' = 'RequestToFs';
        constructor(context: ILanguageContext, private difficulty: number) {}
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };
        readonly description = (): string => {
            return `fs`;
        };
        readonly code = (): string => {
            return `fs`;
        };
    }
    export const requestToFsGenerator = createGenerator(RequestToFs, new Difficulty(0, 0), null);

    class RequestToWeb implements ILanguagePiece {
        private readonly guard: 'RequestToWeb' = 'RequestToWeb';
        constructor(context: ILanguageContext, private difficulty: number) {}
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };
        readonly description = (): string => {
            return `web`;
        };
        readonly code = (): string => {
            return `web`;
        };
    }
    export const requestToWebGenerator = createGenerator(RequestToWeb, new Difficulty(0, 0), null);

    export class Request extends Assignable implements ILanguagePiece {
        private readonly guard: 'Request' = 'Request';

        protected static readonly allStatementGenerators: IPieceGenerator[] = [];
        public static readonly register = (statement: IPieceGenerator) => {
            this.allStatementGenerators.push(statement);
        };

        private readonly requestTo: ILanguagePiece;
        constructor(context: ILanguageContext, private difficulty: number) {
            super();
            const index = randomIntFromInterval(0, Request.allStatementGenerators.length - 1);
            this.requestTo = Request.allStatementGenerators[index].generate(context, difficulty);
        }
        readonly currentDifficulty = (): number => {
            return this.difficulty;
        };

        readonly description = (): string => {
            return `makes request to ${this.requestTo.description()}${this.assignDescription()}`;
        };
        readonly code = (): string => {
            return `${this.assignCode()}request to ${this.requestTo.code()}\n`;
        };
    }

    export const requestGenerator = createGenerator(Request, new Difficulty(1, 1), null);

    Request.register(requestToDbGenerator);
    Request.register(requestToFsGenerator);
    Request.register(requestToOsGenerator);
    Request.register(requestToWebGenerator);
    Function.register(requestGenerator);
}
