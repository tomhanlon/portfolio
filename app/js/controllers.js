'use strict';

/* Controllers */

var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('PortfolioCtrl', function($scope) {
  $scope.projects = [
    { 'name': 'This Very Portfolio',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['angular', 'javascript'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'live_link': 'http://www.google.com',
    'github_link': 'https://github.com/tomhanlon/portfolio',
    'image_url': 'http://www.placecage.com/835/318?random'
  },
  { 'name': 'iVote',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['ruby on rails', 'javascript', 'cdyne', 'redis'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'live_link': 'http://www.google.com',
    'github_link': 'www.constituentexts.com',
    'image_url': 'http://www.placecage.com/835/318?random'
  },
  { 'name': 'Carewell',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['ruby on rails'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'live_link': 'http://www.google.com',
    'github_link': 'https://github.com/RollWave07/CareWell',
    'image_url': 'http://www.placecage.com/835/318?random'
  },
  { 'name': 'Weatherpane',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['geolocation', 'api'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'live_link': 'http://www.google.com',
    'github_link': 'https://github.com/tejas-rawal/WeatherPane_v3',
    'image_url': 'http://www.placecage.com/835/318?random'
  },
  { 'name': 'Babyloader',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['html5', 'javascript'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'live_link': 'http://www.google.com',
    'github_link': 'https://github.com/tomhanlon/babyloader',
    'image_url': 'http://www.placecage.com/835/318?random'
  },
  { 'name': 'Brisket Battle',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['ruby on rails'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'live_link': 'http://www.google.com',
    'github_link': 'https://github.com/tomhanlon/bbq-battle',
    'image_url': 'http://www.placecage.com/835/318?random'
  },
  { 'name': 'Time Jump',
    'thumbnail_url': 'https://unsplash.it/230/184?random',
    'categories': ['iOS'],
    'description': 'Lucas ipsum dolor sit amet watto qui-gon c-3po antilles darth organa solo skywalker jade jinn. Fisto han jar yoda darth fett. Palpatine mara padmé moff anakin skywalker fett jabba. Hutt antilles alderaan grievous solo anakin gonk hutt. Darth kamino mon hutt antilles moff solo amidala darth. Thrawn sidious darth moff. Windu droid vader vader. Hutt ahsoka padmé solo ackbar mandalorians darth leia. Binks owen cade grievous droid. Skywalker moff darth jabba owen. Palpatine baba hutt boba jango ewok kenobi.',
    'image_url': 'http://www.placecage.com/835/318?random'
  }
  ];
  
  $scope.categories = [];
    angular.forEach($scope.projects, function(project){
    angular.forEach(project.categories, function(tech){
      if ($scope.categories.indexOf(tech) === -1) {
        $scope.categories.push(tech);
      }
    });
  });

});
