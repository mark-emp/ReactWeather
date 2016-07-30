var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dd9bcf2b22b90f33f48538529fc19423&units=metric';

module.exports = {
  getTemp: function(location) {
    // Returns a promise
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return({
          location: res.data.name,
          temp: res.data.main.temp
        });
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
