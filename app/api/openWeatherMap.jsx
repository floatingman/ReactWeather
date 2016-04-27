var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=0309b5aeb9addd4cc57d0fea47b58e31';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var reqestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(reqestUrl).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
