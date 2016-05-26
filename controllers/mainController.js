angular.module('mapModule')
	.controller('mainController', function($scope, $location, railService){
		$scope.interests = [
			{name:"Choose a category ... ", type:""},
	        {name:"Arts and Entertainment", type: 'arts'},
	        {name:"Beer and Wine", type: 'bars'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Shopping", type: 'shopping'}
	    ];
	    $scope.selected = $scope.interests[0];

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
	  
		$scope.hasChanged = function(){
			var interest = $scope.selected.type;
			if (interest !== ''){
				railService.getYelps(interest, locations)
					.then(function(data) {
						railService.getData(data);
						$location.path('/map');
					});
			}			
		};
		
	});