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
	'app.factory.loginFactory'
]);

angular.module('app.services', [
	'app.service.loginService'
]);