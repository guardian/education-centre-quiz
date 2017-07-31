const quiz = document.querySelector('#quiz');
const questions = quiz.querySelector('#questions');
const result = quiz.querySelector('#result');

function Question() {

     //The code below contains helper functions -- you don't need to edit this code
    const questionContainer = copyTemplate('#question-template', questions);
    const answersContainer = questionContainer.querySelector('.answers');
    const imageContainer = questionContainer.querySelector('.imageForQuestion');

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
        const radioButtonElement = element.querySelector('.choice');
        radioButtonElement.setAttribute('name', name);
        radioButtonElement.setAttribute('value', value);
    }

    function setImageSource(element, source) {
        const imageElement = element.querySelector('.image');
        imageElement.setAttribute('src', source)
    }


    function copyTemplate(id, to) {
        const element = document.querySelector(id).cloneNode(true);
        element.id = '';
        to.appendChild(element);
        return element;
    }

    this.getSelectedAnswer = function () {
        return questionContainer.querySelector(':checked').value;
    };

    this.setQuestion = function (questionText) {
        const questionElement = getQuestionContainer();
        setText(questionElement, questionText);
    };

      this.setImage = function (source) {
       const answerElement1 = createImageContainer();
        setImageSource(answerElement1, source);
    };

    this.setCorrectAnswer = function(correctIndex) {
        questionContainer.querySelector('.hiddenAnswer').value = correctIndex;
    };

    this.getCorrectAnswer = function() {
        return questionContainer.querySelector('.hiddenAnswer').value;
    };

    // end of helper functions

    //from here below is where you need your code

    //---------------------------------------------
    //This is to make the answers go green

    this.makeGreen = function() {
        questionContainer.className += " goGreen";
    };

    //---------------------------------------------
    //This is the code to change to display all the answer options

    this.setAnswerList = function (answerList) {
        const answerElement1 = createAnswerContainer();
        setText(answerElement1, answerList[0]);
        setRadioButton(answerElement1, 'groupName', answerList[0]);
    };
}

//---------------------------------------------
//This is the code to change to check the answers to the quiz

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const result = quiz.querySelector('#result');

    //write your code for checking answers here

    result.innerHTML = "You got 2 out of 2 correct";
});


//---------------------------------------------
//This is where you write your questions

const q1 = new Question();
q1.setQuestion('When was the Guardian first published?');
const answerList = ['1791', '1821', '1999'];
q1.setAnswerList(answerList);
q1.setCorrectAnswer('1821');
