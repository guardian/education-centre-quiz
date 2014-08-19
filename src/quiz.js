function Question (id) {
	// body...
	var question = document.getElementById(id)

	this.setQuestion = function (question) {
		question.querySelector('.question').innerHTML = question;
	};

	this.setAnswers = function (answer1, answer2) {
		// TODO
	};

	

	body.appendChild(sxdasda);
}

var q1 = new Question("question1");

q1.setQuestion('The question');

q1.setAnswers('An answer', 'answer 2');