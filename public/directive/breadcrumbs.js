(function(){
	var app=angular.module('codeRobo-breadcrumb',[ ]);

	app.directive('breadCrumb',function($state){
		return {
			restrict: 'E',
			templateUrl:'admin/breadCrumb.html',
			controller: function($scope){
				$scope.breadCrumbs = [];
				angular.forEach($state.$current.path, function(value, key) {
					var temp ={}

					temp.name=value.self.name.split('.');
					temp.nameSpace = value.self.UIbreadcrumb; //temp.name[temp.name.length-1]
					temp.url = value.url.segments[0];
					$scope.breadCrumbs.push(temp)
					
				});
				// console.log($scope.breadCrumbs)
			},
			controllerAs: 'breadCrumbs'
		};
	});
})();