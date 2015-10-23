(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-pageView',[]);
    
    app.controller('pageController', 
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
        
        $rootScope.$$childHead.homescreen = false;
		$rootScope.$$childHead.dashscreen = true;
        $scope.page = $stateParams.name
		$scope.templateLoc = settingsService.getType($rootScope.blogSettings,$stateParams.type);
        
    }]);


})();