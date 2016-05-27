angular.module('mapModule')

	.controller('railController', function($scope, railService){		

        $scope.stops = {
            congress: {
                displayData: railService.displayData(0),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Congress Station'
            },
            campusMartius: {
                displayData: railService.displayData(1),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Campus Martius Station'
            },
            grandCircus: {
                displayData: railService.displayData(2),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Grand Circus Station'
            },
            foxtown: {
                displayData: railService.displayData(3),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Foxtown Station'
            },
            sibley: {
                displayData: railService.displayData(4),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Sibley Station'
            },
            mlk: {
                displayData: railService.displayData(5),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Martin Luther King, Jr. Station'
            },
            canfield: {
                displayData: railService.displayData(6),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Canfield Station'
            },
            warren: {
                displayData: railService.displayData(7),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Warren Station'
            },
            ferry: {
                displayData: railService.displayData(8),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Ferry Station'
            },
            amsterdam: {
                displayData: railService.displayData(9),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Amsterdam Station'
            },
            amtrak: {
                displayData: railService.displayData(10),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Amtrak Station'
            },
            grand: {
                displayData: railService.displayData(11),
                placeIndex: 0,
                next: next,
                back: back,
                show: show,
                showIndexing: showIndexing,
                itin: itin,
                station: 'Grand Station'
            }
        };

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

        function showIndexing(stop) {
            return (stop.placeIndex + 1) + ' / ' + stop.displayData.length;
        }

        function itin(stop) {
            var stuffToDo = stop.displayData[stop.placeIndex];
            railService.saveItin(stuffToDo);
        }

    });
