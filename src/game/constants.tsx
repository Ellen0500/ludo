// Tipos
export type Player = 'P1' | 'P2' | 'P3' | 'P4';

// Lista de jogadores
export const PLAYERS: Player[] = ['P1', 'P2', 'P3', 'P4'];

// Estados possíveis do jogo
export const STATE = {
  DICE_NOT_ROLLED: 'DICE_NOT_ROLLED',
  DICE_ROLLED: 'DICE_ROLLED',
};

// Posições iniciais (casas da base de cada jogador)
export const BASE_POSITIONS: Record<Player, number[]> = {
  P1: [32, 33, 47, 48],
  P2: [41, 42, 56, 57],
  P3: [167, 168, 182, 183],
  P4: [176, 177, 191, 192],
};

// Posição de entrada no tabuleiro
export const START_POSITIONS: Record<Player, number> = {
  P1: 91,
  P2: 23,
  P3: 201,
  P4: 133,
};

// Posição final (meta)
export const HOME_POSITIONS: Record<Player, number> = {
  P1: 111,
  P2: 97,
  P3: 127,
  P4: 113,
};

// Posições seguras
export const SAFE_POSITIONS: number[] = [36, 102, 188, 122];

// Ponto de virada para reta final
export const TURNING_POINTS: Record<Player, number> = {
  P1: 105,
  P2: 7,
  P3: 217,
  P4: 119,
};

// Casas da reta final
export const HOME_ENTRANCE: Record<Player, number[]> = {
  P1: [106, 107, 108, 109, 110, 111],
  P2: [22, 37, 52, 67, 82, 97],
  P3: [202, 187, 172, 157, 142, 127],
  P4: [118, 117, 116, 115, 114, 113],
};

// Caminho principal
export const MAIN_PATH: Record<Player, number[]> = {
  P1: [91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 132, 133, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 106, 107, 108, 109, 110, 111],
  P2: [23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 132, 133, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 22, 37, 52, 67, 82, 97],
  P3: [201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 134, 132, 133, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 202, 172, 157, 142],
  P4: [133, 132, 131, 130, 129, 143, 158, 173, 188, 203, 218, 217, 216, 201, 186, 171, 156, 141, 125, 124, 123, 122, 121, 120, 105, 90, 91, 92, 93, 94, 95, 81, 66, 51, 36, 21, 6, 7, 8, 23, 38, 53, 68, 83, 99, 100, 101, 102, 103, 104, 119, 118, 117, 116, 115, 114],
};