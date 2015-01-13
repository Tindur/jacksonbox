'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RoomCtrl
 * @description
 * # roomCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('RoomMasterCtrl', function ($scope, $location, socket) {
    $scope.roomId = $location.search().roomId;
    $scope.users = [];
    socket.on('roommaster:userJoined', function (user) {
      $scope.users.push(user);
    });
    console.log(socket);
  });
