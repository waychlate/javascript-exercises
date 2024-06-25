const convertToCelsius = function(fair) {
  return Math.round(((fair - 32) * 5/9) * 10) / 10
};

const convertToFahrenheit = function(cells) {
  return Math.round(((cells * 9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
