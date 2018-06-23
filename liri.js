require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Include the geocoder and inquirer NPM packages
var spotify = require("spotify");
var client = require("client");

// Prompt the user to provide location information.
inquirer.prompt([

  {
    type: "input",
    name: "my-tweets",
    message: "Here's your tweets"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function() {

  // console.log(location.userInput);

  // Then use the Google Geocoder to Geocode the address
  geocoder.geocode(location.userInput, function(err, data) {

    console.log(JSON.stringify(data, null, 2));
  });

});