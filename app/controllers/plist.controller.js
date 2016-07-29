// project llist controller
shipApp.controller('plistController', function ($scope, ppService) {
		//console.log(ppService.projectProperties);

		$scope.projectName = ppService.projectProperties('projectName', $scope.projectList);
		$scope.theme = ppService.projectProperties('theme', $scope.projectList);
		$scope.projectCateogry = ppService.projectProperties('projectCateogry', $scope.projectList);
		$scope.concernedPort = ppService.projectProperties('concernedPort', $scope.projectList);
		$scope.concernedState = ppService.projectProperties('concernedState', $scope.projectList);
		$scope.pstatus = ppService.projectProperties('status', $scope.projectList);
});