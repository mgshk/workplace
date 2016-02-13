angular.module('app.factory.loginFactory', [])
	.factory('loginFactory', function(loginService) {
	
	function userLogin (user) {
		return loginService.userLogin(user);
	}
	
	return {
		userLogin: userLogin
	};
});