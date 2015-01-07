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
    this.setAnswers = function (answer1, answer2, answer3) {
        var answerElement1 = createAnswerContainer();
        setText(answerElement, answer1);
        setRadioButton(answerElement1, 'q1Choices', answer1);

        var answerElement2 = createAnswerContainer();
        setText(answerElement, answer2);
        setRadioButton(answerElement2, 'q1Choices', answer2);

        var answerElement3 = createAnswerContainer();
        setText(answerElement3, answer1);
        setRadioButton(answerElement3, 'q1Choices', answer3);
    };

    //second part to distinguish between radio buttons
    this.setAnswers = function (answer1, answer2, answer3, choiceName) {
        var answerElement1 = createAnswerContainer();
        setText(answerElement, answer1);
        setRadioButton(answerElement1, choiceName, answer1);

        var answerElement2 = createAnswerContainer();
        setText(answerElement, answer2);
        setRadioButton(answerElement2, choiceName, answer2);

        var answerElement3 = createAnswerContainer();
        setText(answerElement3, answer1);
        setRadioButton(answerElement3, choiceName, answer3);
    };

    //third part to send a list and write a for loop
    this.setAnswers = function (answers, choiceName) {

        for(i=0; i< answers.length; i++) {
            var answerElement = createAnswerContainer();
            setText(answerElement, answers[i]);
            setRadioButton(answerElement, choiceName, answers[i]);

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

    this.setCorrectAnswer = function (answer) {
        correctAnswer = answer;
    };
    
    this.checkAnswer = function () {
        var selectedAnswer = questionContainer.querySelector(':checked').value;
        //student should write this?
        return selectedAnswer === correctAnswer;
    };
    //// end of helper functions
}

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');

    //last check number of answers correct
    var counter = 0;
    if(q1.checkAnswer()) {
        counter++;
    }
    if(q2.checkAnswer()) {
        counter++;
    }
    alert(counter);
    result.innerHTML = "You got " + counter + " out of 2 correct";
});



var q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
q1.setAnswers('1791', '1821', '1999');
//second part (for grouping by radio button)
q1.setAnswers('1791', '1821', '1999', "q1Choices");
//third part is to allow any number of choices by creating a list and using a for loop
var choices = ['1791', '1821', '1999'];
q1.setAnswers(choices, "q1Choices");

q1.setCorrectAnswer('1821');

var q2 = new Question();
q2.setQuestion('When was the Guardian first online?');
q2.setAnswers('1995', '1990', '1999'); //add another question - radio buttons are all grouped together
//So we must change setAnswers to take another parameter that will group the radio buttons by answer
q2.setAnswers('1995', '1990', '1999', 'q2Choices');
//third part is to allow any number of choices by creating a list and using a for loop
var choices = ['1995', '1990', '1999'];
q2.setAnswers(choices, "q2Choices");

q2.setCorrectAnswer('1995');
