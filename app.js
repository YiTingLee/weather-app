const request = require('request');
const apiKey = process.argv[2];

request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=1301%20lombard%20street%20philadelphi`,
  json: true
}, (error, response, body) => {
  console.log('result:' + JSON.stringify(body.results));
  console.log('lat:' + body.results[0].locations[0].latLng.lat);
  console.log('lng:' + body.results[0].locations[0].latLng.lng);
});
