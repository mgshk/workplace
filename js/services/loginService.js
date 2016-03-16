angular.module('app.service.loginService', [])
	.service('loginService', ['$http', function($http) {
		
		this.userLogin = function(user) {
			return $http.get('', user).then(function (resp) {
				return resp;
			});		
		}
		
		this.forgotPassword = function(user) {
			return $http.get('', user).then(function (resp) {
				return resp;
			});		
		}
		
		this.signUp = function(user) {
			return $http.get('', user).then(function (resp) {
				return resp;
			});		
		}
}]);