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
  .module('myApp', ['ngRoute'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'myCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
