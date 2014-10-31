var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

function copyTemplate(id, to) {
    var element = document.querySelector(id).cloneNode(true);
    to.appendChild(element);
    return element;
}

function Question() {
    var question = copyTemplate('#question-template', questions);
    var answers = question.querySelector('.answers');

    function createAnswer(answer) {
        var container = copyTemplate('#answer-template', answers);
        container.querySelector('.answer').textContent = answer;
    }

    this.setQuestion = function (questionText) {
        question.querySelector('.question').textContent = questionText;
    };

    this.setAnswers = function (answerList) {
        for (var i = 0; i < answerList.length; i++) {
            createAnswer(answerList[i]);
        }
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

var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
q1.setAnswers(['1791', '1821', '1999']);
