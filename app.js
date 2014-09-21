'use strict';

var app = angular.module('justify', []);

// The main controller for Justify
app.controller('JustifyController', function ($scope) {
  var nouns = ['effort', 'an in depth knowledge of Latin', 'me not sleeping'];

  $scope.noun = _.sample(nouns);
  $scope.defaultSituation = 'do something useful';
});

