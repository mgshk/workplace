angular.module('app.controller.loginCtrl', [])
	.controller('loginCtrl', ['$scope', '$state', 'store', 'loginFactory', function($scope, $state, store, loginFactory) {
	
	$scope.user = {};
	
	$scope.login = function() {
		var mockUser = {
			email : 'user@gmail.com',
			password : 'workday'
		}
		$scope.showLogin = false;
		if($scope.user.useremail === mockUser.email && $scope.user.password === mockUser.password){
			$state.go('/dashboards');
		}else{
			$scope.showLogin = true;
		}
		//var response = loginFactory.userLogin($scope.user);
		//$state.go('/dashboards');
	}
}]);