var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("in controller...");
	$scope.newUser = {};
	$scope.info = "";

	$scope.users = [
		{username: "Программисты", fullName: "Имя", email:"100"},
		{username: "Администраторы", fullName: "Имя", email:"50"},
		{username: "Менеджеры", fullName: "Имя", email:"10"}
	];

	$scope.saveUser = function(){
		console.log("Saving...");
		$scope.users.push($scope.newUser);
		$scope.info = "Информация Успешно добавенна!";
		$scope.newUser = {};
	};

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	$scope.deleteUser = function(){
		console.log($scope.users.indexOf($scope.clickedUser));
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.info = "Удалено!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});