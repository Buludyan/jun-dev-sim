import {IGuard, randomIntFromInterval} from '../../utils';
import {DifficultyNamespace} from '../difficulty';
import {InterfacesNamespace} from '../interfaces';

import {ProblemNamespace} from '../problem';
import {UtilsNamespace} from '../utils';
import {LanguageVariableNamespace} from '../languageVariable';
import {FunctionNamespace} from '../function/function';
import {FunctionArgumentNamespace} from '../function/functionArgument';
import {AssignableNamespace} from '../assignable';

import Assignable = AssignableNamespace.Assignable;
import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import LanguagePieceName = InterfacesNamespace.LanguagePieceName;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import IPieceGenerator = InterfacesNamespace.IPieceGenerator;
import LanguageVariable = LanguageVariableNamespace.LanguageVariable;
import Difficulty = DifficultyNamespace.Difficulty;
import createGenerator = UtilsNamespace.createGenerator;
import Function = FunctionNamespace.Function;
import FunctionArgument = FunctionArgumentNamespace.FunctionArgument;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

export namespace CallNamespace {
  const callTypeGuard: 'callTypeGuard' = 'callTypeGuard';
  export class Call extends Assignable implements ILanguagePiece, IGuard<typeof callTypeGuard> {
    readonly _guard: typeof callTypeGuard = callTypeGuard;
    private readonly guard: 'Call' = 'Call';

    private readonly callVariable: LanguagePieceName;
    private readonly functionArguments: ILanguageVariable[];

    constructor(context: ILanguageContext, private difficulty: number) {
      super();
      const variable = context.generateValidPieceName();
      if (variable === null) {
        throw new Error(`Cannot create call statement`);
      }
      this.callVariable = variable;
      this.functionArguments = [
        // TODO: make this variadic
        context.getValidUsedVariable()!,
        context.getValidUsedVariable()!,
      ];
    }
    readonly currentDifficulty = (): number => {
      return this.difficulty;
    };

    readonly description = (): string => {
      const argumentsString =
        this.functionArguments.length === 0
          ? 'without arguments'
          : `with argument${this.functionArguments.length === 1 ? '' : 's'} ${this.functionArguments
              .map(arg => `'${arg.getName().name}'`)
              .join(', ')}`;

      return `calls function '${this.callVariable.name}' ${argumentsString}${this.assignDescription()}`;
    };
    readonly code = (): string => {
      const argumentsString = this.functionArguments.map(arg => `${arg.getName().name}`).join(', ');
      return `${this.assignCode()}${this.callVariable.name}(${argumentsString})\n`;
    };
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: callTypeGuard,
          name: 'Call',
          description: '// TODO',
        },
      ];
    };
  }

  export const callGenerator = createGenerator(Call, new Difficulty(1, 1), (context: ILanguageContext): boolean => {
    return context.validUsedVariableExists();
  });

  Function.register(callGenerator);
}
