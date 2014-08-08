'use strict';

/**
 * @ngdoc function
 * @name skeletonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skeletonApp
 */
angular.module('skeletonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
