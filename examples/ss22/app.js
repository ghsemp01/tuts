var app = angular.module('app',[]);

app.controller('UserController',function($scope,$http){
	$http.get('users.json').success(function(data) {
          $scope.users = data;
    });
});