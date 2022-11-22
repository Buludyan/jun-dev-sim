import {GameStateNamespace} from './gameState';
import {InterfacesNamespace} from './language/interfaces';
import {randomProblem as _randomProblem} from './language/api';
import GameState = GameStateNamespace.GameState;
import LanguagePieceDescription = InterfacesNamespace.LanguagePieceDescription;

export namespace TypesNamespace {
  export type ProblemInformation = {
    code: string;
    currentDifficulty: number;
    description: string;
    usedPiecesDescriptions: LanguagePieceDescription[];
  };
  export type GameTheme = {
    currentThemeName: string;
  };
}
