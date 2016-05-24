angular.module('mapModule')
	.controller('railController', function($scope, railService){
		var returnedArr = railService.getData();
		if(returnedArr = []) {
			$scope.yelpArr = [{ phone: "I'm sorry, there is nothing available for your interests at this stop."}];
		} else {
			$scope.yelpArr = returnedArr;
		}
	});