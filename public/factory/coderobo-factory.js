var app=angular.module('codeRobo-factory',[]);
app.factory('DataService', function ($http) {
		
	    return {
	    	getSettings: function () {
	        	this.url='settings/getMenu/';
				var promise=$http.get(this.url).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        userlogin: function (username,password) {
	        	this.url='users/login';
				var promise=$http.post(this.url,{username: username,password: password}).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        getProfile: function (Hash) {
	        	this.url='board/info/'+Hash;
				var promise=$http.get(this.url).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        getPosts: function (Hash) {
	        	this.url='posts/'+Hash;
				var promise=$http.get(this.url).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        searchPosts: function (query) {
	        	this.url='posts/search/'+query;
				var promise=$http.get(this.url).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        getPostsbyID: function (postID) {
	        	this.url='posts/viewby/'+postID;
				var promise=$http.get(this.url).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        getrelatedPost: function (tags,postID) {
	        	this.url='posts/'+postID+'/related/'+tags;
				var promise=$http.get(this.url).success(function (data) {
					return data;
	            });
	            return promise;
	        },
	        addPost: function (newpost) {
	        	this.url='posts/addPost';
				var promise=$http.post(this.url,newpost).success(function (data) {
					return data;
	            });
	            return promise;
	        }
	    }
	});

	
	