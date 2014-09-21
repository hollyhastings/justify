'use strict';

var app = angular.module('justify', []);

// The main controller for Justify
app.controller('JustifyController', function ($scope, $http) {
  $scope.defaultSituation = 'do something useful';

  $http.get('data.json').success(function (data) {
    $scope.generate = function () {
      $scope.noun = _.sample(data.nouns);
    };

    $scope.generate();
  });
});
