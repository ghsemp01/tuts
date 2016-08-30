var app = angular.module('app',[]);

app.controller('PokemonCtrl',function($scope){
	$scope.title = "My Pokemons";
	$scope.pokemon_name = "";
	$scope.pokemon_power = "";

	$scope.pokemons = [
		{name: 'Pikachu', power: 100},
		{name: 'Charmander', power: 95},
		{name: 'Bulbasaur', power: 95},
		{name: 'Charizard', power: 100},
		{name: 'Squirtle', power: 95}
	];

	$scope.addPokemon = function(){
		var new_pokemon = { name:$scope.pokemon_name, power:$scope.pokemon_power };
		$scope.pokemon_name = '';
		$scope.pokemon_power = '';
		$scope.pokemons.push(new_pokemon);
	};

	$scope.removePokemon = function(i){
		$scope.pokemons.splice(i,1);
	}
});