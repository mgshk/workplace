angular.module('app.configs', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    
	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('/benefits', {
			url: '/benefits',
			templateUrl: 'templates/benefits.html',
			controller: 'benefitsCtrl',
			data: {
			  requiresLogin: true
			}
		}).state('/birthday', {
			url: '/birthday',
			templateUrl: 'templates/birthday.html',
			controller: 'birthdayCtrl',
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
			  requiresLogin: true
			}
		}).state('/login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'loginCtrl'
		}).state('/forget_password', {
			url: '/forget_password',
			templateUrl: 'templates/forget_password.html',
			controller: 'forgetPasswordCtrl'
		}).state('/signup', {
			url: '/signup',
			templateUrl: 'templates/signup.html',
			controller: 'signUpCtrl'
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
		})
		.state('/add_employee', {
			url: '/add_employee',
			templateUrl: 'templates/add_employee.html',
			controller: 'addEmployeeCtrl',
			data: {
			  requiresLogin: false
			}
		})
		.state('/view_employees', {
			url: '/view_employees',
			templateUrl: 'templates/view_employees.html',
			controller: 'viewEmployeesCtrl',
			data: {
			  requiresLogin: false
			}
		});
}).run(function($rootScope, $state, store, localStorage) {
	$rootScope.$on('$stateChangeStart', function(e, to) {
		
		//if (to.data && to.data.requiresLogin) {
		//	if (!store.get('userId')) {
		//		e.preventDefault();
		//		$state.go('/login');
		//	}
		//}
	});
});
