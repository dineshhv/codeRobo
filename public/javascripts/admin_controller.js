(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-adminlogin',[]);
    
    app.controller('adminController', 
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
        console.log($stateParams)
        $scope.user = {}
    	$scope.postID = $routeParams.postID

    	$rootScope.$$childHead.homescreen = false;
		$rootScope.$$childHead.dashscreen = true;
        $scope.templateLoc = settingsService.getType($rootScope.blogSettings,$stateParams.type);
        $scope.userLogin=function(){
            
            DataService.userlogin($scope.user.username,$scope.user.password).then(function (response) {
                if(response.data.errorCode==0)
                {
                    $cookieStore.put('userSession', response.data.UHash);
                    $cookies.put('userSession', response.data.UHash);
                    $location.path('/dashboard')
                }
            });
            $scope.user={};
        };
		

    }]);


})();