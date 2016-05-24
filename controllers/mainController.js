angular.module('mapModule')
	.controller('mainController', function($scope, $location, railService){
		$scope.interests = [
			{name:"Choose a category", type:""},
	        {name:"Arts and Entertainment", type: 'arts'},
	        {name:"Beer and Wine", type: 'bars'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Shopping", type: 'shopping'}
	    ];
	    $scope.selected = $scope.interests[0];

	    $scope.locations = [
<<<<<<< HEAD
			{name:"Choose a location", type:""},
	        {name:"Arts and Entertainment", type: 'arts'},
	        {name:"Beer and Wine", type: 'bars'},
	        {name:"Coffee", type: 'coffee'},	       
	        {name:"Arts and Entertainment", type: 'arts'},
	       	{name:"Arts and Entertainment", type: 'arts'},
	        {name:"Beer and Wine", type: 'bars'},
	       	{name:"Coffee", type: 'coffee'},
	        {name:"Beer and Wine", type: 'bars'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Beer and Wine", type: 'bars'},
	        {name:"Coffee", type: 'coffee'},
	        {name:"Shopping", type: 'shopping'}
	    ];
	    $scope.selected = $scope.interests[0];
	    $scope.selectedlocation = $scope.locations[0];
=======
			{name:"Choose a station", type:""},
	        {name:"Congress Station", type: '500 Woodward Avenue, Detroit MI'},
	        {name:"Campus Martius Station", type: '1001 Woodward Avenue, Detroit MI'},
	        {name:"Grand Circus Station", type: '5170 Woodward Avenue, Detroit MI'},	       
	        {name:"Foxtown Station", type: '2326 Woodward Avenue, Detroit MI'},
	       	{name:"Sibley Station", type: '445 Ledyard Street, Detroit MI'},
	        {name:"Martin Luther King, Jr. Station", type: '3663 Woodward Avenue, Detroit MI'},
	       	{name:"Canfield Station", type: '4265 Woodward Avenue, Detroit MI'},
	        {name:"Warren Station", type: '4800 Woodward Avenue, Detroit MI'},
	        {name:"Ferry Station", type: '5564 Woodward Avenue, Detroit MI'},
	        {name:"Amsterdam Station", type: '6250 Woodward Avenue, Detroit MI'},
	        {name:"Amtrack Station", type: '6364 Woodward Avenue, Detroit MI'},
	        {name:"Grand Station", type: '3011 West Grand Boulevard, Detroit MI'}
	    ];
	    $scope.location = $scope.locations[0];
>>>>>>> 6a949b1e05edccbc6dd0d03d4ee2fccdf75aab16
	  
		$scope.hasChanged = function(){
			var int = $scope.selected.type;
			var loc = $scope.location.type;
			if (int !== '' && loc !== ''){
				railService.retrieveYelp(int, loc, function(data){
					railService.setData(data);
					$location.path('/map');
				}); 
			}			
		};
		
	});