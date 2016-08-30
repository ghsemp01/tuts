var app = angular.module('app',[]);

app.controller('FilterExampleCtrl',function($scope){
	$scope.num = 1040;
	$scope.str = "Hello World";
	$scope.names = ['Jay','Son','Temp','Semp'];
});

// filters 

app.filter('reverse', function() {
 	 return function(items) {
     return items.slice().reverse();
  };
});
