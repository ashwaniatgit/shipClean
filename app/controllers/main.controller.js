shipApp.controller('mainController', function ($scope, $window, $cookies, dataService) {
	dataService.async().then(function(data) {
		$scope.projectList = data;
	}) //data service

    // project details
    $scope.projectDetails = function(idPassedFromNgClick){
        console.log(idPassedFromNgClick);
        for(i=0; i<$scope.projectList.length; i++)
        {
          if($scope.projectList[i]['projectId'] === idPassedFromNgClick)
          {
            $scope.pdname = $scope.projectList[i]['projectName'];
            $scope.pdid = $scope.projectList[i]['projectId'];
            $scope.pdtheme = $scope.projectList[i]['theme'];
            $scope.pdcat = $scope.projectList[i]['projectCateogry'];
            $scope.pdport = $scope.projectList[i]['concernedPort'];
            $scope.pdagency = $scope.projectList[i]['implementingAgency'];
            $scope.pdstate = $scope.projectList[i]['concernedState'];
            $scope.pdstatus = $scope.projectList[i]['status'];

          }
        }
        console.log($scope.pdname);
    }

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }
    //---

    $window.onbeforeunload = function() {
            // Clearing all cookies now!
            $cookies.remove("uname"); 
            $cookies.remove("password");
    };
});
