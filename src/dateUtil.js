function elapsedDaysFrom(timestamp) {
  const fromDate = new Date(timestamp);
  const currentDate = new Date();
  const difference = currentDate - fromDate;
  return Math.round(difference / 1000 / 60 / 60 / 24);
}

export {elapsedDaysFrom,}