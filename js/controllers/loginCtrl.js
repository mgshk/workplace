angular.module('app.controller.loginCtrl', [])
	.controller('loginCtrl', ['$scope', '$state', 'store', 'loginFactory', function($scope, $state, store, loginFactory) {
	
	$scope.user = {};
	
	$scope.login = function() {
		var response = loginFactory.userLogin($scope.user);
		$state.go('/home');
	}
}]);