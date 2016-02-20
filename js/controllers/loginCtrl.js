angular.module('app.controller.loginCtrl', [])
	.controller('loginCtrl', ['$scope', '$state', 'store', 'loginFactory', '$timeout', function($scope, $state, store, loginFactory, $timeout) {
	
	$scope.user = {};
	
	$scope.login = function() {
		var mockUser = {
			email : 'user@gmail.com',
			password : 'workday'
		}
		$scope.showLogin = false;
		if($scope.user.useremail === mockUser.email && $scope.user.password === mockUser.password){
			$state.go('/home');
		}else{
			$scope.showLogin = true;
			$scope.user = {};
			$scope.userForm.$setPristine();
            $scope.userForm.$setUntouched();
            $timeout(hideError, 4000);
		}
		//var response = loginFactory.userLogin($scope.user);
		//$state.go('/dashboards');
	}

	function hideError(){
		$scope.showLogin = false;
	}

}]);