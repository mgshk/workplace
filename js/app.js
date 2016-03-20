angular.module('app', [
	'ui.router',
	'app.configs',
	'app.controllers',
	'app.factories',
	'app.services',
	'angular-storage'
]);

angular.module('app.controllers', [
	'app.controller.benefitsCtrl',
	'app.controller.birthdayCtrl',
	'app.controller.compensationCtrl',
	'app.controller.dashboardCtrl',
	'app.controller.directoryCtrl',
	'app.controller.expensesCtrl',
	'app.controller.favoritiesCtrl',
	'app.controller.homeCtrl',
	'app.controller.loginCtrl',
	'app.controller.forgetPasswordCtrl',
	'app.controller.signUpCtrl',
	'app.controller.myTeamCtrl',
	'app.controller.payCtrl',
	'app.controller.personalInformationCtrl',
	'app.controller.teamPerformanceCtrl',
	'app.controller.timeOffCtrl'
]);

angular.module('app.factories', [
	'app.factory.loginFactory',
	'app.factory.userFactory'
]);

angular.module('app.services', [
	'app.service.loginService',
	'app.service.userService'
]);
