// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'dFHGR5RyuwsXXw2GL0crUA',
  consumer_secret: 'Zql7xg7brDshAqDWUdJTFEfkhZE',
  token: '8XvZg5Oa-jGPdaBG8C47Ddj_tXrjRqtN',
  token_secret: 'QSCq0JQRC0fEQIOj3M9hn-8czMc',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: "1214 Griswold Street Detroit MI", radius_filter:200})
.then(function (data) {
  console.log(data.businesses[0].name);
})
.catch(function (err) {
  console.error(err);
});
