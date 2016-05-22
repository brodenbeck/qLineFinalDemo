// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
	consumer_key: 'dFHGR5RyuwsXXw2GL0crUA',
	consumer_secret: 'Zql7xg7brDshAqDWUdJTFEfkhZE',
	token: '8XvZg5Oa-jGPdaBG8C47Ddj_tXrjRqtN',
	token_secret: 'QSCq0JQRC0fEQIOj3M9hn-8czMc',
});

var artsLocations = [];

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ category_filter: 'arts', location: "777 Woodward Avenue, Detroit MI", radius_filter: 200 })
	.then(function (data) {
		data.businesses.forEach(function(el) {
			var instance = {};
			instance.name = el.name;
			instance.address = el.location.address[0];
			instance.rating = el.rating;
			instance.phone = el.phone;
			instance.url = el.url;
			artsLocations.push(instance);
		})
		console.log(artsLocations);
	})
	.catch(function (err) {
		console.error(err);
	});