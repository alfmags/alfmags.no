'use strict'

angular.module('alfmagsnoApp')
  .controller('BlogCtrl', function ($scope, $http) {
    $scope.test =  'HTML5 Boilerplate';

    $http.get('https://cors-test.appspot.com/test').then(function(resp)
    {

    	$scope.testRecieve = resp.data.status;
    	console.log('Success', resp);
    }, function(err){
    	console.error('Err', err);
    });

    
      
   
  });