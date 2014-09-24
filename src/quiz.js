var form = document.getElementById('quiz');

function Question () {
    var question = document.getElementById('template').cloneNode(true);
    form.appendChild(question);
    
    this.setQuestion = function (questionText) {
		question.querySelector('.question').innerHTML = questionText;
	};

	this.setAnswers = function (answer1, answer2, answer3) {
        question.querySelector('.answer1').innerHTML = answer1;
        question.querySelector('.answer2').innerHTML = answer2;
        question.querySelector('.answer3').innerHTML = answer3;
	};
    
    this.checkAnswer = function (value) {
        var selectedAnswer = question.querySelector(':checked').value;
        return selectedAnswer === value;
    };
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var result = form.querySelector('.result');
    if (q1.checkAnswer("answer2")) {
        result.innerHTML = "Hooray";
    } else {
        result.innerHTML = "Boo";
    }
    
});


var q1 = new Question();

q1.setQuestion('When was the Guardian first published?');

q1.setAnswers('1791', '1821', '1999');

