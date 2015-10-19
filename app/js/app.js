var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'portfolioControllers'
]);

portfolioApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/project-list.html',
			controller: 'PortfolioCtrl'
		}).
		when('/projects/:name', {
			templateUrl: 'partials/project-detail.html',
			controller: 'ProjectDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);