'use strict';

var app = angular.module('justify', []);

// The main controller for Justify
app.controller('JustifyController', function ($scope) {
  $scope.noun = 'effort';
  $scope.defaultSituation = 'do something useful';
});

