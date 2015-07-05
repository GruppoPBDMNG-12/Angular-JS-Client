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
                    								};

                    								$scope.fun = function() {
                    									$http
                    											.get($scope.render())
                    											.success(
                    													function(resp) {
                    														$scope.ris = "Long URL: ";
                    														$scope.nam = resp.data;
                    														if ($scope.nam.err == "ok") {
                    															$scope.lon = $scope.nam.longUrl;
                    															$scope.nome = "";
                    															$scope.erro = "";
                    														} else {
                    															$scope.lon = $scope.nam.err;
                    															$scope.nome = "";
                    															$scope.ris = "";
                    															$scope.erro = "";
                    														}
                    													}).error(function(resp) {
                    												$scope.boh = "errore";
                    											});
                    								};

                    								$scope.save = function() {
                    									return "http://localhost:4567/addShortUrl?shortUrl="
                    											+ $scope.shortURL
                    											+ "&longUrl="
                    											+ $scope.longURL;
                    								};

                    								$scope.salva = function() {
                    									$http
                    											.get($scope.save())
                    											.success(
                    													function(risp) {
                    														$scope.res = risp.data;
                    														if ($scope.res.err != "ok") {
                    															$scope.ris = $scope.res.err;
                    														} else {
                    															$scope.stringAssociation = "Long URL '"
                    																	+ $scope.longURL
                    																	+ "' e Short URL 'localhost:4567/"
                    																	+ $scope.shortURL
                    																	+ "' associated!";
                    															$scope.reset();
                    														}
                    													}).error(function(risp) {
                    												$scope.res = "errore";
                    											});
                    								};

                    								$scope.asd = function() {
                    									return "http://localhost:4567/addClick?shortUrl="
                    											+ $scope.shortUrl;
                    								};

                    								$scope.vai = function() {
                    									var e = $scope.lon;
                    									$scope.w = e;
                    									$http
                    											.get($scope.asd())
                    											.success(
                    													//se clicco su go prima che su show long url, mi apre pagina bianca
                    													function(response) {
                    														$scope.aggiungi = response.data;
                    														if ($scope.aggiungi.err == "ok") {
                    															$scope.apri = $scope.aggiungi.longUrl;
                    															$window
                    																	.open($scope.apri);
                    														} else {
                    															$scope.errore = $scope.aggiungi;
                    														}
                    													}).error(
                    													function(response) {
                    														$scope.boh = "errore";
                    													});
                    								};

                    								$scope.perStats = function() {
                    									return "http://localhost:4567/getStats?shortUrl="
                    											+ $scope.shortUrl;
                    								};

                    								$scope.viewStats = function() {
                    									$http
                    											.get($scope.perStats())
                    											.success(
                    													function(risposta) {
                    														$scope.nom = risposta.data;
                    														if ($scope.nom.err == "ok") {
                    															$scope.nome = $scope.nom.stats;
                    															$scope.erro = "";
                    															$scope.lon = "";
                    															$scope.ris = "";
                    														} else {
                    															$scope.erro = $scope.nom.err;
                    															$scope.nome = "";
                    															$scope.ris = "";
                    															$scope.lon = "";
                    														}
                    													}).error(
                    													function(risposta) {
                    														$scope.boh = "errore";
                    													});
                    								};

                    								$scope.generate = function() {
                    									return "http://localhost:4567/generateShortUrl?longUrl="
                    											+ $scope.longURL;
                    								};

                    								$scope.gen = function() {
                    									$http
                    											.get($scope.generate())
                    											.success(
                    													function(risposta) {
                    														$scope.ss = risposta.data;
                    														if ($scope.ss.err == "ok") {
                    															$scope.nuovo = $scope.ss.shortUrl;
                    															$scope.shortURL = $scope.nuovo;
                    														}
                    													}).error(
                    													function(risposta) {
                    														$scope.boh = "errore";
                    													});
                    								};
                    							});

