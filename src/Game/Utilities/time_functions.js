/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
const showDate = (d) => {
  switch (true) {
    case ((d >= 1) && (d <= 31)):
      return `5/${d}/2022`;
    case ((d >= 32) && (d <= 61)):
      return `6/${d - 31}/2022`;
    case ((d >= 62) && (d <= 92)):
      return `7/${d - 61}/2022`;
    case ((d >= 93) && (d <= 122)):
      return `8/${d - 92}/2022`;
    default:
      return '';
  }
};

const showTime = (t) => {
  switch (t) {
    case 0:
      return '12:00 AM';
    case 1:
      return '1:00 AM';
    case 2:
      return '2:00 AM';
    case 3:
      return '3:00 AM';
    case 4:
      return '4:00 AM';
    case 5:
      return '5:00 AM';
    case 6:
      return '6:00 AM';
    case 7:
      return '7:00 AM';
    case 8:
      return '8:00 AM';
    case 9:
      return '9:00 AM';
    case 10:
      return '10:00 AM';
    case 11:
      return '11:00 AM';
    case 12:
      return '12:00 PM';
    case 13:
      return '1:00 PM';
    case 14:
      return '2:00 PM';
    case 15:
      return '3:00 PM';
    case 16:
      return '4:00 PM';
    case 17:
      return '5:00 PM';
    case 18:
      return '6:00 PM';
    case 19:
      return '7:00 PM';
    case 20:
      return '8:00 PM';
    case 21:
      return '9:00 PM';
    case 22:
      return '10:00 PM';
    case 23:
      return '11:00 PM';
    default:
      return '';
  }
};

// Adds Time in Hours
const addTime = (date, now, add) => {
  let time_ = now + add;
  let date_ = date;
  if (time_ >= 24) {
    time_ -= 24;
    date_ += 1;
  }
  return { time: time_, date: date_ };
};

export { addTime, showTime, showDate };
