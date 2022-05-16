import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Game() {
  return (
    <div id="layout">
      {/* Header */}
      <Header />
      {/* Body */}
      <div id="body" className="Game">
        <div id="bank">Bank</div>
        <div id="status">Status</div>
        <div id="action">Action</div>
        <div id="goal">Goal</div>
        <div id="work">Work</div>
        <div id="chioces">Choices</div>
        <div id="date">Date</div>
        <div id="money">Money</div>
        <div id="life">Life</div>
      </div>
      {/* Footer */}
      <Footer />
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
