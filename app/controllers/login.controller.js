//login controller
shipApp.controller('loginController', function ($scope, $location) {
	$scope.submit = function() {
	var uname = $scope.username;
	var pass = $scope.password;
	if($scope.username == 'admin' && $scope.password == 'admin')
		{
 		 $location.path('/dashboard');
		}
	};
});