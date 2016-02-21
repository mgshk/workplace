angular.module('app.service.loginService', [])
	.service('loginService', ['$http', function($http) {
		
		this.userLogin = function(user) {
			return $http.get('stubs/userdetails.json', user).then(function (resp) {
				return resp;
			});		
		}
}]);