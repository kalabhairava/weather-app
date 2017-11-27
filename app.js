// -------------------------------------------------
// 3rd Party Modules
// -------------------------------------------------
const request = require("request");

request(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=12th%20cross%20bendrenagar%20560070",
    json: true // converts json string to JS value
  },
  (error, response, body) => {
    console.log(body);
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
    console.log(JSON.stringify(body));
    // logs a huge string without any indentation.
    // {"results":[{"address_components":[{"long_name":"12th Cross Road","short_name":"12th Cross Rd","types":["route"]},{"long_name":"Kadarenahalli","short_name":"Kadarenahalli","types":["political","sublocality","sublocality_level_2"]},{"long_name":"Banashankari","short_name":"Banashankari","types":["political","sublocality","sublocality_level_1"]},{"long_name":"Bengaluru","short_name":"Bengaluru","types":["locality","political"]},{"long_name":"Bangalore Urban","short_name":"Bangalore Urban","types":["administrative_area_level_2","political"]},{"long_name":"Karnataka","short_name":"KA","types":["administrative_area_level_1","political"]},{"long_name":"India","short_name":"IN","types":["country","political"]},{"long_name":"560078","short_name":"560078","types":["postal_code"]}],"formatted_address":"12th Cross Rd, Kadarenahalli, Banashankari, Bengaluru, Karnataka 560078, India","geometry":{"bounds":{"northeast":{"lat":12.9151834,"lng":77.56243769999999},"southwest":{"lat":12.9134439,"lng":77.5618571}},"location":{"lat":12.9142977,"lng":77.5621413},"location_type":"GEOMETRIC_CENTER","viewport":{"northeast":{"lat":12.9156626302915,"lng":77.5634963802915},"southwest":{"lat":12.9129646697085,"lng":77.56079841970849}}},"partial_match":true,"place_id":"ChIJy7EB-X0VrjsRuyVlS9ozWdM","types":["route"]}],"status":"OK"}

    // Print an object with indentations. The 3rd param specifies the number of spaces
    // Leave the 2nd param undefined. It is used to filter out properties. Generally useless.
    console.log(JSON.stringify(body, undefined, 2));
  }
);
