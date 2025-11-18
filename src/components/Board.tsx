import { useLudoGame } from '../game/useLudoGame';
import type { Player } from '../game/constants';
import type { JSX } from 'react';



type BoardProps = {
  activePlayers: Player[];
  onRestart: () => void;
};


export const Board = ({ activePlayers, onRestart }: BoardProps) => {
  const {
    positions,
    turn,
    diceValue,
    rollDice,
    movePiece,
    resetGame,
  } = useLudoGame(activePlayers);

  const handleMove = (playerId: Player, pieceId: number) => {
    movePiece(playerId, pieceId);
  };

  const icons: Record<number, JSX.Element> = {
    1: <span>⚀</span>,
    2: <span>⚁</span>,
    3: <span>⚂</span>,
    4: <span>⚃</span>,
    5: <span>⚄</span>,
    6: <span>🎲</span>,
  };

  return (
    <div>
      <h2>Turno: {activePlayers[turn]}</h2>
      <button onClick={rollDice}>Rolar dado</button>
      {diceValue !== null && <div>Dado: {icons[diceValue]}</div>}

      {activePlayers.map((player: Player) => (
        <div key={player}>
          <h3>{player}</h3>
          {positions[player].map((pos: number, pieceId: number) => (
            <button key={pieceId} onClick={() => handleMove(player, pieceId)}>
              Peça {pieceId + 1}: {pos}
            </button>
          ))}
        </div>
      ))}

      <button onClick={resetGame}>Reiniciar jogo</button>
      <button onClick={onRestart}>Voltar à tela inicial</button>
    </div>
  );
};