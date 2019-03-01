const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  },
  k: {
    demand: true,
    alias: 'apiKey',
    describe: 'apiKey for fetching geolocation.',
    string: true
  },
  l: {
    demand: true,
    alias: 'apiKey2',
    describe: 'apiKey for fetching weather.',
    string: true
  }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv, (errMsgs, results) => {
  if (errMsgs) {
    console.log(errMsgs);
  } else {
    const weatherReq = {
      apiKey2: argv.apiKey2,
      lat: results.lat,
      lng: results.lng
    };
    weather.getWeather(weatherReq, (errMsgs, results) => {
      if (errMsgs) {
        console.log(errMsgs);
      } else {
        console.log(argv.address);
        console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}.`)
      }
    })
  }
});
