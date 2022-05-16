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
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button type="button" onClick={handleOK}>OK</button>
        </form>
      </dialog>
    </div>
  );
}

export default About;
