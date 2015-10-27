'use strict';

/**
 * @ngdoc function
 * @name alfmagsnoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alfmagsnoApp
 */
angular.module('alfmagsnoApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
