angular.module('mapModule')
	.controller('railController', function($scope, railService){
		$scope.yelpArr = railService.getData();
	});