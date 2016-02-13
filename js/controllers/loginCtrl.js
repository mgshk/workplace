angular.module('app.controller.loginCtrl', [])
	.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
	
	$scope.login = function(uname, pwd) {
		$state.go('/home');
	}
}]);