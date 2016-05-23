angular.module('mapModule')
	.controller('mainController', function($scope, $location){
		$scope.interests = [
			{name:"Select", type:""},
	        {name:"Art and Entertainment", type: 'art'},
	        {name:"Beer and Wine", type: 'beer'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Shopping", type: 'shopping'}
	    ];
	    $scope.selected = $scope.interests[0];
	  
		$scope.hasChanged = function(){
			var int = $scope.selected.type;
			if (int === 'art'){
				console.log('you picked art!');
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
		
	});