angular.module('mapModule') 
	.factory('railService', function($http){
		
		function randomString(length, chars) {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		        return result;
	    }
    	
	    var yelpCall;


	    //array for yelp promise objects
	    var yelpArray = [];
	    //static interest since this won't be changing amirite?
	    var interestCat;
	    //callback, is this really needed?  we'll see
	    var hollaback;

	    //i made a thing
		function buildYelpObject(name,locationArray, callback){
			interestCat = name; //store category, not changing
			hollaback = callback; //store callback, used? maybe?

			//money time, call retrieveYelp for every location in array
			//then push it right into a new array of objects
			locationArray.forEach(retrieveYelp).push(yelpArray);

			//giv'em what they asked for, whole lot of promises in an array, blam-o
			return yelpArray;
		}

		//now this is called for every element of the array rather than one location
	    function retrieveYelp(locationElement) {
	        var method = 'GET';
	        var url = 'http://api.yelp.com/v2/search';
	        var params = {
                callback: 'angular.callbacks._0', 
                //changed to passed in location array element
                location: locationElement,
                //changed to global variable for interests
            	category_filter: interestCat,
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
	        $http.jsonp(url + '?callback=JSON_CALLBACK', {params: params}).success(callback);
	    } 

	    //now that it's async, no sure if this is needed for the callback function call
	    function setData(someData) {
	    	yelpCall = someData;
	    }

	    //now we'll redeem the arrays from the objects. savage
	    function getYelps(promiseArray){
	    	//once all the promises "finish"
	    	Promise.all(promiseArray)
	    	//process the staions
	    	.then(function(stations){
	    		//honestly this could probably be prettier but eh
	    		var station1 = getData(stations[0])
	    		var station2 = getData(stations[1])
	    		var station3 = getData(stations[2])
	    		//so on and so forth to inifinity and beyond
	    	})
	    }

	    //change this to accept input from the yelp promised objects
	    function getData(station) {
	    	//retrofit this puppy to use the object's array to access the objects that were passed in
	    	returnData = station.businesses;
	    	var places = [];
	    	returnData.forEach(function(el) {
				var instance = {};
				instance.name = el.name;
				instance.address = el.location.address[0];
				instance.rating = el.rating;
				instance.phone = el.display_phone;
				instance.url = el.url;
				places.push(instance);
			});
	    	return places;
	    }

		return {
			buildYelpObject: buildYelpObject,
			retrieveYelp: retrieveYelp,
			setData: setData,
			getData: getData
		};

	});