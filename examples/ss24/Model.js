var appService = angular.module('appService', [])
appService.factory('UserData', ['$http', function (http) {
    var urlBase = 'users.json';
    var UserData = {};
    UserData.getUsers = function () {
        return http.get(urlBase);
    };
    return UserData;
}]);
appService.factory('PokemonData', ['$http', function (http) {
    var urlBase = 'pokemons.json';
    var PokemonData = {};

    PokemonData.getPokemons = function () {
        return http.get(urlBase);
    };
    return PokemonData;
}]);