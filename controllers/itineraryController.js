angular.module('mapModule')
    .controller('itineraryController', function($scope, railService){
        $scope.itinerary = railService.getItOut();
    	
 
           		
       		

    	
    		
 
    });