angular.module('mapModule') 
    .factory('railService', function($http){
        
        var yelpCall;
        var stuffArray = [];

        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
        }
        
        function retrieveYelp(name, location, callback) {
            var method = 'GET';
            var url = 'http://api.yelp.com/v2/search';
            var params = {
                callback: 'angular.callbacks._0',
                location: location,
                category_filter: name,
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

        function setData(someData) {
            yelpCall = someData;
        }

        function getData() {
            var returnData = yelpCall.businesses;
            var places = [];
            returnData.forEach(function(el) {
                var instance = {};
                instance.name = el.name;
                instance.address = el.location.address[0];
                instance.phone = el.display_phone;
                instance.url = el.url;
                places.push(instance);
                console.log(instance);
            });
            return places;
        }
        
        function saveItin(stuffToDo){
        	stuffArray.push(stuffToDo);         
        }

        function getItOut() {
            return stuffArray;
        }

        return {
            retrieveYelp: retrieveYelp,
            setData: setData,
            getData: getData,
            saveItin: saveItin,
            getItOut: getItOut 
        };
        
    });