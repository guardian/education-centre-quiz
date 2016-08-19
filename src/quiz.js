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
        return this.questionContainer.querySelector(':checked').value;
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
        return this.questionContainer.querySelector('.hiddenAnswer').value;
    }

    makeRed() {
      this.questionContainer.className += " goRed";
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

    setAnswerList(answerList, radioButton) {
      for(var i=0; i < answerList.length; i++) {
        var answerElement = this.createAnswerContainer();
        this.setText(answerElement, answerList[i]);
        this.setRadioButton(answerElement, radioButton, answerList[i]);
      }
    };
}

//---------------------------------------------
//This is the code to change to check the answers to the quiz

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');

    //write your code for checking answers here
    var counter = 0;
    if(q1.getSelectedAnswer() === q1.getCorrectAnswer()) {
      counter++;
      q1.makeGreen();
    } else {
      q1.makeRed();
    }
    if(q2.getSelectedAnswer() === q2.getCorrectAnswer()) {
      counter++;
      q2.makeGreen();
    } else {
      q2.makeRed();
    }
    if(q3.getSelectedAnswer() === q3.getCorrectAnswer()) {
      counter++;
      q3.makeGreen();
    } else {
      q3.makeRed();
    }
    if(q4.getSelectedAnswer() === q4.getCorrectAnswer()) {
      counter++;
      q4.makeGreen();
    } else {
      q4.makeRed();
    }
    if(q5.getSelectedAnswer() === q5.getCorrectAnswer()) {
      counter++;
      q5.makeGreen();
    } else {
      q5.makeRed();
    }

    var message = '';
    if(counter <= 2){
      message = 'You got ' + counter + ' correct';
    } else if (counter === 5) {
      message = 'Well done, all correct!';
    } else {
      message = 'Good attempt, you got ' + counter + '. Better luck next time!';
    }

    result.innerHTML = message;
});


//---------------------------------------------
//This is where you write your questions

var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
var answerList = ['1791', '1821', '1999']
q1.setAnswerList(answerList, 'q1');
q1.setCorrectAnswer('1821');

var q2 = new Question();
q2.setQuestion('What is the capital of the UK?');
var answerList = ['London', 'Paris', 'Dublin', 'Berlin']
q2.setAnswerList(answerList, 'q2');
q2.setCorrectAnswer('London');
q2.setImage('https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png');

var q3 = new Question();
q3.setQuestion('What is the capital of the Afghanistan?');
var answerList = ['London', 'Kabul', 'Valletta', 'Amsterdam']
q3.setAnswerList(answerList, 'q3');
q3.setCorrectAnswer('Kabul');
q3.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/2000px-Flag_of_Afghanistan.svg.png');

var q4 = new Question();
q4.setQuestion('What is the capital of the Canada?');
var answerList = ['Rabat', 'Lisbon', 'San Jose', 'Ottawa']
q4.setAnswerList(answerList, 'q4');
q4.setCorrectAnswer('Ottawa');
q4.setImage('https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png');

var q5 = new Question();
q5.setQuestion('What is the capital of Denmark?');
var answerList = ['Copenhagen', 'Athens', 'New Delhi', 'Washington, D.C.']
q5.setAnswerList(answerList, 'q5');
q5.setCorrectAnswer('Copenhagen');
q5.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2000px-Flag_of_Denmark.svg.png');
