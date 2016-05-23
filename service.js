angular.module('mapModule') 
	.factory('railService', function($http){
		function randomString(length, chars) {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		        return result;
	    }
    
	    function retrieveYelp(name, callback) {
	        var method = 'GET';
	        var url = 'http://api.yelp.com/v2/search';
	        var params = {
                callback: 'angular.callbacks._0', 
                location: '500 Woodward Avenue, Detroit MI',
            	term: name,
                oauth_consumer_key: 'izjGp1yYdO8usFXzOJOOrg', 
                oauth_token: 'x1FOcqwx3Iu-Ne4W3Vtdcx0HyZdq0EPq',
                oauth_signature_method: "HMAC-SHA1",
                oauth_timestamp: new Date().getTime(),
                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
             }	
                // term: switch to category_filter? 
                // add radius param?
	        var consumerSecret = 'uqhotfutFb5OjfT74b-MzKPVQdk';
	        var tokenSecret = '07RIuOYl_szzXNILeGxzm0qezUw';
	        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
	        params['oauth_signature'] = signature;
	        console.log(signature);
	        $http.jsonp(url, {params: params}).success(callback);
	    }

		return {
			retrieveYelp: retrieveYelp
		};

	});