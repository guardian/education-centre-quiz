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
       var answerElement1 = createAnswerContainer();
        setText(answerElement, answer1);
        setRadioButton(answerElement1, 'q1Choices', answer1);
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
        return selectedAnswer === correctAnswer;
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
//make variable list first then pass in
q1.setAnswers('1791', '1821', '1999');
q1.setCorrectAnswer('1821');

