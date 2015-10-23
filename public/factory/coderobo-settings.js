var app=angular.module('codeRobo-settings',[]);
app.factory('settingsService', function ($http) {
		var pageSettings = {}
	    return {
	    	getSettings: function () {
	        	this.url='settings/getMenu/';
				var promise=$http.get(this.url).success(function (data) {
					pageSettings = data;
					return data;
	            });
	            return promise;
	        },
	        getType: function (pageSettings,type) {
	        	var template ={}
	        	if(pageSettings[type].themes == 'default'){
	        		if(type == 'admin')
	        		{
	        			template.header = 'admin/templates/header.html'
	        			template.sidebar = 'admin/templates/sidebar.html'
						template.footer = 'admin/templates/footer.html'
	        		}
	        		else
	        		{
						template.header = 'views/templates/header.html'
						template.footer = 'views/templates/footer.html'
					}
				}
				else{
					template.header = $scope.pageSettings.themes+'header.html'
					template.footer = $scope.pageSettings.themes+'footer.html'
				}
				return template;
	        }
	    }
});

	
	