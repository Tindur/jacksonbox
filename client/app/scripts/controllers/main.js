'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $location, socket) {
    $scope.username = '';
    $scope.roomId = '';

    $scope.$watch('roomId', function () {
      $scope.roomId = $scope.roomId.toUpperCase();
    });

    $scope.createRoom = function () {
      socket.emit('room:create');
    };

    $scope.joinRoom = function () {
      socket.emit('room:join', {username: $scope.username, roomId: $scope.roomId}, function (data) {
        console.log('rass', data);
      });
    };

    socket.on('message', function (message) {
      if (angular.isDefined(message.roomId)) {
        $location.path('/roommaster').search({'roomId':message.roomId});
      }
    });
  });
