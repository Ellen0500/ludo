import React, { useState } from 'react';
import { StartScreen } from '../src/components/StartScreen';
import { Board } from '../src/components/Board';
import type { Player } from '../src/game/constants';
import './App.css';

const App: React.FC = () => {
  const [activePlayers, setActivePlayers] = useState<Player[] | null>(null);

  const handleRestart = () => {
    setActivePlayers(null);
  };

  return (
    <div className="app-container">
      {activePlayers === null ? (
        <StartScreen onStart={(players) => setActivePlayers(players as Player[])} />
      ) : (
        <Board activePlayers={activePlayers} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;