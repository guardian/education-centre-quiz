var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

function Question() {
    var correctAnswer;
 
    this.setQuestion = function (questionText) {
        var questionElement = getQuestionContainer();
        setText(questionElement, questionText);
    };    
  
    this.setAnswers = function (answerList) {
       var answerElement1 = createAnswerContainer();
        setText(answerElement1, answerList[0]);
        setRadioButton(answerElement1, 'q1Choices', answerList[0]);
    };


    ////////////This code is helper functions
    var questionContainer = copyTemplate('#question-template', questions);
    var answersContainer = questionContainer.querySelector('.answers');

    function  getQuestionContainer() {
        return questionContainer.querySelector('.question');
    }

    function createAnswerContainer() {
        return copyTemplate('#answer-template', answersContainer);
    }

    function setText(element, textToSet) {
        element.querySelector('.text').textContent = textToSet;
    }

    function setRadioButton(element, name, value) {
        var radioButtonElement = element.querySelector('.choice');
        radioButtonElement.setAttribute('name', name);
        radioButtonElement.setAttribute('value', value);
    }


    function copyTemplate(id, to) {
        var element = document.querySelector(id).cloneNode(true);
        element.id = '';
        to.appendChild(element);
        return element;
    }

    this.setCorrectAnswer = function (answer) {
        correctAnswer = answer;
    };
    
    this.checkAnswer = function () {
        var selectedAnswer = questionContainer.querySelector(':checked').value;
        
    };
    //// end of helper functions
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');
    
    result.innerHTML = "You got 2 out of 2 correct";
});



var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
var choices = ['1791', '1821', '1999']
q1.setAnswers(choices);
q1.setCorrectAnswer('1821');

