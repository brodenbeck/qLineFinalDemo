angular.module('mapModule')
    .controller('railController', function($scope, railService){
        var returnedArr = railService.getData();
        $scope.yelpArr = returnedArr;
    
    $scope.place_index = 0;
  
    $scope.show = function(){
        if (returnedArr.length === 0){
            return false;
        }else{
            return true;
        }
    };
    $scope.next = function () {
        if ($scope.place_index >= returnedArr.length - 1) {
            $scope.place_index = 0;
        }else{
            $scope.place_index++;
        }
    console.log(($scope.place_index) + "/" + (returnedArr.length));
    };
    $scope.back = function () {
        if ($scope.place_index <= returnedArr.length - 1 &&
            $scope.place_index > 0) {
                $scope.place_index --;
        } else {
            $scope.place_index = returnedArr.length - 1;
        }
    console.log(($scope.place_index) + "/" + (returnedArr.length));
    };
     
    $scope.itin = function(){
        var stuffToDo = returnedArr[$scope.place_index];
        railService.saveItin(stuffToDo);
        console.log(stuffToDo);
       $scope.added = function(){
        if (stuffToDo === returnedArr[$scope.place_index]){
            return true;
        }else{
            return false;
        }
    };
    };
});











