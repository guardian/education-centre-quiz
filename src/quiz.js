var form = document.getElementById('quiz');

function Question () {
    var question = document.getElementById('template').cloneNode(true);
    form.appendChild(question);
    
    this.setQuestion = function (questionText) {
		question.querySelector('.question').textContent = questionText;
	};

	this.setAnswers = function (answer1, answer2, answer3) {
        //Student todo
        question.querySelector('.answer1').textContent = answer1;
        question.querySelector('.answer2').textContent = answer2;
        question.querySelector('.answer3').textContent = answer3;
	};
    
    this.checkAnswer = function (value) {
        var selectedAnswer = question.querySelector(':checked').value;
        //Student todo
        return selectedAnswer === value;
    };
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    //Student todo
    var result = form.querySelector('.result');
    if (q1.checkAnswer("answer2")) {
        result.textContent = "Hooray";
    } else {
        result.textContent = "Boo";
    }
    
});


var q1 = new Question();

q1.setQuestion('When was the Guardian first published?');

q1.setAnswers('1791', '1821', '1999');

