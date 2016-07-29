var shipApp = angular.module('shipApp', ['ngRoute']);

// configure routes
shipApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/views/login.html',
            controller  : 'loginController'
        })

        // route for the about page
        .when('/dashboard', {
            templateUrl : 'app/views/dashboard.html',
            controller : 'chartController'
        })

        // route for the contact page
        .when('/list', {
            templateUrl : 'app/views/list.html',
            controller: 'plistController'
        })

        // route for the contact page
        .when('/project', {
            templateUrl : 'app/views/project.html',
            //controller : 'pdetailsController'
        });
});