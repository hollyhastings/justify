'use strict';

// The Angular module for all of Justify
var app = angular.module('justify', []);

// The main controller for Justify
app.controller('JustifyController', function ($scope, $http) {
  $scope.defaultSituation = 'do something useful';
  $scope.excuseHistory = [];

  // Load JSON data
  $http.get('data.json').success(function (data) {
    // Chooses a new random noun
    $scope.generate = function () {
      if ($scope.currentExcuse) {
        $scope.currentExcuse.situation = $scope.situation || $scope.defaultSituation;
        $scope.excuseHistory.unshift($scope.currentExcuse);
      }

      $scope.currentExcuse = {
        text: _.template(_.sample(data.excuses).string)(data),
        date: new Date()
      };
    };

    $scope.generate();
  });
});
