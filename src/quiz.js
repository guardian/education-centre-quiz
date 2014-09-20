function Question (id) {
	// body...
	var question = document.getElementById(id)
	this.setQuestion = function (questionText) {
		question.querySelector('.question').innerHTML = questionText;
	};

	this.setAnswers = function (answer1, answer2, answer3) {
		//TODO
	};
}

var answers = [];
function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="q1Choices"]:checked').value;
    if(selectedAnswer == answers[0]) alert("Correct answer");
    else alert("Incorrect answer");                                      
    
}
window.onload = function() {

    var q1 = new Question("question1");

    q1.setQuestion('When was the Guardian first published?');

    q1.setAnswers('1791', '1821', '1999');
    
    this.answers.push('answer2');

}