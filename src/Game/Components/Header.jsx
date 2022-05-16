import React from 'react';
import About from '../../About';

function Header() {
  return (
    <div id="header" className="Header">
      <div id="title" style={{ display: 'inline-block', textAlign: 'center' }}>Money Manager</div>
      <button type="button" style={{ marginLeft: '100px', display: 'inline-block' }}>About</button>
    </div>
  );
}

export default Header;
