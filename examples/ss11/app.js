var app = angular.module('app',[]);

app.controller('PokemonCtrl',function($scope){
	$scope.title = "My Pokemons";
	$scope.pokemons = [
		{name: 'Pikachu', power: 100},
		{name: 'Charmander', power: 95},
		{name: 'Bulbasaur', power: 95},
		{name: 'Charizard', power: 100},
		{name: 'Squirtle', power: 95}
	];
});