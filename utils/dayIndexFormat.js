const  dayIndexFormat = (date) => {
  let dayOfTheWeekIndex;

  if (date.getDay() === 0) {
    dayOfTheWeekIndex = 6;
  } else {
    dayOfTheWeekIndex = new Date(day.timestamp).getDay() - 1;
  }
console.log(dayOfTheWeekIndex)
  return dayOfTheWeekIndex;
};


export default dayIndexFormat