angular.module('mapModule') 
	.factory('railService', function($http, $q){
		
		var globalStation =[];
		var itinerary = [];

		function randomString(length, chars) {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		        return result;
	    }

	    function getYelps(interest, locationArray){
	    	return $q.all(buildYelpObject(interest, locationArray));	    	
	    }

	    function buildYelpObject(interest, locationArray) {
			return combineNamesAndLocations(interest, locationArray)
					.map(retrieveYelp); 
		}

	    function combineNamesAndLocations(interest, location) {
	    	return location.map(function(location) {
	    		return {
	    			interest: interest,
	    			location: location
	    		};
	    	});
	    }

	    function retrieveYelp(locationObj) {
	        var method = 'GET';
	        var url = 'http://api.yelp.com/v2/search';
	        var params = {
                callback: 'angular.callbacks._0', 
                // changed to passed in location array element
                location: locationObj.location,
            	category_filter: locationObj.interest,
            	radius_filter: 200,
                oauth_consumer_key: 'izjGp1yYdO8usFXzOJOOrg', 
                oauth_token: 'x1FOcqwx3Iu-Ne4W3Vtdcx0HyZdq0EPq',
                oauth_signature_method: "HMAC-SHA1",
                oauth_timestamp: new Date().getTime(),
                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            };
	        var consumerSecret = 'uqhotfutFb5OjfT74b-MzKPVQdk';
	        var tokenSecret = '07RIuOYl_szzXNILeGxzm0qezUw';
	        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
	        params.oauth_signature = signature;
	        return $http.jsonp(url + '?callback=JSON_CALLBACK', {params: params});
	    }

	    function getData(station) {
			for(var i = 0; i <= 11; i++){
				var businesses = station[i];
				var businesses2 = businesses.data.businesses;
				var newArray = [];
				businesses2.forEach(function(el){
					var instance = {};
					instance.name = el.name;
					instance.address = el.location.address[0];
					instance.phone = el.display_phone;
					instance.url = el.url;
					newArray.push(instance);
				});
				//change to globally defined array
				globalStation[i] = newArray;
			}
	    }

	    function displayData(elementIndex) {
	    	return globalStation[elementIndex];
	    }

	    function saveItin(stuffToDo) {
	    	itinerary.push(stuffToDo);
	    }

	    function getItin() {
	    	return itinerary;
	    }

		return {
			displayData: displayData,
			buildYelpObject: buildYelpObject,
			retrieveYelp: retrieveYelp,
			getYelps: getYelps,
			getData: getData,
			saveItin: saveItin,
			getItin: getItin
		};

	});
