var app = angular.module('app',["UserService"]);
app.controller('UserController',['$scope','UserData',function(scope,userData){
	 userData.getUsers()
    .success(function (response) {
        scope.users = response;
    })
    .error(function (error) {
       alert('Unable to load customer data: ' + error.message);
    });
}]);