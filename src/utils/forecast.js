// const apis = require("../TOPSECRETapikey.js");
// const geocode = require("./geocode.js");
const request = require("request");

// To hide API keys
require("dotenv").config();

const weatherstackAPI = process.env.WEATHERSTACK_API;

const forecast  = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=" + weatherstackAPI + "&query=" + lat + "," + long + "&units=f";

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback("Unable to connect to weather service.");
        }
        else if(body.error) {
            console.log(body.error);
            callback("Unable to find location.");
        }
        else {
            const desc = body.current.weather_descriptions[0];
            const temp = body.current.temperature;
            const feels = body.current.feelslike;
            const humidity = body.current.humidity;

            callback(undefined, desc + ". It is currently " + temp + " degrees out. It feels like " + feels + " degrees out with a humidity of " + humidity + "%.");
        }
    });
};

module.exports = forecast;