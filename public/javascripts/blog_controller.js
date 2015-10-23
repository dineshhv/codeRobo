(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-blogView',[]);
    
    app.controller('blogController', 
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
    	function($http, $scope, $routeParams, DataService, settingsService, $location,$rootScope,$state, $stateParams){

    	$scope.blogSettings = $rootScope.blogSettings;
        $scope.topmenu = $rootScope.blogSettings.top_menu;
		console.log($scope.topmenu);
		$scope.templateLoc = settingsService.getType($rootScope.blogSettings,$stateParams.type);
    }]);


})();