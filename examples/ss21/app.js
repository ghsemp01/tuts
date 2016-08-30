var app = angular.module('app',["ngRoute"]);

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
app.controller('UserCtrl',function($scope){
	$scope.users = [
		{
			name: 'Jayson Temporas',
			 level: 25,
			 description: "Lorem ipsum dolor sit amet, pri eu placerat neglegentur. Nec assum epicuri tractatos ad, vim ei velit bonorum. Posse eripuit vix ea, rebum tollit accusamus duo no. Aliquid consulatu ullamcorper in mei. Aperiam alterum et vix, mel ut copiosae necessitatibus. Ne menandri conceptam his, quidam doctus no nec.",
			 imageUrl: "images/temp.jpg"
		},
		{
			name: 'Michael Badilla', 
			level: 10,
			description: "Lorem ipsum dolor sit amet, pri eu placerat neglegentur. Nec assum epicuri tractatos ad, vim ei velit bonorum. Posse eripuit vix ea, rebum tollit accusamus duo no. Aliquid consulatu ullamcorper in mei. Aperiam alterum et vix, mel ut copiosae necessitatibus. Ne menandri conceptam his, quidam doctus no nec.",
			imageUrl: "images/bads.jpg"
		},
		{
			name: 'Jeremiah Lachica', 
			level: 22,
			description: "Lorem ipsum dolor sit amet, pri eu placerat neglegentur. Nec assum epicuri tractatos ad, vim ei velit bonorum. Posse eripuit vix ea, rebum tollit accusamus duo no. Aliquid consulatu ullamcorper in mei. Aperiam alterum et vix, mel ut copiosae necessitatibus. Ne menandri conceptam his, quidam doctus no nec.",
			imageUrl: "images/jer.jpg"	
		}
	];
});
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