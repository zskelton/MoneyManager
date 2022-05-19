import React from 'react';
import About from '../../About';

function Header() {
  const handleNewGame = () => {
    // eslint-disable-next-line no-alert
    alert('New Game!');
  };

  return (
    <div id="header" className="Header">
      <div id="menu">
        <button type="button" onClick={handleNewGame}>New Game</button>
      </div>
      <div id="title">
        <h3>Money Manager</h3>
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default Header;
