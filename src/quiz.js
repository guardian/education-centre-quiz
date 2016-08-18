var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

function Question() {

     //The code below contains helper functions -- you don't need to edit this code
    var questionContainer = copyTemplate('#question-template', questions);
    var answersContainer = questionContainer.querySelector('.answers');
    var imageContainer = questionContainer.querySelector('.imageForQuestion')

    function  getQuestionContainer() {
        return questionContainer.querySelector('.question');
    }

    function createAnswerContainer() {
        return copyTemplate('#answer-template', answersContainer);
    }

    function createImageContainer() {
        return copyTemplate('#image-template', imageContainer);
    }

    function setText(element, textToSet) {
        element.querySelector('.text').textContent = textToSet;
    }

    function setRadioButton(element, name, value) {
        var radioButtonElement = element.querySelector('.choice');
        radioButtonElement.setAttribute('name', name);
        radioButtonElement.setAttribute('value', value);
    }

    function setImageSource(element, source) {
        var imageElement = element.querySelector('.image');
        imageElement.setAttribute('src', source)
    }


    function copyTemplate(id, to) {
        var element = document.querySelector(id).cloneNode(true);
        element.id = '';
        to.appendChild(element);
        return element;
    }

    this.getSelectedAnswer = function () {
        return questionContainer.querySelector(':checked').value;
    }
 
    this.setQuestion = function (questionText) {
        var questionElement = getQuestionContainer();
        setText(questionElement, questionText);
    };  
    
      this.setImage = function (source) {
       var answerElement1 = createImageContainer();
        setImageSource(answerElement1, source);
    };

    this.setCorrectAnswer = function(correctIndex) {
        questionContainer.querySelector('.hiddenAnswer').value = correctIndex;
    }

    this.getCorrectAnswer = function() {
        return questionContainer.querySelector('.hiddenAnswer').value;
    }

    this.makeGreen = function() {
        questionContainer.className += " goGreen";
    }
    
    // end of helper functions 
 
    //from here below is where you need your code

  
    this.setAnswers = function (answerList) {
        var answerElement1 = createAnswerContainer();
        setText(answerElement1, answerList[0]);
        setRadioButton(answerElement1, 'groupName', answerList[0]);
    };
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');
    
    //write your code for checking answers here

    result.innerHTML = "You got 2 out of 2 correct";
});



var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
var choices = ['1791', '1821', '1999']
q1.setAnswers(choices);
q1.setCorrectAnswer('1821');
