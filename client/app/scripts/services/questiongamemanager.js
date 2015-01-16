'use strict';

angular.module('testApp')
  .service('questiongame', function ($interval, datafetcher, socket) {
    var route = 'http://localhost:1337/api/qg/';
    var that = this, questions, questionIndex = 0, time = 10;
    that.timeRemaining = time;
    function getQuestions () {
      var url = route + 'question';
      return datafetcher.get(url);
    }

    var gameloop = function () {
      console.log('loop', questionIndex, that.timeRemaining);
      if (that.timeRemaining === 0) {
        that.currentQ = questions[questionIndex].question;
        socket.emit('game:playerData', questions[questionIndex]);
        questionIndex++;
        that.timeRemaining = time;
      }
      else {
        that.timeRemaining--;
      }
    };
    
    that.run =  function () {
      getQuestions().then(function (data) {
        questions = data.questions;
        $interval(gameloop, time * 100);
      });
    };
  });