'use strict';

/**
 * @ngdoc overview
 * @name selectionApp
 * @description
 * # selectionApp
 *
 * Main module of the application.
 */
var app = angular.module('selectionApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngRoute'
  ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/submit', {
        templateUrl: 'views/submit.html',
        controller: 'SubmitCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
