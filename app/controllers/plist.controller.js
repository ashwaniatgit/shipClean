// project llist controller
shipApp.controller('plistController', function ($scope, ppService, $location, $cookieStore) {
	var uname = $cookieStore.get('uname');
	var pass = $cookieStore.get('password');
	if(uname === 'admin' && pass === 'admin') {		
		//console.log(ppService.projectProperties);
		$scope.projectName = ppService.projectProperties('projectName', $scope.projectList);
		$scope.theme = ppService.projectProperties('theme', $scope.projectList);
		$scope.projectCateogry = ppService.projectProperties('projectCateogry', $scope.projectList);
		$scope.concernedPort = ppService.projectProperties('concernedPort', $scope.projectList);
		$scope.concernedState = ppService.projectProperties('concernedState', $scope.projectList);
		$scope.pstatus = ppService.projectProperties('status', $scope.projectList);
	}
	else {
		alert('Please login to access Projects List');
		$location.path('/');
	}
});