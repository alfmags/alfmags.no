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

    $scope.initFirst=function()
    {
        $http.get('http://alfmagsapi.azurewebsites.net/api/Books').then(function(resp2)
        {
            $scope.bookRecieve = resp2.data;

            console.log($scope.bookRecieve);
            console.log('Book Success', resp2);
        }, function(err){
            console.error('Error Book', err);
        });
    };

    $scope.DeleteBook = function(id){

      console.log("DeleteBook ble nettop kalt med Id: " +id);
      var request = $http.delete('http://alfmagsapi.azurewebsites.net/api/Books/' +id);


      $scope.initFirst();
      
      //    request.success(function(data){
      //      $scope.initFirst();
     //    })  
    };

    $scope.CreateBook = function(){
        var title = $scope.toaster.test;
        var requestUrl= 'http://alfmagsapi.azurewebsites.net/api/Books';
        var request = $http.post(requestUrl, {
                  "Id": 0,
                  "Title": title,
                  "Year": 0,
                  "Price": 0,
                  "Genre": "string",
                  "AuthorId": 0,
                  "Author": {
                    "Id": 0,
                    "Name": "string"
                  }
                } );

         request.success(function(data){
            $scope.initFirst();
         })

    };

   
      
   
  });