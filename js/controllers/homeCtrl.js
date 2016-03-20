angular.module('app.controller.homeCtrl', [])
	.controller('homeCtrl', ['$scope', 'store', 'userFactory', function($scope, store, userFactory) {
	
	var userId = store.get('userId');
	
	userFactory.getUserDetail(userId).then(function (userDetail){
		$scope.userDetail = userDetail;
	});
}]);
