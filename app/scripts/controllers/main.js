// global firebase
'use strict';

angular.module('firebaseApp')
  .controller('MainCtrl', function ($scope) {
    var rootRef = new Firebase('https://shining-inferno-2964.firebaseio.com/');
    var childRef = rootRef.child('message');
    
    // https://shining-inferno-2964.firebaseio.com/message
    $scope.setMessage = function() {
      childRef.set({
        user: 'Bob',
        text: 'Hi'
      });
    };

    $scope.updateMessage = function() {
      childRef.update({
        text: 'Bye'
      });
    };

    $scope.deleteMessage = function() {
      childRef.remove();
    };
  });
