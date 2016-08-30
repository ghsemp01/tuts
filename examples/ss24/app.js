var app = angular.module('app',["ngRoute","appService"]);


app.config(function($routeProvider) {

	$routeProvider
		.when('/pokemon', {
			templateUrl : 'pokemon.html',
			controller  : 'PokemonCtrl'
		})
		.when('/user', {
			templateUrl : 'user.html',
			controller  : 'UserCtrl'
		})
		 .otherwise({
  				redirectTo: '/pokemon'
		});

});

app.controller('UserCtrl',['$scope','UserData',function(scope,userData){
	var promise =  userData.getUsers();
 var promise =  userData.getUsers();
 promise.then(
  function(response) {
    scope.users = response.data;
  });

}]);

app.controller('PokemonCtrl',["$scope","PokemonData",function(scope,pokemonData){
	scope.title = "My Pokemons";
	scope.pokemon_name = "";
	scope.pokemon_power = "";
	 var promise = pokemonData.getPokemons();

    promise
    .success(function (response) {
        scope.pokemons = response;
    })
    .error(function (error) {
       alert('Unable to load pokemon data: ' + error.message);
    });


	scope.addPokemon = function(){
		var new_pokemon = { name:scope.pokemon_name, power:scope.pokemon_power };
		scope.pokemon_name = '';
		scope.pokemon_power = '';
		scope.pokemons.push(new_pokemon);
	};

	scope.removePokemon = function(i){
		scope.pokemons.splice(i,1);
	}
}]);