var app=angular.module('codeRobo-Endless',[]);
app.factory('Endless', function($http,ngProgressFactory) {
	  var Endless = function() {
	    this.items = [];
	    this.busy = false;
	    this.after = null;
	  };
	  Endless.prototype.addnewPost = function(newpost) {
	  	this.items.push(newpost);
	  	this.url='posts/addPost';
		var promise=$http.post(this.url,newpost).success(function (data) {
			return data;
	    });
	    return promise;
	  };
	  Endless.prototype.nextPage = function() {
	  	Endless.progressbar = ngProgressFactory.createInstance();
        Endless.progressbar.start();
	    if (this.busy) return;
	    this.busy = true; 

	    var url = "posts/" + hash;
	    if(this.after)
	    {
	    	url+= "/after/"+this.after;
	    }
	    $http.get(url).success(function(data) {
	    	Endless.progressbar.complete();
	    	if(data.errorCode==0)
	    	{
		    	var items = data.response.data;
			      for (var i = 0; i < items.length; i++) {
			      	this.items.push(items[i]);
			      }
		      	this.after = data.response.after;
		      	this.busy = false;
	      	}
	    }.bind(this)); //
	  };

	  return Endless;
	});