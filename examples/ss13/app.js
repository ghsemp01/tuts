var app = angular.module('app',[]);

app.controller('CalcCtrl',function($scope){
	$scope.num1= 0;
	$scope.num2 = 0;
	$scope.getSum = function(){
		alert(parseInt($scope.num1) + parseInt($scope.num2));
	};
});