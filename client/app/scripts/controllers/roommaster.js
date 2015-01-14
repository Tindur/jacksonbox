'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RoomMasterCtrl
 * @description
 * # RoomMasterCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('RoomMasterCtrl', function ($scope, $location, socket) {

    //
    // scope variables
    //
    $scope.roomId = $location.search().roomId;
    $scope.users = [];
    $scope.gameStarted = false;

    //
    // socket listeners
    //

    /**
     * listens to userJoined and adds user to user list
     */
    socket.on('roommaster:userJoined', function (user) {
      $scope.users.push(user);
    });

    /**
     * listens to game started and starts the game
     */
    socket.on('game:started', function () {
      $scope.gameStarted = true;
    });

  });
