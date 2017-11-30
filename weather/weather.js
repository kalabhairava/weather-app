const request = require('request');

const APIKey = 'c20cb927d0032606123ed71616ab432e';
const weatherAPI = 'https://api.darksky.net/forecast/';

const currentWeather = function (lat, lng, callback) {
    request({
        url: `${weatherAPI}${APIKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect Dark Net API');
        } else if (response.statusCode === 400) {
            callback('The given location is invalid');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
    });
};

module.exports.currentWeather = currentWeather;