'use strict';

angular.module('testApp')
  .directive('questiongame', function () {
    return {
      // This tells us that we are going to make a new HTML element
      restrict: 'E',
      // This tells us thate we are going to replace all the HTML
      replace: true,
      // This would give us an option to use what is inside the HTML element
      transclude: true,
      // Here we define how we communicate with the scope. = meaning bi-directional
      scope: {
        data: '='
      },
      templateUrl: 'views/questiongame.html',
      controller: function ($scope, questiongame) {
        $scope.game = questiongame;
        $scope.game.run();
      }
    };
  });