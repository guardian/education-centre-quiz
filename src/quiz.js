var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

class Question {

    //The code below contains helper functions -- you don't need to edit this code
    constructor() {
        this.questionContainer = this.copyTemplate('#question-template', questions);
        this.answersContainer = this.questionContainer.querySelector('.answers');
        this.imageContainer = this.questionContainer.querySelector('.imageForQuestion')
    }

    getQuestionContainer () {
        return this.questionContainer.querySelector('.question');
    }

    createAnswerContainer() {
        return this.copyTemplate('#answer-template', this.answersContainer);
    }

    createImageContainer() {
        return this.copyTemplate('#image-template', this.imageContainer);
    }

    setText(element, textToSet) {
        element.querySelector('.text').textContent = textToSet;
    }

    setRadioButton(element, name, value) {
        var radioButtonElement = element.querySelector('.choice');
        radioButtonElement.setAttribute('name', name);
        radioButtonElement.setAttribute('value', value);
    }

    setImageSource(element, source) {
        var imageElement = element.querySelector('.image');
        imageElement.setAttribute('src', source)
    }


    copyTemplate(id, to) {
        var element = document.querySelector(id).cloneNode(true);
        element.id = '';
        to.appendChild(element);
        return element;
    }

    getSelectedAnswer() {
        return questionContainer.querySelector(':checked').value;
    }

    setQuestion(questionText) {
        var questionElement = this.getQuestionContainer();
        this.setText(questionElement, questionText);
    }

    setImage(source) {
       var answerElement1 = this.createImageContainer();
       this.setImageSource(answerElement1, source);
    }

    setCorrectAnswer(correctIndex) {
        this.questionContainer.querySelector('.hiddenAnswer').value = correctIndex;
    }

    getCorrectAnswer() {
        return questionContainer.querySelector('.hiddenAnswer').value;
    }

    // end of helper functions

    //from here below is where you need your code

    //---------------------------------------------
    //This is to make the answers go green

    makeGreen() {
        this.questionContainer.className += " goGreen";
    }

    //---------------------------------------------
    //This is the code to change to display all the answer options

    setAnswerList(answerList) {
        var answerElement1 = this.createAnswerContainer();
        this.setText(answerElement1, answerList[0]);
        this.setRadioButton(answerElement1, 'groupName', answerList[0]);
    };
}

//---------------------------------------------
//This is the code to change to check the answers to the quiz

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');

    //write your code for checking answers here

    result.innerHTML = "You got 2 out of 2 correct";
});


//---------------------------------------------
//This is where you write your questions

var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
var answerList = ['1791', '1821', '1999']
q1.setAnswerList(answerList);
q1.setCorrectAnswer('1821');
