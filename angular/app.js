'use strict';

/**
 * @ngdoc overview
 * @name provaApp
 * @description
 * # provaApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'myCtrl'
      })
      .otherwise({
        redirectTo: '/main.html'
      });
  });

