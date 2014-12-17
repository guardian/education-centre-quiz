var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

function copyTemplate(id, to) {
    var element = document.querySelector(id).cloneNode(true);
    element.id = '';
    to.appendChild(element);
    return element;
}

function Question() {
    var question = copyTemplate('#question-template', questions);
    var answers = question.querySelector('.answers');
    var correctAnswer;
 
    this.setQuestion = function (questionText) {
        question.querySelector('.question').textContent = questionText;
    };    
  
    this.setAnswers = function (answer1, answer2, answer3) {
    
    };

    this.setCorrectAnswer = function () {
        
    };
    
    this.checkAnswer = function () {
        
    };
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');
    
    result.innerHTML = "You got 2 out of 2 correct";
});



var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
q1.setAnswers(['1791', '1821', '1999']);
q1.setCorrectAnswer('1821');

