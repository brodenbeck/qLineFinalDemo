angular.module('mapModule')
	.controller('railController', function($scope, railService){		

        $scope.stops = {
            congress: {
                displayData: railService.displayData(0),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            campusMartius: {
                displayData: railService.displayData(1),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            grandCircus: {
                displayData: railService.displayData(2),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            foxtown: {
                displayData: railService.displayData(3),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            sibley: {
                displayData: railService.displayData(4),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            mlk: {
                displayData: railService.displayData(5),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            canfield: {
                displayData: railService.displayData(6),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            warren: {
                displayData: railService.displayData(7),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            ferry: {
                displayData: railService.displayData(8),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            amsterdam: {
                displayData: railService.displayData(9),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            amtrak: {
                displayData: railService.displayData(10),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            },
            grand: {
                displayData: railService.displayData(11),
                placeIndex: 0,
                next: next,
                back: back,
                show: show
            }
        }

        function next(stop) {
            if(stop.placeIndex >= stop.displayData.length -1) {
                stop.placeIndex = 0;
            } else {
                stop.placeIndex++;
            }
        }

        function back(stop) {
            if(stop.placeIndex <= stop.displayData.length -1 && stop.placeIndex > 0) {
                stop.placeIndex--;
            } else {
                stop.placeIndex = stop.displayData.length - 1;
            }
        }

        function show(stop) {
            if(stop.displayData.length === 0) {
                return false;
            } else {
                return true;
            }
        }

    });

