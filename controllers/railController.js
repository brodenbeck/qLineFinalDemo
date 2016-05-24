angular.module('mapModule')
	.controller('railController', function($scope, railService){
		var returnedArr = railService.getData();
		if(returnedArr.length === 0) {
			$scope.yelpArr = [{ phone: "I'm sorry, there is nothing available for your interests at this stop."}];
		} else {
			$scope.yelpArr = returnedArr;
		}

    $scope.place_index = 0;

    $scope.next = function () {
        if ($scope.place_index >= returnedArr.length - 1) {
            $scope.place_index = 0;
        } else {
            $scope.place_index++;
        }
        console.log(returnedArr.length + '/' + $scope.place_index);
    };

});


	// 	$scope.forwardcounter = function(){
	// 		console.log(returnedArr[0]);
	// 			return returnedArr[0];
	// 		};
	// 	$scope.backwardscounter = function(){
	// 		console.log(returnedArr[1]);
	// 			return returnedArr[1];
	// 		};

	// });
