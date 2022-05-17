import React, { useState } from 'react';

function About() {
  const [open, setOpen] = useState(false);

  const handleOK = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button type="button" onClick={handleOK}>About</button>
      <dialog open={open} id="about" className="About">
        <h3>Money Manager v1.0</h3>
        <p>Skelton Networks &copy;2022</p>
        <form method="dialog">
          <button type="button" onClick={handleOK}>OK</button>
        </form>
      </dialog>
    </div>
  );
}

export default About;
