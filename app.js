const request = require('request');
const yargs = require('yargs');

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

console.log('argv:' + JSON.stringify(argv));
const encodedAddress = encodeURIComponent(argv.address);

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=${argv.apiKey}&location=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log('result:' + JSON.stringify(body.results));
  console.log('lat:' + body.results[0].locations[0].latLng.lat);
  console.log('lng:' + body.results[0].locations[0].latLng.lng);
});
