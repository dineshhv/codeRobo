(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-homeView',[]);
    
    app.controller('homeController', 
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
        $scope.postID = $routeParams.postID

    	$rootScope.$$childHead.homescreen = false;
		$rootScope.$$childHead.dashscreen = true;
		$scope.templateLoc = settingsService.getType($rootScope.blogSettings,$stateParams.type);
        $rootScope.$$childHead.layout = ''
    }]);


})();