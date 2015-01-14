'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $location, socket, usermanager) {
    
    //
    // scope variables
    //

    $scope.user = {
      username: '',
      roomId: ''
    };

    //
    // scope methods
    //

    /**
     * Sends room:create event to server
     */
    $scope.createRoom = function () {
      socket.emit('room:create');
    };

    /**
     * Sends room:join event to server
     */
    $scope.joinRoom = function () {
      socket.emit('room:join', $scope.user);
      usermanager.setUserInformation($scope.user);
      $location.path('/room');
    };

    //
    // socket listeners
    //

    /**
     * Listens to message event from server and redirects to roommaster
     */
    socket.on('message', function (message) {
      if (angular.isDefined(message.roomId)) {
        $location.path('/roommaster').search({'roomId':message.roomId});
      }
    });

    //
    // scope watches
    //

    /**
     * watches room id field and changes value to uppercase string
     */
    $scope.$watch('user.roomId', function (newVal, oldVal) {
      if (!angular.equals(newVal, oldVal)) {
        $scope.user.roomId = newVal.toUpperCase();
      }
    });
  });
