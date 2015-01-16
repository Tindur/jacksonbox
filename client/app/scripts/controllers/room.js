'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RoomCtrl
 * @description
 * # RoomCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('RoomCtrl', function ($scope, socket) {

    //
    // scope variables
    //

    $scope.gameStarted = false;
    $scope.currentQ = {};

    //
    // scope methods
    //

    $scope.startGame = function () {
      socket.emit('game:start');
      $scope.gameStarted = true;
    };

    //
    // socket listeners
    //

    socket.on('game:started', function () {
      console.log('game started');
      $scope.gameStarted = true;
    });

    socket.on('game:playerData', function (data) {
      $scope.currentQ = data;
      console.log(data);
    });
  });