'use strict';

/* Controllers */
var portfolioControllers = angular.module('portfolioControllers', [
  'ngSanitize'
  ]);

portfolioControllers.controller('PortfolioCtrl', function($scope, $http) {
  $http.get('projects/projects.json').success(function(data){
    $scope.projects = data;
  });
  
  $scope.categories = [];
    angular.forEach($scope.projects, function(project){
    angular.forEach(project.categories, function(tech){
      if ($scope.categories.indexOf(tech) === -1) {
        $scope.categories.push(tech);
      }
    });
  });
});

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('projects/projects.json').success(function(data){
      $scope.projects = data;
      $scope.project = $routeParams.name;
      // $scope.project.descriptionHtml = JSON.stringify($scope.project.description);
    });
  }
]);
