angular.module('mapModule', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'mainController',
				templateUrl: 'partials/interests.html'
			})
			.when('/map',
			{
				controller: 'railController',
				templateUrl: 'partials/map.html'
			})
			.when('/contact',
			{
				controller: 'contactController',
				templateUrl: 'partials/contact.html'
			})
			
			.when('/error',
			{
				controller: 'errorController',
				templateUrl: 'partials/error.html'
			})
			.otherwise({ redirectTo: '/error'});
	});	