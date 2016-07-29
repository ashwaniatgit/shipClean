shipApp.factory('dataService', ['$http', function ($http) {
	var dataService = {
		async: function() {
			// $http returns a promise, which has a then function, which also returns a promise
			var promise = $http.get('assets/data/data.json').then(function (response) {
				//console.log(response);
				return response.data;
			});
			// Return the promise to the controller
      		return promise;
		}
	};
	return dataService;
}]);