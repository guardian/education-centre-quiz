var quiz = document.querySelector('#quiz');
var questions = quiz.querySelector('#questions');
var result = quiz.querySelector('#result');

function Question() {
    var correctAnswer;
 
    this.setQuestion = function (questionText) {
        var questionElement = getQuestionContainer();
        setText(questionElement, questionText);
    };    
  
    //first part will be to add the answers  
    this.setAnswers = function (answerList) {
        var answerElement1 = createAnswerContainer();
        setText(answerElement1, answerList[0]);
        setRadioButton(answerElement1, 'q1Choices', answerList[0]);

        var answerElement2 = createAnswerContainer();
        setText(answerElement2, answerList[1]);
        setRadioButton(answerElement2, 'q1Choices', answerList[1]);

        var answerElement3 = createAnswerContainer();
        setText(answerElement3, answer1);
        setRadioButton(answerElement3, 'q1Choices', answerList[2]);
    };

    //second part to distinguish between radio buttons
    this.setAnswers = function (answerList, choiceName) {
        var answerElement1 = createAnswerContainer();
        setText(answerElement1, answerList[0]);
        setRadioButton(answerElement1, choiceName, answerList[0]);

        var answerElement2 = createAnswerContainer();
        setText(answerElement2, answerList[1]);
        setRadioButton(answerElement2, choiceName, answerList[1]);

        var answerElement3 = createAnswerContainer();
        setText(answerElement3, answerList[2]);
        setRadioButton(answerElement3, choiceName, answerList[2]);
    };

    //third part to send a list and write a for loop
    this.setAnswers = function (answersList, choiceName) {

        for(i=0; i< answersList.length; i++) {
            var answerElement = createAnswerContainer();
            setText(answerElement, answersList[i]);
            setRadioButton(answerElement, choiceName, answersList[i]);

        }
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

    function  getAnswerContainer() {
        return quiz.querySelector('#result');
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


    this.getSelectedAnswer = function () {
        return questionContainer.querySelector(':checked').value;
    }
    //// end of helper functions
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');

    //last check number of answers correct
    var counter = 0;
    if(q1.getSelectedAnswer() === '1821') {
        counter++;
    }
    if(q2.checkAnswer() === '1999') {
        counter++;
    }
    alert(counter);
    result.innerHTML = "You got " + counter + " out of 2 correct";
});



var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
var choices = ['1791', '1821', '1999']
q1.setAnswers(choices);
//second part (for grouping by radio button)
q1.setAnswers(choices, "q1Choices");
//third part is to implement a for loop, highlighting that the benefit is that any number of choices
//can be passed to setAnswers
//4th part is the if statement

var q2 = new Question();
q2.setQuestion('When was the Guardian first online?');
//second part add another question and see how radio buttons are grouped together
var choices = ['1995', '1990', '1999']
q2.setAnswers(choices); //add another question - radio buttons are all grouped together
//So we must change setAnswers to take another parameter that will group the radio buttons by answer
q2.setAnswers(choices, 'q2Choices');
//third part is to allow any number of choices by creating a list and using a for loop
//4th part is the if statement
