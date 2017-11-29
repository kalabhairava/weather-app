// -------------------------------------------------
// 3rd Party Modules
// -------------------------------------------------
const request = require("request");
const yargs = require("yargs");

// -------------------------------------------------
// Private Variables
// -------------------------------------------------

const googleMapsAPI =
  "https://maps.googleapis.com/maps/api/geocode/json?address=";

// Since there is only one command (to fetch weather), why make the user type it? That's the reason we don't add any commands here
// Just add a flag to pass the address
// yargs.options() takes a configuration object
const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch the weather for",
      string: true // tells yargs to parse 'address' as a string
    }
  })
  .help()
  .alias("help", "h") // Another way of setting alias
  .alias("version", "v").argv;

console.log(argv);

const address = argv.address;
// It worked even without encoding address. Explore why? => That's because request method encodes it for you if you haven't done it already

// Encodes special characters like space, at, bang, etc
// Not necessary. The request module does it for you. Just adding it here so that you're aware of it.
const encodedAddress = encodeURIComponent(address);

request(
  {
    url: googleMapsAPI + encodedAddress,
    json: true // converts json string to JS value
  },
  (error, response, body) => {
    // console.log(response.request);
    // console.log(body);
    // logs the below output. Notice that arrays and objects are not printed properly
    // { results:
    //     [ { address_components: [Array],
    //         formatted_address: '12th Cross Rd, Kadarenahalli, Banashankari, Bengaluru, Karnataka 560078, India',
    //         geometry: [Object],
    //         partial_match: true,
    //         place_id: 'ChIJy7EB-X0VrjsRuyVlS9ozWdM',
    //         types: [Array] } ],
    //    status: 'OK' }

    // pretty printing an object to console
    // console.log(JSON.stringify(body));
    // logs a huge string without any indentation.
    // {"results":[{"address_components":[{"long_name":"12th Cross Road","short_name":"12th Cross Rd","types":["route"]},{"long_name":"Kadarenahalli","short_name":"Kadarenahalli","types":["political","sublocality","sublocality_level_2"]},{"long_name":"Banashankari","short_name":"Banashankari","types":["political","sublocality","sublocality_level_1"]},{"long_name":"Bengaluru","short_name":"Bengaluru","types":["locality","political"]},{"long_name":"Bangalore Urban","short_name":"Bangalore Urban","types":["administrative_area_level_2","political"]},{"long_name":"Karnataka","short_name":"KA","types":["administrative_area_level_1","political"]},{"long_name":"India","short_name":"IN","types":["country","political"]},{"long_name":"560078","short_name":"560078","types":["postal_code"]}],"formatted_address":"12th Cross Rd, Kadarenahalli, Banashankari, Bengaluru, Karnataka 560078, India","geometry":{"bounds":{"northeast":{"lat":12.9151834,"lng":77.56243769999999},"southwest":{"lat":12.9134439,"lng":77.5618571}},"location":{"lat":12.9142977,"lng":77.5621413},"location_type":"GEOMETRIC_CENTER","viewport":{"northeast":{"lat":12.9156626302915,"lng":77.5634963802915},"southwest":{"lat":12.9129646697085,"lng":77.56079841970849}}},"partial_match":true,"place_id":"ChIJy7EB-X0VrjsRuyVlS9ozWdM","types":["route"]}],"status":"OK"}

    // Print an object with indentations. The 3rd param specifies the number of spaces
    // Leave the 2nd param undefined. It is used to filter out properties. Generally useless.
    // console.log(JSON.stringify(error, undefined, 2));

    // Every time you visit a webpage in a browser, the content displayed on screen is body of the HTTP response to thr request you make when you enter an URL.
    // body => core data that comes from the server. Could be JSON, HTNL page, etc

    // response object => contains statusCode, headers, body, request object(contains information about the request made)
    // log the contents of response object => console.log(JSON.stringify(response, undefined, 2));
    // body is part of response. Since it is an integral part of response, 'request' module developers decided to make it a separate argument

    // error => contains errors made in the process of making a request, e.g. incorrect URL, no internet access, etc
    // error thrown for incorrect URL or no internet access
    // {
    //   "code": "ENOTFOUND",
    //   "errno": "ENOTFOUND",
    //   "syscall": "getaddrinfo",
    //   "hostname": "maps.googleapis.com",
    //   "host": "maps.googleapis.com",
    //   "port": 443
    // }

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
);
