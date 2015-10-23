(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-articlesView',[]);
    
    app.controller('articlesController', 
    	[
    	'$http',
    	'$scope', 
    	'$routeParams', 
    	'DataService',
        'settingsService', 
    	'$location',
    	'$rootScope',
        '$state', 
        '$stateParams',
    	function($http, $scope, $routeParams, DataService, settingsService,  $location,$rootScope,$state, $stateParams){

    	$scope.blogSettings = $rootScope.blogSettings;

    	$rootScope.$$childHead.homescreen = false;
		$rootScope.$$childHead.dashscreen = true;
        $scope.category = $stateParams.category;
		$scope.page = $stateParams.name
		$scope.templateLoc = settingsService.getType($rootScope.blogSettings,$stateParams.type);
    }]);


})();