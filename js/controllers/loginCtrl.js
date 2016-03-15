angular.module('app.controller.loginCtrl', [])
	.controller('loginCtrl', ['$scope', '$state', 'store', 'loginFactory', '$timeout', function($scope, $state, store, loginFactory, $timeout) {
	
	$scope.user = {};
	$scope.showLogin = false;
	
	$scope.login = function() {
		loginFactory.userLogin($scope.user).then(function (resp) {
			if($scope.user.useremail === resp.email && $scope.user.password === resp.password){
				store.set('id_token', 'test');
				$state.go('/home');
			}else{
				$scope.showLogin = true;
				$scope.user = {};
				$scope.userForm.$setPristine();
				$scope.userForm.$setUntouched();
				$timeout(hideError, 4000);
			}
		});
	}
	
	$scope.signup = function() {
		$state.go('/signup');
	}

	function hideError(){
		$scope.showLogin = false;
	}

}]);