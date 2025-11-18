import {
  BASE_POSITIONS,
  HOME_ENTRANCE,
  TURNING_POINTS,
  MAIN_PATH
} from './constants';
import type { Player } from '../game/constants';


export const getIncrementedPosition = (
  player: Player,
  currentPosition: number,
  steps: number
): number | null => {
  if (BASE_POSITIONS[player].includes(currentPosition)) return null;

  const homePath = HOME_ENTRANCE[player];
  const homeIndex = homePath.indexOf(currentPosition);
  if (homeIndex !== -1) {
    const nextIndex = homeIndex + steps;
    return nextIndex < homePath.length ? homePath[nextIndex] : null;
  }

  const path = MAIN_PATH[player];
  const mainIndex = path.indexOf(currentPosition);
  if (mainIndex === -1) return null;

  if (currentPosition === TURNING_POINTS[player]) {
    return steps - 1 < homePath.length ? homePath[steps - 1] : null;
  }

  const turnPointIndex = path.indexOf(TURNING_POINTS[player]);
  const stepsToTurn = turnPointIndex - mainIndex;

  if (stepsToTurn >= 0 && stepsToTurn < steps) {
    const remainingSteps = steps - stepsToTurn - 1;
    return remainingSteps < homePath.length ? homePath[remainingSteps] : null;
  }

  const nextIndex = mainIndex + steps;
  return nextIndex < path.length ? path[nextIndex] : null;
};