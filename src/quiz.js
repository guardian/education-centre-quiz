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

var q1answer = ""; // this can later be changed to an array for multiple questions

function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="q1Choices"]:checked').value;
  //TODO write a condition to check selectedAnswer against q1answer and 
  //display to the user if they are correct or not.
}
window.onload = function() {

    var q1 = new Question("question1");

    q1.setQuestion('When was the Guardian first published?');

    q1.setAnswers('1791', '1821', '1999');
    this.q1answer = //TODO ;

}