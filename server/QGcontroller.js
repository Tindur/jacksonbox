var questions = {
  questions: [
    {
      question: 'Hvað er upphundur?',
      answers: ['1', '2', '3']
    },
    {
      question: 'Hvað er ekki upphundur?',
      answers: ['4', '5', '6']
    },
    {
      question: 'Hvað?',
      answers: ['7', '8', '9']
    },
    {
      question: 'Jámar',
      answers: ['1', '2', '3']
    },
    {
      question: 'OKOKOK',
      answers: ['4', '5', '6']
    },
    {
      question: 'Alright, alright, alright',
      answers: ['7', '8', '9']
    },
    {
      question: 'meh',
      answers: ['1', '2', '3']
    }
  ]
}

var route = '/api/qg';

module.exports = function (app) {
  app.get( route + '/question', function (req, res) {
    res.send(questions);
  });
};