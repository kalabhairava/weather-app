// -------------------------------------------------
// Dependencies
// -------------------------------------------------
const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch the weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .alias("version", "v").argv;

const encodedAddress = encodeURIComponent(argv.address);
const googleMapsAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${
  encodedAddress
}`;

// axios supports JSON by default, you don't need to configure anything
axios
  .get(googleMapsAPI)
  .then(response => {
    // console.log(JSON.stringify(response.data));
    // console.log(response);
    if (response.data.status === "ZERO_RESULTS") {
      // Don't try to handle errors inside success handlers, just throw a new error and let catch() function handle it
      throw new Error("Unable to find that address");
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const APIKey = "c20cb927d0032606123ed71616ab432e";
    const weatherAPI = "https://api.darksky.net/forecast/";

    return axios.get(`${weatherAPI}${APIKey}/${lat},${lng}`);
  })
  .then(response => {
    console.log(response.data.currently.temperature);
  })
  .catch(error => {
    if (error.code === "ENOTFOUND") {
      console.log("Unable to connect Google Servers");
    } else {
      console.log(error.message);
    }
  });
