angular.module('mapModule')
	.controller('itineraryController', function($scope, railService) {

		$scope.itinerary = railService.getItin();

		$scope.show = function() {
			if($scope.itinerary.length === 0) {
				return false;
			} else {
				return true;
			}
		};

		$scope.remove = function(item) {
			var index = $scope.itinerary.indexOf(item);
			$scope.itinerary.splice(index, 1);
		};

	});
