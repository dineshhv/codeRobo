(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-managepost',[]);
    
    app.controller('managepostController', 
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
            // console.log($state)
            // console.log($state.current.name)
    	    $rootScope.$$childHead.homescreen = false;
		    $rootScope.$$childHead.dashscreen = true;
            $scope.createPost = function(){
               $location.path('/dashboard/managepost/createpost') 
            }    
            
    }]);


})();