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

    function createAnswer(answer, name) {
        var container = copyTemplate('#answer-template', answers);
        var answerToDisplay = container.querySelector('.answer')
        
        //todo explain below lines in guide
        answerToDisplay.textContent = answer;
        var radioInput = container.querySelector('.choice');
        radioInput.setAttribute('name', name);
        radioInput.setAttribute('value', answer);
   
      
    }

    this.setQuestion = function (questionText) {
        question.querySelector('.question').textContent = questionText;
    };

    this.setAnswers = function (answerList, name) {
        for (var i = 0; i < answerList.length; i++) {
            createAnswer(answerList[i], name);
        }
    };
    
    this.setCorrectAnswer = function (answer) {
        correctAnswer = answer;
    };
    
    this.checkAnswer = function () {
        var selectedAnswer = question.querySelector(':checked').value;
        return selectedAnswer === correctAnswer;
    };

//    this.setAnswers = function (answer1, answer2, answer3) {
//        //Student todo
//        question.querySelector('.answer1').textContent = answer1;
//        question.querySelector('.answer2').textContent = answer2;
//        question.querySelector('.answer3').textContent = answer3;
//
//        Convert to....
//        createAnswer(answer1);
//        createAnswer(answer2);
//        createAnswer(answer3);
//    };
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var counter = 0
    var result = quiz.querySelector('#result');
    if (q1.checkAnswer()) {
        counter++
    } 
    if (q2.checkAnswer()) { 
        counter++
    }
    result.innerHTML = "You got " + counter + " out of 2 correct";

    
});

var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
q1.setAnswers(['1791', '1821', '1999'], 'q1-choices');
q1.setCorrectAnswer('1821');

var q2 = new Question();
q2.setQuestion('Where are the Guardian offices?');
q2.setAnswers(['London', 'New York', 'Sydney', 'All of the above'], 'q2-choices');
q2.setCorrectAnswer('All of the above');
