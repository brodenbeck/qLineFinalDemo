angular.module('mapModule')
	.controller('mainController', function($scope, $location, railService){

	    var locations = [
	    	'500 Woodward Avenue Detroit MI',
	    	'1001 Woodward Avenue Detroit MI', 
	    	'1570 Woodward Avenue Detroit MI', 
	    	'2301 Woodward Avenue Detroit MI',
	    	'2930 Woodward Avenue Detroit MI',
	    	'3663 Woodward Avenue Detroit MI',
	    	'4265 Woodward Avenue Detroit MI',
	    	'4800 Woodward Avenue Detroit MI',
	    	'5564 Woodward Avenue Detroit MI',
	    	'6080 Woodward Avenue Detroit MI',
	    	'6364 Woodward Avenue Detroit MI',
	    	'3100 West Grand Boulevard Detroit MI'
    	];

    	$scope.artsClick = function() {
    		var interest = 'arts';
    		railService.getYelps(interest, locations)
    			.then(function(data) {
    				railService.getData(data);
    				$location.path('/map');
    			});
    	};

    	$scope.beerClick = function() {
    		var interest = 'bars';
    		railService.getYelps(interest, locations)
    			.then(function(data) {
    				railService.getData(data);
    				$location.path('/map');
    			});
    	};

    	$scope.coffeeClick = function() {
    		var interest = 'coffee';
    		railService.getYelps(interest, locations)
    			.then(function(data) {
    				railService.getData(data);
    				$location.path('/map');
    			});
    	};

    	$scope.shopClick = function() {
    		var interest = 'shopping';
    		railService.getYelps(interest, locations)
    			.then(function(data) {
    				railService.getData(data);
    				$location.path('/map');
    			});
    	};

	});

	
	
           