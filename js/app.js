angular.module('app', [
	'ui.router',
	'angular-jwt',
	'app.configs',
	'app.controllers',
	'app.factories',
	'app.services',
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
			controller: 'benefitsCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/birthdays', {
			url: '/birthdays',
			templateUrl: 'templates/birthdays.html',
			controller: 'birthdaysCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/compensation', {
			url: '/compensation',
			templateUrl: 'templates/compensation.html',
			controller: 'compensationCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/dashboards', {
			url: '/dashboards',
			templateUrl: 'templates/dashboards.html',
			controller: 'dashboardCtrl',
			data: {
			  requiresLogin: false
			}
		}).state('/directory', {
			url: '/directory',
			templateUrl: 'templates/directory.html',
			controller: 'directoryCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/expenses', {
			url: '/expenses',
			templateUrl: 'templates/expenses.html',
			controller: 'expensesCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/favorities', {
			url: '/favorities',
			templateUrl: 'templates/favorities.html',
			controller: 'favoritiesCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl',
			data: {
			  requiresLogin: false
			}
		}).state('/login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'loginCtrl'
		}).state('/my_team', {
			url: '/my_team',
			templateUrl: 'templates/my_team.html',
			controller: 'myTeamCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/pay', {
			url: '/pay',
			templateUrl: 'templates/pay.html',
			controller: 'payCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/personal_information', {
			url: '/personal_information',
			templateUrl: 'templates/personal_information.html',
			controller: 'personalInformationCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/team_performance', {
			url: '/team_performance',
			templateUrl: 'templates/team_performance.html',
			controller: 'teamPerformanceCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/time_off', {
			url: '/time_off',
			templateUrl: 'templates/time_off.html',
			controller: 'timeOffCtrl',
			data: {
			  requiresLogin: true
			}
		});
}).run(function($rootScope, $state, store, jwtHelper) {
	$rootScope.$on('$stateChangeStart', function(e, to) {
		
		if (to.data && to.data.requiresLogin) {
			if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
				e.preventDefault();
				$state.go('/login');
			}
		}
	});
});