const convertToCelsius = function (fahrenheight) {
  let celcius = 5 / 9 * (fahrenheight - 32);
  celcius = Math.round(celcius * 10) / 10;
  return celcius
};

const convertToFahrenheit = function (celcius) {
  let fahrenheight = (celcius * 9 / 5) + 32;
  fahrenheight = Math.round(fahrenheight * 10) / 10;
  return fahrenheight;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
