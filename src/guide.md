
Basic HTML
---------
Open index.html - here you can see a question and an answer. 

This a multiple choice question, can you add more choices.

**TODO** Some text about changing the view e.g. swapping p tag for h2 to show how it differs on the page

Now add more questions (time limit this)

As you can this starts to take time and becomes can't be easily changed. 

Introduction to dynamic content using JavaScript
-------

We can use a programming language to build the quiz and make it east to update. We are going to use JavaScript. 

Open quiz.js, here is a question function. In it there is a function to add a question. 
**TODO** Document how setQuestion works

We've created a function called setAnswers which takes three answers, can you complete it?

Now we want the user to submit an answer and tell them if they are correct. 

We have groups the radio buttons by one common name (in this case q1Choices) and each has a different value (in this case answer1, answer2 and answer3). 

In quiz.js the checkAnswer function finds all occurences of input type q1Choices and gets value of the one that is checked (set to true), this has been set to a variable called selectedAnswer. 

On setting up the quiz we can define which value is correct, a variable called q1answer has been define, can you set the correct value for it.

Can you write a condition to check selectedAnswer against q1answer.



Now create a second question with two answers.

This is still quite repetitive. We can use arrays to add a list of questions to the page.

**TODO** explain arrays

```
var animals = ['cat', 'zebra', 'frog', 'dog'];

for (i = 0; i < 4; i++) {
	console.log(animals[i])
}
```

**TODO** explain console.log - and where to run this code.
Try adding or removing words from the lists array. Can you see why this isn't doing what you expected?
Hint: Using a resource link below can you find out how to get the size of the array and loop over it.

How would you build a version of setAnswers that takes an array of answers.
The function setAnswer(answer1, answer2) should change to setAnswer(answers) where answers is the array.

**TODO** explain appendChild and where to add it

Submitting answers and telling the user if they are correct


