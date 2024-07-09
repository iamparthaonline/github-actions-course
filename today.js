const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getToday = () => {
  const d = new Date();
  let day = d.getDay();
  return weekday[day];
};

module.exports = getToday;
