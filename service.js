angular.module('mapModule') 
	.factory('railService', function(){
		function randomString(length, chars) {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		        return result;
	    }
    
	    function retrieveYelp(name, callback) {
	        var location = '500 Woodward Avenue Detroit MI';
	        // var category_filter = category?;
	        var method = 'GET';
	        var url = 'http://api.yelp.com/v2/search';
	        var params = {
	                callback: 'angular.callbacks._0',
	                // location:  variable for location?,
	                oauth_consumer_key: 'dFHGR5RyuwsXXw2GL0crUA', 
	                oauth_token: '8XvZg5Oa-jGPdaBG8C47Ddj_tXrjRqtN',
	                oauth_signature_method: "HMAC-SHA1",
	                oauth_timestamp: new Date().getTime(),
	                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
	                // term:  variable for term - switch to category_filter? 
	                // // add radius param?
	            };
	        var consumerSecret = 'Zql7xg7brDshAqDWUdJTFEfkhZE';
	        var tokenSecret = 'QSCq0JQRC0fEQIOj3M9hn-8czMc';
	        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
	        params['oauth_signature'] = signature;
	        $http.jsonp(url, {params: params}).success(callback);
	        console.log(signature);
	    }

		return {
			retrieveYelp: retrieveYelp
		};

	});