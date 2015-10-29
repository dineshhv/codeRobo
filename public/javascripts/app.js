	
	// create the module and name it scotchApp
	var app = angular.module('codeRobo', [
		'ngRoute',
		'ngCookies',
		'ngResource',
		'ngAnimate',
		'ui.router',
		'codeRobo-breadcrumb',
		// 'dateFilter',
		// 'tagjoiner',
		'codeRobo-factory',
		'codeRobo-factory',
		'codeRobo-settings',
		'codeRobo-homeView',
		'codeRobo-articlesView',
		'codeRobo-pageView',
		'codeRobo-blogView',
		'codeRobo-adminlogin',
		'codeRobo-admindashboard',
		'codeRobo-managepage',
		'codeRobo-managepost',
		'codeRobo-createpost',
		'codeRobo-createpage',
		'siTable',
		'uiRouterStyles',
		// 'ngProgress',
		'textAngular',
		// 'ngNotify',
		'ui.foundation.pagination',
		// 'infinite-scroll'
		]); //,'angularVideoBg'

	// configure our routes
	app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

	        $urlRouterProvider.otherwise('/home');

	        // States
	        $stateProvider
	          .state('home', {
	              	url: "/home",
	              	templateUrl: function(urlattr){
	                	return '/views/main.html';
	              	},
            		controller: 'homeController',
	              	params : { type: 'site' },
	          })
	          .state('pages', {
	              	url: "/pages/:name",
	              	templateUrl: function(urlattr){
	                	return '/views/page.html';
	              	},
            		controller: 'pageController',
	              	params : { type: 'site' },
	          })
	          .state('articles', {
	              	url: "/articles/:category",
	              	templateUrl: function(urlattr){
	                	return '/views/articles.html';
	              	},
            		controller: 'articlesController',
	              	params : { type: 'site' },
	          })
	          .state('admin', {
	              	url: "/admin",
	              	templateUrl: function(urlattr){
		                return '/admin/login.html';
		            },
		            controller: 'adminController',
		            controllerAs: 'adminloginCtrl',
	              	params : { type: 'admin' },
				  	data: {
					    css: 'admin/stylesheets/admin.css'
					}
	          })
	       //    .state('dashboard', {
		      //       url: "/dashboard",
	       //        	templateUrl: function(urlattr){
		      //           return '/admin/dashboard.html';
		      //       },
		      //       controller: 'dashboardController',
		      //       controllerAs: 'dashboardCtrl',
		      //       params : { type: 'admin', },
		      // })
			.state('dashboard', {
		            url: "/dashboard",
		            views: {
		            	'@':{
			              	templateUrl: '/admin/dashboard.html',
				            controller: 'dashboardController',
				            controllerAs: 'dashboardCtrl',
				        },
				        'dashContent@dashboard': {
				        	templateUrl: '/admin/dashboard-home.html',
				        	// controller: 'createpostController',
				        }
		        	},
		        	params : { type: 'admin'},
				  	UIbreadcrumb:{
				  		name: "Dashboard"
				  	},
				  	data: {
					    css: 'admin/stylesheets/admin.css'
					}
		      })
		      .state('dashboard.managepage', {
		            url: "/managepage",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/managepage.html',
				        controller: 'managepageController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Manage Page"
				  	}
		      })
		      .state('dashboard.managepage.createpage', {
		            url: "/createpage",
		            views: {
				      'dashContent@dashboard': {
				        templateUrl: '/admin/createpage.html',
				        controller: 'createpageController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Create Page"
				  	}
		      })
		      .state('dashboard.managepost', {
		            url: "/managepost",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/managepost.html',
				        controller: 'managepostController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Manage Post"
				  	},
				  	data: {
					    css: 'admin/stylesheets/admin.css'
					}
		      })
		      .state('dashboard.managepost.createpost', {
		            url: "/createpost",
		            views: {
				      'dashContent@dashboard': {
				        templateUrl: '/admin/createpost.html',
				        controller: 'createpostController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Create Post"
				  	}
		      })
		     .state('dashboard.media', {
		            url: "/media",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/media.html',
				        // controller: 'mediaController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Media"
				  	}
		      })
		      .state('dashboard.comments', {
		            url: "/comments",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/comments.html',
				        // controller: 'commentsController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Comments"
				  	}
		      })
		      .state('dashboard.links', {
		            url: "/links",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/links.html',
				        // controller: 'linksController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Links"
				  	}
		      })
		      .state('dashboard.appearance', {
		            url: "/appearance",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/appearance.html',
				        // controller: 'appearenceController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Appearance"
				  	}
		      })
		      .state('dashboard.user', {
		            url: "/user",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/user.html',
				        // controller: 'userController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "User"
				  	}
		      })
		      .state('dashboard.modules', {
		            url: "/modules",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/modules.html',
				        // controller: 'moduleController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Modules"
				  	}
		      })
		      .state('dashboard.settings', {
		            url: "/settings",
		            views: {
				      'dashContent': {
				        templateUrl: '/admin/settings.html',
				        // controller: 'settingsController',
				        params : { type: 'admin' }
				      }
				  	},
				  	UIbreadcrumb:{
				  		name: "Settings"
				  	}
		      })

	    }
	]).run(['$rootScope', '$state', '$stateParams',
	  function ($rootScope, $state, $stateParams) {
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	}])
	// app.config(['$routeProvider', function($routeProvider) {
 //        $routeProvider
 //        .when('/home', {
 //            templateUrl: function(urlattr){
 //                return '/views/main.html';
 //            },
 //            controller: 'homeController'
 //        })
 //        .when('/admin', {
 //            templateUrl: function(urlattr){
 //                return '/admin/login.html';
 //            },
 //            controller: 'adminController',
 //            controllerAs: 'adminloginCtrl'
 //        })
 //        .when('/dashboard', {
 //            templateUrl: function(urlattr){
 //                return '/admin/dashboard.html';
 //            },
 //            controller: 'dashboardController',
 //            controllerAs: 'dashboardCtrl'
 //        })
 //        .when('/pages/:name*', {
 //            templateUrl: function(urlattr){
 //            	return '/views/page.html';
 //            },
 //            controller: 'pageController'
 //        })
 //        .when('/articles/:category*', {
 //            templateUrl: function(urlattr){
 //            	return '/views/articles.html';
 //            },
 //            controller: 'articlesController'
            
 //        })
 //        .otherwise({
	// 		redirectTo: '/home'
	//     });

 //    }]);
	app.config(function( $controllerProvider, $provide, $compileProvider ) {
		console.log( "Config method executed." );

		// Let's keep the older references.
		app._controller = app.controller;
        app._service = app.service;
        app._factory = app.factory;
        app._value = app.value;
        app._directive = app.directive;

        // Provider-based controller.
                app.controller = function( name, constructor ) {
                    $controllerProvider.register( name, constructor );
                    return( this );
                };
                // Provider-based service.
                app.service = function( name, constructor ) {
                    $provide.service( name, constructor );
                    return( this );
                };
                // Provider-based factory.
                app.factory = function( name, factory ) {
                    $provide.factory( name, factory );
                    return( this );
                };
                // Provider-based value.
                app.value = function( name, value ) {
                    $provide.value( name, value );
                    return( this );
                };
                // Provider-based directive.
                app.directive = function( name, factory ) {
                    $compileProvider.directive( name, factory );
                    return( this );
                };
                // NOTE: You can do the same thing with the "filter"
                // and the "$filterProvider"; but, I don't really use
                // custom filters.
	})

	app.controller(
            "AppController",
            function( $scope ) {
                // Since this Controller will be instantiated once
                // the application is bootstrapped, let's log it to
                // the console so we can see the timing.
                console.log( "Controller instantiated (after bootstrap)." );
                // I determine which view is rendered.
                $scope.subview = "before";
                // ---
                // PUBLIC METHODS.
                // ---
                // I toggle between the two different subviews.
                $scope.toggleSubview = function() {
                    if ( $scope.subview === "before" ) {
                        $scope.subview = "after";
                    } else {
                        $scope.subview = "before";
                    }
                }
            }
    );

	// Once the DOM-Ready event has fired, we know that AngularJS
        // will have bootstrapped the application. As such, we want to
        // try adding our "lazy bindings" after the DOM-ready event.
        $( lazyBindings );
        // I define the modules after bootstrapping. Remember, inside
        // of this function, the shorthand methods (ex, app.controller)
        // NO LONGER POINTER to the core shorthands; instead, they
        // point to the method definitions we defined in the config()
        // method executed at application bootstrap.
        function lazyBindings() {
            console.log( "Lazy bindings added to application." );
            // Lazy-loaded controller.
            app.controller(
                "LazyController",
                function( $scope, uppercase, util ) {
                    $scope.message = util.emphasize(
                        uppercase( "After app bootstrap." )
                    );
                }
            );
            // Lazy-loaded service.
            app.service(
                "util",
                function( emphasize ) {
                    this.emphasize = emphasize;
                }
            );
            // Lazy-loaded factory.
            app.factory(
                "emphasize",
                function() {
                    return(
                        function( value ) {
                            return( value.replace( /\.$/, "!!!!" ) );
                        }
                    );
                }
            );
            // Lazy-loaded value.
            app.value(
                "uppercase",
                function( value ) {
                    return( value.toString().toUpperCase() );
                }
            );
            // Lazy-loaded directive.
            app.directive(
                "bnItalics",
                function() {
                    return(
                        function( $scope, element ) {
                            element.css( "font-style", "italic" );
                        }
                    );
                }
            );
        }
	
	// app.service('dateFormate', function() {
	//     this.dateConvert = function(a) {
	//         var timestamp = 1293683278;
	// 		var date = new Date(timestamp*1000);
	// 		this.dateObj={}
	// 		this.dateObj.year = date.getFullYear();
	// 		this.dateObj.month = date.getMonth() + 1;
	// 		this.dateObj.day = date.getDate();
	// 		this.dateObj.hours = date.getHours();
	// 		this.dateObj.minutes = date.getMinutes();
	// 		this.dateObj.seconds = date.getSeconds();

	// 		return this.dateObj;

	//     }
	// });	

	// app.run(function($rootScope) {
	//     $rootScope.panelshow = true;
	// })
	app.controller('MainCtrl',[
	 	'$http',
		'$scope',
		'$location',
		'$cookies',
		'DataService',
		'settingsService',
		'$rootScope',
		'$cookieStore',
		'$state',
        '$stateParams',
        function($http,$scope,$location,$cookies,DataService,settingsService,$rootScope,$cookieStore,$state, $stateParams){
	  	$scope.loginShow = false;
	  	$scope.registerShow = false;
	  	$scope.panelshow = true;
	  	this.user={}
		this.products=[];
		$scope.homescreen = true;
		$scope.dashscreen = false;
		$rootScope.layout = ''
		$rootScope.type = 'site'
		console.log($stateParams)
		settingsService.getSettings().then(function (response) {
			$scope.pageSettings = response.data[0].site;
			$rootScope.blogSettings = response.data[0];
			console.log($rootScope.blogSettings)
			angular.forEach($scope.pageSettings.navbars, function(value, key) {
	            switch(value.position)
	            {
	                case 'header':
	                    $rootScope.headerMenu = value.items;
	                break;
	                case 'footer':
	                    $rootScope.footerMenu = value.items;
	                break;
	                case 'sidebar':
	                    $rootScope.sidebarMenu = value.items;
	                break
	            }
	        });
		
		});
		// $scope.userLogin=function(user){
		// 	console.log(user)
		// 	$http.post('/users/login', {username:this.user.username,password:this.user.password}).
		// 	then(function(response) {
		// 	    // this callback will be called asynchronously
		// 	    // when the response is available
		// 	    if(response.data.errorCode==0)
		// 	    {
		// 	    	$cookieStore.put('userSession', response.data.UHash);
		// 	    	$cookies.put('userSession', response.data.UHash);
		// 	    	$location.path('/bots')
		// 	    	$scope.loginShow = false;
		// 	    	$scope.panelshow = false;
		// 	    }
		// 	}, function(response) {
		// 	    // called asynchronously if an error occurs
		// 	    // or server returns response with an error status.
		// 	});
		// 	this.user={};
		// };
	 //  	$scope.showLogin = function(){
		// 	$scope.loginShow = !$scope.loginShow;
		// 	// console.log($scope.loginShow)
		// }
	  
	}])
