// global firebase
'use strict';

angular.module('firebaseApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    var rootRef = new Firebase('https://shining-inferno-2964.firebaseio.com/');
    var childRef = rootRef.child('message');

    // read from firebase
    // snapshot of data from firebase on latest value
    // on function will fire off everytime this value is modified
    childRef.on('value', function(snapshot){  
      // timeout to make angular track firebase data changes
      $timeout(function(){
        // val extracts the value from the snapshot
        var snapshotVal = snapshot.val();
        console.log(snapshotVal);
        $scope.message = snapshot.val();
      });
    });

    $scope.$watch('message.text', function(newVal){
      // make sure newVal is not undefine
      if (!newVal){
        return;
      }
      // push code to firebase
      childRef.update({
        text: newVal
      });
    });
    
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
