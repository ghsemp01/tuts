var UserService = angular.module('UserService', [])
UserService.factory('UserData', ['$http', function (http) {
    var urlBase = 'users.json';
    var UserData = {};
    UserData.getUsers = function () {
        return http.get(urlBase);
    };
    return UserData;
}]);