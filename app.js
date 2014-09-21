'use strict';

// The Angular module for all of Justify
var app = angular.module('justify', []);

// The main controller for Justify
app.controller('JustifyController', function ($scope, $http) {
  $scope.defaultSituation = 'do something useful';

  // Load JSON data
  $http.get('data.json').success(function (data) {
    // Chooses a new random noun
    $scope.generate = function () {
      $scope.excuse = _.template(_.sample(data.excuses))(data);
    };

    $scope.generate();
  });
});
