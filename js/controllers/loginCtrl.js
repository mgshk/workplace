angular.module('app.controller.loginCtrl', [])
	.controller('loginCtrl', ['$scope', '$state', 'store', 'loginFactory', '$timeout', function($scope, $state, store, loginFactory, $timeout) {
	
	$scope.user = {};
	
	$scope.login = function() {
		loginFactory.userLogin($scope.user).then(function (resp) {
			if (resp.isLogged){
				store.set('userId', resp.userId);
				$state.go('/home');
			} else {
				$scope.errorMsg = resp.msg;
				$scope.user = {};
				$scope.userForm.$setPristine();
				$scope.userForm.$setUntouched();
				
				$timeout(function () {
					$scope.errorMsg = '';
				}, 4000);
			}
		});
	}
}]);