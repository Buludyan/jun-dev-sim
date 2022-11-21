import {IGuard} from '../../utils';
import {InterfacesNamespace} from '../interfaces';
import {LanguageVariableNamespace} from '../languageVariable';

import ILanguageContext = InterfacesNamespace.ILanguageContext;
import ILanguagePiece = InterfacesNamespace.ILanguagePiece;
import ILanguageVariable = InterfacesNamespace.ILanguageVariable;
import LanguageVariable = LanguageVariableNamespace.LanguageVariable;
import ILanguagePieceName = InterfacesNamespace.LanguagePieceName;
import PrimitiveTypesType = InterfacesNamespace.PrimitiveTypesType;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

export namespace FunctionArgumentNamespace {
  const functionArgumentTypeGuard: 'functionArgumentTypeGuard' = 'functionArgumentTypeGuard';
  export class FunctionArgument implements ILanguagePiece, IGuard<typeof functionArgumentTypeGuard> {
    readonly _guard: typeof functionArgumentTypeGuard = functionArgumentTypeGuard;
    private readonly arg: ILanguageVariable;
    constructor(context: ILanguageContext, private difficulty: number) {
      this.arg = new LanguageVariable(context);
    }
    readonly currentDifficulty = (): number => {
      return this.difficulty;
    };
    readonly description = (): string => {
      return `'${this.arg.getName().name}' of type ${this.arg.getType()}`;
    };
    readonly code = (): string => {
      return `${this.arg.getName().name}:${this.arg.getType()}`;
    };
    readonly usedPiecesDescriptions = (): LanguagePieceDescription[] => {
      return [
        {
          key: functionArgumentTypeGuard,
          name: 'Function Argument',
          description: '// TODO',
        },
      ];
    };
  }
}
