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
            $scope.createPage = function(){
               $location.path('/dashboard/managepage/createpage') 
            }

            // $scope.params = {}
            // $scope.current = 0
            // $scope.limit = 1
            // var sortBy = 'createdOn'
            // var order = 'asc'
            // var postType = 'all' 
            // function getData(newValue, oldValue) {
            //     if(newValue !== oldValue){
            //         console.log(newValue+ 'fetch'+ oldValue)
            //     }
            //     var offset = $scope.params.offset || 0;
            //     var page = Math.floor(offset / $scope.limit);
            //     DataService.getPageswithparams({
            //         current     : page,
            //         limit       : $scope.limit,
            //         sortBy      : sortBy,
            //         order       : order,
            //         postType    : postType
            //     }).then(function (response) {
            //          if(response.data.errorCode=='0')
            //          {
            //             $scope.pages = response.data.response
            //             $scope.params.total = response.data.total
            //          }
            //     });
            // }
            // $scope.$watch('params.offset', getData);
            // $scope.$watch('params.sortBy', getData, true);

            DataService.getPages().then(function (response) {
                     if(response.data.errorCode=='0')
                     {
                        $scope.pages = response.data.response
                        $scope.params.total = response.data.total
                     }
            });
        }]);


})();