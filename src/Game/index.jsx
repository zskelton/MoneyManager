/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import db from './Data/db';
import { useLiveQuery } from 'dexie-react-hooks';

function PlayerList() {
  const players = useLiveQuery(() => db.game.toArray());

  return (
    <ul>
      {players?.map((player) => (
        <li key={player.id}>{player.name}</li>
      ))}
    </ul>
  );
}

function Game() {
  const [statusText, setStatusText] = useState('Running...');
  const [player, setPlayer] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [bankAccount, setBankAccount] = useState(0);

  async function addPlayer() {
    try {
      const id = await db.game.add({
        name: playerName,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      setStatusText(`Player ${playerName} added with id ${id}`);
      setPlayer(id);
      setPlayerName('');
    } catch (error) {
      setStatusText(error.message);
    }
  }

  return (
    <div id="layout">
      {/* Header */}
      <Header />
      {/* Body */}
      <div id="body" className="Game">
        <div id="game">
          <div id="container-toprow" className="container">
            <div id="item_bank" className="item">
              <p>Bank</p>
              {'Name: '}
              <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
              <br />
              <button type="button" onClick={addPlayer}>Add Player</button>
            </div>
            <div id="item_description" className="item">
              {/* Description */}
              <PlayerList />
            </div>
            <div id="item_actions" className="item">
              Actions
            </div>
          </div>
          <div id="container-middlerow" className="container">
            <div id="item_goals" className="item">
              Goals
            </div>
            <div id="item_work" className="item">
              Work
            </div>
            <div id="item_choices" className="item">
              Choices
            </div>
          </div>
          <div id="container-bottomrow" className="container">
            <div id="item_date" className="item">
              Date
            </div>
            <div id="item_money" className="item">
              Money
            </div>
            <div id="item_living" className="item">
              Living
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer statusText={statusText} />
    </div>
  );
}

export default Game;

/*

Header
:Menu                          :Game Name (Game)            :User
- New Game -> newGame()
- Load Game -> loadGame(file)
- Save Game -> saveGame()
- About -> About Game Modal

<divider />

Body

  /------------------------------------------------------\
  |   Bank   |            Status            |   Action   |
  |------------------------------------------------------|
  |Account:  |                             |             |
  |Balance:  |                             |             |
  |------------------------------------------------------|
  |      Goal     |       Work       |      Actions      |
  |------------------------------------------------------|
  |Save $750/mo   | McDonalds $13/hr | Pay Rent          |
  |               | - 20 hrs/week    | Party             |
  |------------------------------------------------------|
  |Day 1 - May 1st, 2022 (Monday)    Cr:+$1,000  Db:-$25 |
  \------------------------------------------------------/

Footer
:Status - Game Status (text)

*/
