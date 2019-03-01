const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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
    describe: 'apiKey for fetching data',
    string: true
  }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv, (errMsgs, results) => {
  if(errMsgs) {
    console.log(errMsgs);
  } else {
    console.log(results);
  }
});
