(function () {
	"use strict";
	var hash;
    var app=angular.module('codeRobo-createpost',[]);
    
    app.controller('createpostController', 
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
        // 'ngProgressFactory',
        // 'Endless',
    	function($http, $scope, $routeParams, DataService, settingsService, $location,$rootScope,$cookies,$cookieStore,$state, $stateParams){
            $scope.user = {}
    	    $scope.postID = $routeParams.postID

    	    $rootScope.$$childHead.homescreen = false;
		    $rootScope.$$childHead.dashscreen = true;
            $scope.newpost={}
            $scope.userHash =   $cookies.get('userSession');
            hash = $scope.userHash

            $scope.savePost = function (){
                $scope.newpost.createdOn=new Date().getTime()
                $scope.newpost.userID=$scope.userHash;
                console.log($scope.newpost)
                // // $scope.myPosts.push(this.newpost);
                // $scope.itsMe.postCount++;

                // $scope.endless.addnewPost($scope.newpost).success(function(response){
                //     console.log(response);
                // })
                // $scope.newpost={}

                DataService.addPost($scope.newpost).then(function (response) {
                 if(response.data.errorCode=='0')
                 {
                    console.log(response)
                     // ngNotify.set('Post Created Successfully');
                 }
                 $scope.newpost={}
                });
                
                
             }
            
    }]);


})();