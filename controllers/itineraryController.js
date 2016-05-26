angular.module('mapModule')
    .controller('itineraryController', function($scope, railService){
        
    $scope.itinerary = railService.getItOut();
    console.log($scope.itinerary);

    $scope.empty = function(){
        if ($scope.itinerary.length === 0){
            return false;
        }else{
            return true;
        }
    };

	$scope.itout = function(item){ 
		var index = $scope.itinerary.indexOf(item);
	  	$scope.itinerary.splice(index, 1);     
	};


    });
