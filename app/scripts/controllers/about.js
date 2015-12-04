'use strict';

/**
 * @ngdoc function
 * @name alfmagsnoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the alfmagsnoApp
 */
angular.module('alfmagsnoApp')
  .controller('AboutCtrl', function ($scope) {

  	$scope.hoverIn = function()
  	{
  		this.hoverEdit = true;
  	};

  	$scope.hoverOut = function()
  	{
  		this.hoverEdit = false;
  	}

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
