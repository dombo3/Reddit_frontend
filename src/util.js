function elapsedDaysFrom(timestamp) {
  const fromDate = new Date(timestamp);
  const currentDate = new Date();
  const difference = currentDate - fromDate;
  return Math.round(difference / 1000 / 60 / 60 / 24);
}

function getQueryParams() {
  const queryParams = {};

  if (location.search) {
    const queryParamsString = location.search.substr(1);
    queryParamsString.split('&').reduce((queryParams, current) => {
      const [key, value] = current.split("=");
      queryParams[key] = decodeURIComponent(value);
      return queryParams;
    }, queryParams);
  }

  return queryParams;
}


export {elapsedDaysFrom, getQueryParams,}