(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-admindashboard',[]);
    
    app.controller('dashboardController', 
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
        // $scope.user={}
        $scope.profileShow = false;
        console.log($routeParams)
    	$rootScope.$$childHead.homescreen = false;
		$rootScope.$$childHead.dashscreen = true;
        $rootScope.$$childHead.layout = 'admin/'
        $rootScope.$$childHead.type = 'admin'
        $scope.templateLoc = settingsService.getType($rootScope.blogSettings,$stateParams.type);
        console.log($scope.templateLoc)
        $scope.showProfile = function(){
            $scope.profileShow = !$scope.profileShow;
        }
    }]);


})();