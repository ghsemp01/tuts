	// create the module and name it scotchApp
	var app = angular.module('app', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

	
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

	
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			 .otherwise({
      				redirectTo: '/home'
  			});
	});


	app.controller('mainController', function($scope) {
		$scope.message = 'Everyone come and see how good I look!';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});