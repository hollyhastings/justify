'use strict';

var app = angular.module('justify', ['ngMaterial']);

// The main controller for Justify
app.controller('JustifyController', function ($scope) {
  var nouns = ['effort', 'an in depth knowledge of Latin', 'me not sleeping'];

  $scope.generate = function () {
    $scope.noun = _.sample(nouns);
  };

  $scope.generate();
  $scope.defaultSituation = 'do something useful';
});

