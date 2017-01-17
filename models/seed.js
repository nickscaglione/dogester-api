const request = require('request')
const KEY = "2e7a1eb440d1e04e01529e0bd8529101"

// Get random pet
request(`http://api.petfinder.com/pet.getRandom?animal=dog&output=basic&key=${KEY}`, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
})
