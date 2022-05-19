/* eslint-disable no-console */
import React, { useMemo, useState } from 'react';
import Game from './Game/index';
import './App.css';
import GlobalContext from './Game/Data/GlobalContext';

function App() {
  // Global States
  const [date, setDate] = useState(1);
  const [time, setTime] = useState(0);

  // Global Context
  const globals = useMemo(() => ({
    date,
    time,
    setDate,
    setTime,
  }), [date, time]);

  return (
    <div className="Layout">
      <GlobalContext.Provider value={globals}>
        <Game />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
