//login controller
shipApp.controller('loginController', function ($scope, $location, $window, $cookieStore) {
	$scope.submit = function() {

		if($scope.username == 'admin' && $scope.password == 'admin'){
			$cookieStore.put("uname", $scope.username);
			$cookieStore.put("password", $scope.password);
 			$location.path('/dashboard');
 			alert("Welcome Admin - You have logedin successfully");
		}
		else {
			alert("Access Denied - Wrong authentications");
		}
	};
});