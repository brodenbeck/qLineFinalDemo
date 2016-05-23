angular.module('mapModule')
	.controller('mainController', function($scope){
		$scope.arts = [
	        {name: "dia", type: 'DIA' },
	        {name: "streetArt", type: 'Street Art'},
	        {name: "jazz", type: 'Jazz'},
	        {name: "techno", type: 'Techno'}
	    ];
		$scope.beers = [
	        {name: "Beer", type: 'beer1' },
	        {name: "Wine Bar", type: 'beer2'},
	        {name: "Upscale", type: 'beer3' },
	        {name: "Gastropub", type: 'beer4'}
		    ];
	    $scope.coffees = [
	        {name: "study", type: 'Study' },
	        {name: "artsy", type: 'Artsy'},
	        {name: "jazz", type: 'Jazz'},
	        {name: "techno", type: 'Techno'}
	    ];
	    $scope.shops = [
	        {name: "dia", type: 'DIA' },
	        {name: "streetArt", type: 'Street Art'},
	        {name: "jazz", type: 'Jazz'},
	        {name: "techno", type: 'Techno'}
	    ];
	  
		$scope.art = function(selectedarttopic) {
			console.log(selectedarttopic.name);
			// code
		};

		$scope.beer = function(selectedbeertopic) {
			console.log(selectedbeertopic.name);
			// code
		};

		$scope.coffee = function(selectedcoffeetopic) {
			console.log(selectedcoffeetopic.name);
			// code
		};

		$scope.shopping = function(selectedshoppingtopic) {
			console.log(selectedshoppingtopic.name);
			// code
		};





	});