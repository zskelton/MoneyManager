import React, { useContext, useEffect } from 'react';
import { addTime, showDate, showTime } from '../Utilities';
import GlobalContext from '../Data/GlobalContext';

function Date() {
  const {
    date, time, setDate, setTime,
  } = useContext(GlobalContext);

  // Initialize The Date
  useEffect(() => {
    setDate(1);
    setTime(0);
  }, []);

  // Update The Date
  const updateDate = (hours) => {
    const newDate = addTime(date, time, hours);
    setDate(newDate.date);
    setTime(newDate.time);
  };

  return (
    <div id="Date" className="Date">
      <span id="title">Date:</span>
      <span id="display">{`${showDate(date)} at ${showTime(time)}`}</span>
      <br />
      <button type="button" onClick={() => updateDate(3)}>Rest 3 hours</button>
      <br />
      <button type="button" onClick={() => updateDate(24)}>Rest 1 day</button>
    </div>
  );
}

export default Date;
