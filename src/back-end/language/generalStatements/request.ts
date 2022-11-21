import {IGuard, randomIntFromInterval} from '../../utils';
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
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

export namespace RequestNamespace {
  const requestToDbTypeGuard = 'requestToDbTypeGuard';
  class RequestToDb implements ILanguagePiece, IGuard<typeof requestToDbTypeGuard> {
    readonly _guard: typeof requestToDbTypeGuard = requestToDbTypeGuard;
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
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: requestToDbTypeGuard,
          name: 'Request to db',
          description: '// TODO',
        },
      ];
    };
  }

  export const requestToDbGenerator = createGenerator(RequestToDb, new Difficulty(0, 0), null);

  const requestToOsTypeGuard = 'requestToOsTypeGuard';
  class RequestToOs implements ILanguagePiece, IGuard<typeof requestToOsTypeGuard> {
    readonly _guard: typeof requestToOsTypeGuard = requestToOsTypeGuard;
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
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: requestToOsTypeGuard,
          name: 'Request to os',
          description: '// TODO',
        },
      ];
    };
  }
  export const requestToOsGenerator = createGenerator(RequestToOs, new Difficulty(0, 0), null);

  const requestToFsTypeGuard = 'requestToFsTypeGuard';
  class RequestToFs implements ILanguagePiece, IGuard<typeof requestToFsTypeGuard> {
    readonly _guard: typeof requestToFsTypeGuard = requestToFsTypeGuard;
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
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: requestToFsTypeGuard,
          name: 'Request to fs',
          description: '// TODO',
        },
      ];
    };
  }
  export const requestToFsGenerator = createGenerator(RequestToFs, new Difficulty(0, 0), null);

  const requestToWebTypeGuard = 'requestToWebTypeGuard';
  class RequestToWeb implements ILanguagePiece, IGuard<typeof requestToWebTypeGuard> {
    readonly _guard: typeof requestToWebTypeGuard = requestToWebTypeGuard;
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
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: requestToWebTypeGuard,
          name: 'Request to web',
          description: '// TODO',
        },
      ];
    };
  }
  export const requestToWebGenerator = createGenerator(RequestToWeb, new Difficulty(0, 0), null);

  const requestTypeGuard = 'requestTypeGuard';
  export class Request extends Assignable implements ILanguagePiece, IGuard<typeof requestTypeGuard> {
    readonly _guard: typeof requestTypeGuard = requestTypeGuard;
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
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: requestTypeGuard,
          name: 'Request',
          description: '// TODO',
        },
        ...this.requestTo.usedPiecesDescriptions(),
      ];
    };
  }

  export const requestGenerator = createGenerator(Request, new Difficulty(1, 1), null);

  Request.register(requestToDbGenerator);
  Request.register(requestToFsGenerator);
  Request.register(requestToOsGenerator);
  Request.register(requestToWebGenerator);
  Function.register(requestGenerator);
}
