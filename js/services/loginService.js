angular.module('app.service.loginService', [])
	.service('loginService', function() {
	
	this.userLogin = function(user) {
		return {
			username : user.uname
		}
	};
});