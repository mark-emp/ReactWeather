var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return(
      <h3 className="text-center">It's currently {Math.round(temp)}&#8451; in {location}.</h3>
  );
}

module.exports = WeatherMessage;
