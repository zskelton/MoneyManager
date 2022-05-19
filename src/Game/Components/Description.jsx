import React, { useContext } from 'react';
import { addTime } from '../Utilities';
import GlobalContext from '../Data/GlobalContext';

function Description() {
  const {
    date, time, setDate, setTime,
  } = useContext(GlobalContext);

  // Update The Date
  const updateDate = (hours) => {
    const newDate = addTime(date, time, hours);
    setDate(newDate.date);
    setTime(newDate.time);
  };

  return (
    <div id="Description" className="Description">
      <span id="title">Description</span>
      <br />
      <button type="button" onClick={() => updateDate(3)}>Rest 3 hours</button>
      <br />
      <button type="button" onClick={() => updateDate(24)}>Rest 1 day</button>
    </div>
  );
}

export default Description;
