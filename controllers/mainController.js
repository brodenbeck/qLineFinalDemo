angular.module('mapModule')
	.controller('mainController', function($scope, $location, railService){
		$scope.interests = [
			{name:"Choose a category", type:""},
	        {name:"Arts and Entertainment", type: 'arts'},
	        {name:"Beer and Wine", type: 'beer'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Shopping", type: 'shopping'}
	    ];
	    $scope.selected = $scope.interests[0];
	  
		$scope.hasChanged = function(){
			var int = $scope.selected.type;
			if (int === 'arts'){
				railService.retrieveYelp(int, function(data){
					console.log(data);
				}); // refactor without if-statement, accounting for empty string
				$location.path('/map');
			}else if(int ==='beer'){
				console.log('you picked beer!');
				$location.path('/map');
			}else if(int === 'coffee'){
				console.log('you picked coffee!');
				$location.path('/map');
			}else if(int === 'shopping'){
				console.log('you picked shopping!');
				$location.path('/map');
			}
			
		};

		// railService.retrieveYelp('arts', function(data){
		// 	console.log(data);
		// });
		
	});