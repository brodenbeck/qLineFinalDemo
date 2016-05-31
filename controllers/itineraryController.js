angular.module('mapModule')
	.controller('itineraryController', function($scope, railService) {

		$scope.itinerary = railService.getItin();

			console.log($scope.itinerary.length === 0);
		$scope.empty = function() {
			if($scope.itinerary.length === 0) {
				return true;
			} else {
				return false;
			}
		};

		$scope.remove = function(item) {
			var index = $scope.itinerary.indexOf(item);
			$scope.itinerary.splice(index, 1);
		};

	});
