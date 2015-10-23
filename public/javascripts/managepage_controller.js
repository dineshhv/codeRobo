(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-managepage',[]);
    
    app.controller('managepageController', 
    	[
    	'$http',
    	'$scope', 
    	'$routeParams', 
    	'DataService',
        'settingsService', 
    	'$location',
    	'$rootScope',
        '$cookies',
        '$cookieStore',
        '$state', 
        '$stateParams',
    	function($http, $scope, $routeParams, DataService, settingsService, $location,$rootScope,$cookies,$cookieStore,$state, $stateParams){
            $scope.user = {}
    	    $scope.postID = $routeParams.postID

    	    $rootScope.$$childHead.homescreen = false;
		    $rootScope.$$childHead.dashscreen = true;
            
            
    }]);


})();