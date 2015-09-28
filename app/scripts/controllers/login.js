'use strict';

/**
 * @ngdoc function
 * @name alfmagsnoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the alfmagsnoApp
 */
angular.module('alfmagsnoApp')
  .controller('LoginCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logintest ='logintest';
  });