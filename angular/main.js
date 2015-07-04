'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:myCtrl
 * @description
 * # MainCtrl
 * Controller of the provaApp
 */
angular.module('myApp')
      .controller(
      						'myCtrl',
      						function($scope, $http, $window) {
 $scope.awesomeThings = [
        'AngularJS',
    ];
      							$scope.reset = function() {
      								$scope.longURL = "";
      								$scope.shortURL = "";
      							};

      							$scope.render = function() {
      								return "http://localhost:4567/getLongUrl?shortUrl="
      										+ $scope.shortUrl;
      							}

      							$scope.fun = function() {
      								$http
      										.get($scope.render())
      										.success(
      												function(response) {
      													$scope.assoc = "long URL associato: ";
      													$scope.nam = response.data;
      													if ($scope.nam.err == "ok") {
      														$scope.name = $scope.nam.longUrl;
      													} else {
      														$scope.name = $scope.nam.err;
      													}
      												});
      							}

      							$scope.save = function() {
      								return "http://localhost:4567/addShortUrl?shortUrl="
      										+ $scope.shortURL
      										+ "&longUrl="
      										+ $scope.longURL;
      							}

      							$scope.salva = function() {
      								$http
      										.get($scope.save())
      										.success(
      												function(response) {
      													//EFFETTUARE IL CONTROLLO SUI CAMPI VUOTI
      													$scope.res = response.data;
      													if ($scope.res.err != "ok") {
      														$scope.ris = $scope.res.err;
      													} else {
      														$scope.ris = "Il long URL '"
      																+ $scope.longURL
      																+ "' e lo short URL '"
      																+ $scope.shortURL
      																+ "' sono stati associati con successo!";
      														$scope.reset();
      													}
      												});
      							}

      							$scope.asd = function() {
      								return "http://localhost:4567/addClick?shortUrl="
      										+ $scope.shortUrl;
      							}

      							$scope.vai = function() {
      								var e = $scope.name;
      								$scope.w = e;
      								$http.get($scope.asd()).success(//se clicco su go prima che su show long url, mi apre pagina bianca
      								function(response) {
      									$scope.aggiungi = response.data.err;
      									if ($scope.aggiungi == "ok") {
      										$window.open($scope.w);
      									} else {
      										$scope.errore = $scope.aggiungi;
      									}
      								});
      							}

      							$scope.perStats = function() {
      								return "http://localhost:4567/getStats?shortUrl="
      										+ $scope.shortUrl;
      							}

      							$scope.viewStats = function() {
      								$http.get($scope.perStats()).success(
      										function(risposta) {
      											$scope.nom = risposta.data;
      											if ($scope.nom.err == "ok") {
      												$scope.nome = $scope.nom.stats;
      											} else {
      												$scope.erro = $scope.nom.err; //MODIFICARE!!!
      											}
      										});
      							}

      							$scope.generate = function() {
      								return "http://localhost:4567/generateShortUrl?longUrl="
      										+ $scope.longURL;
      							}
      							$scope.gen = function() {
      								$http
      										.get($scope.generate())
      										.success(
      												function(risposta) {
      													$scope.ss = risposta.data;
      													if ($scope.ss.err == "ok") {
      														$scope.nuovo = $scope.ss.shortUrl;
      														$scope.shortURL = angular
      																.copy($scope.nuovo);
      													}
      												});
      							};
      						});
      		//inserire un tasto resetta per il visualizza long url?
