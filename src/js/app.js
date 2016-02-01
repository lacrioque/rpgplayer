/*globals angular, console, window, q, _ */

angular.module('plannetview', [
	'ngMaterial', 
	'ngRoute', 
	'ngMessages', 
	'ngDraggable', 
	'plannetview.controller', 
	'plannetview.services'
	])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/view', {
				templateUrl: 'templates/view.tpl.html',
				controller: 'mainViewCtrl'
				}
			)
			.when('/admin', {
				templateUrl: 'templates/admin.tpl.html',
				controller: 'adminCtrl'
				}
			)
			.when('/help', {
				templateUrl: 'templates/help.tpl.html',
				controller: 'helpCtrl'
				}
			)
			.when('/impressum', {
				templateUrl: 'templates/impressum.tpl.html',
				controller: 'impressumCtrl'
				}
			)
			.otherwise({
				redirectTo: '/view'
				}
			);
	})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('teal')
	.warnPalette('red')
	.backgroundPalette('deep-purple');
});