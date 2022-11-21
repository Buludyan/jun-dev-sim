import {IGameStateNamespace} from './interfaces/gameState';
import {GameStateNamespace} from './implementation/gameState';
import IGameState = IGameStateNamespace.IGameState;
import GameState = GameStateNamespace.GameState;

export const createGameState = (): IGameState => {
  return new GameState();
};
