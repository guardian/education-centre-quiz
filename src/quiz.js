var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

function Question() {
    var correctAnswer;
 
    this.setQuestion = function (questionText) {
        var questionElement = getQuestionContainer();
        setText(questionElement, questionText);
    };    
  
    this.setAnswers = function (answer1, answer2, answer3) {
       var answerElement = createAnswerContainer();
        setText(answerElement, answer1);
        setRadioButton(answerElement, 'blah', answer1);
    };

    this.setCorrectAnswer = function () {

    };
    
    this.checkAnswer = function () {
        
    };

    ////////////This code is helper functions
    var questionContainer = copyTemplate('#question-template', questions);
    var answersContainer = questionContainer.querySelector('.answers');

    function  getQuestionContainer() {
        console.log(questionContainer, questionContainer.querySelector('.question'));
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
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');
    
    result.innerHTML = "You got 2 out of 2 correct";
});



var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
q1.setAnswers('1791', '1821', '1999');
q1.setCorrectAnswer('1821');

