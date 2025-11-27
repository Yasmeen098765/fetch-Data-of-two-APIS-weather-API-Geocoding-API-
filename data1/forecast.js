const request = require("request")

const forecast = (latitude, longtitude, callback) => {
  const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect weather api service or Network error ", undefined)
    } else if (response.body.error) {
      callback(response.body.error.message, undefined)
    } else {
      callback(undefined, 
        "countryName : "+response.body.location.country +
        ". , regionName : "+response.body.location.region +
        ". , cityName : "+response.body.location.name 
        + ".\nWeather conditions : " + response.body.current.condition.text
        + "\ntemarature Celsius : " + response.body.current.temp_c+"°C , "
         + "temarature Fahrenheit : " + response.body.current.temp_c+"°F"
      )
    }
  })
}

module.exports = forecast









