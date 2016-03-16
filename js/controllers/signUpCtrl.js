angular.module('app.controller.signUpCtrl', [])
	.controller('signUpCtrl', function($scope) {
	
	$scope.user = {};
	
	$scope.signUp = function() {
		loginFactory.signUp($scope.user).then(function (resp) {
			if (resp.status){
				$scope.successMsg = resp.msg;
				
				$timeout(function (){
					$state.go('/login');
					$scope.successMsg = '';
				}, 4000);
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
});