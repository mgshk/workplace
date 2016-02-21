angular.module('app.factory.loginFactory', [])
	.factory('loginFactory', ['$q', 'loginService', function($q, loginService) {
	
	return {
		userLogin: userLogin
	};
	
	function userLogin (user) {
		var deferred = $q.defer();
		loginService.userLogin(user).then(function (resp) {
			deferred.resolve(resp.data.userdetails);
		}, function(error) {
			console.log(error.data);
		});
		return deferred.promise;
	}
}]);