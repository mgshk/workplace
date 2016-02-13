angular.module('app', [
	'ui.router',
	'angular-jwt',
	'app.configs',
	'app.controllers',
	'angular-storage'
]);

angular.module('app.configs', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
    
    $urlRouterProvider.otherwise('/login');
	
	jwtInterceptorProvider.tokenGetter = function(store) {
		return store.get('jwt');
	}

	$httpProvider.interceptors.push('jwtInterceptor');
    
    $stateProvider
		.state('/benefits', {
			url: '/benefits',
			templateUrl: 'templates/benefits.html',
			controller: 'benefitsCtrl'
		}).state('/birthdays', {
			url: '/birthdays',
			templateUrl: 'templates/birthdays.html',
			controller: 'birthdaysCtrl'
		}).state('/compensation', {
			url: '/compensation',
			templateUrl: 'templates/compensation.html',
			controller: 'compensationCtrl'
		}).state('/dashboards', {
			url: '/dashboards',
			templateUrl: 'templates/dashboards.html',
			controller: 'dashboardCtrl'
		}).state('/directory', {
			url: '/directory',
			templateUrl: 'templates/directory.html',
			controller: 'directoryCtrl'
		}).state('/expenses', {
			url: '/expenses',
			templateUrl: 'templates/expenses.html',
			controller: 'expensesCtrl'
		}).state('/favorities', {
			url: '/favorities',
			templateUrl: 'templates/favorities.html',
			controller: 'favoritiesCtrl'
		}).state('/home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		}).state('/login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'loginCtrl'
		}).state('/my_team', {
			url: '/my_team',
			templateUrl: 'templates/my_team.html',
			controller: 'myTeamCtrl'
		}).state('/pay', {
			url: '/pay',
			templateUrl: 'templates/pay.html',
			controller: 'payCtrl'
		}).state('/personal_information', {
			url: '/personal_information',
			templateUrl: 'templates/personal_information.html',
			controller: 'personalInformationCtrl'
		}).state('/team_performance', {
			url: '/team_performance',
			templateUrl: 'templates/team_performance.html',
			controller: 'teamPerformanceCtrl'
		}).state('/time_off', {
			url: '/time_off',
			templateUrl: 'templates/time_off.html',
			controller: 'timeOffCtrl'
		});
});