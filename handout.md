HTML
=======

HTML is the Language used to create web pages
HTML elements consists of tags which can give semantic markup to a page

Tags are most commonly defined in a start and closing tag 
e.g. <h1> </h1>
Text placed between the tags will be understood by the web browser and will be laid out in a specific way.
For example in index.html change:
<h1>Answer my fiendish quiz!</h1>
to another tags such as
<h2>Answer my fiendish quiz!</h2>
and see the difference.

A tag can all have attributes, which is another source of information for the tag. 
Common examples include the image tag. In index.html you can see
<img src="http://i.guim.co.uk/w-620/h--/q-95/Guardian/news/gallery/2007/jun/08//1821-7345.jpg" class="pull-right">

This tag has been given two attributes, src and class. src gives the source of where the image file can be found 
http://i.guim.co.uk/w-620/h--/q-95/Guardian/news/gallery/2007/jun/08//1821-7345.jpg. (I’d ignore class=“pull-right” as this is more for layout purposes but it is another way of defining an attribute to the tag).

Another type of tag is <input> The input tag means that some kind of field will be provided to the user to input a value. An input tag has an attribute called type. In index.html we’re using radio buttons so we define the type as radio. There are other types of input available too, these include checkboxes and text.


HTML alone is limited because we can’t feedback to the user the answers to the quiz. To add a new question requires a lot of copy, paste and updating of the code. We also don’t really expect the quiz writers to edit HTML to create a new quiz.

Javascript is more a dynamic language, we’re going to use it to help build a quiz that will allow us to add new questions quickly. We’ll also add code to take the users answer and feedback how many they got correct.

JavaScript
===========
We used quiz.html and quiz.js in the session. 

A few Javascript explainers:
var - means variable. It is a name we want to associate a value to. So for example in maths (algebra) we’re used to hearing x=3.  In Javascript this can be defined as var x = 3 where x is the name of the variable and 3 is the value. It doesn’t have to be just about numbers though you can have:
var fruit = "apples" (fruit is the variable name for the word apples)
var status = true (stats is the variable name for a true value)

function - this means the code inside the function will do something. Anything that calls this function doesn’t have to worry about how it’s done but just function will take care of it. There are a number of functions already provided in quiz.js. We need you to write the other functions to populate the quiz, let the user submit an answer and return how many they got correct.

In quiz.js the first question text and first radio button been created. Can you create the second and third radio buttons. 


At the bottom of quiz.js you can see that setAnswers has been called with three possible answers
q1.setAnswers('1791', '1821', '1999');


this.setAnswers = function (answer1, answer2, answer3) {
       var answerElement1 = createAnswerContainer();
        setText(answerElement1, answer1);
        setRadioButton(answerElement1, 'q1Choices', answer1);
    };

The code to create the first button is in setAnswers, it can be adapted to add the second and third choices. 

setText(answerElement1, answer1); is a function that can take a new element and an answer text.
setRadioButton(answerElement1, 'q1Choices', answer1); is another function that takes the new element and creates a radio button. 'q1Choices is the name of the radio button and it's value is set to answer1.


Once you have made your changes, save quiz.js and open quiz.html. If you can't the new radio buttons then try looking in the Developer Console which should help identify where you may have gone wrong. To do this, right click in the browser, select Inspect Element, go the Console tab. If there is a red icon click it, it will help identify the line causing the issue.

Once you have the radio buttons, try adding another question at the bottom of the file.

Do you see a problem with the new question? The radio buttons choices for question one and two are grouped together, we can't answer both questions at the same time! We need to separate the radio buttons for question 1 and question 2. We need to give  setRadioButton(answerElement1, 'q1Choices', answer1); for question 1 radio buttons but setRadioButton(answerElement1, 'q2Choices', answer1) radio buttons.

Functions can take parameters, we're currently passing in three to this.setAnswers. Can you make it pass in four, the fourth can be the variable name which set radio button name too. Hint you will have to update the code calling setAnswers too.

this.setAnswers is quite long and it only allows us to have 3 choices per question. What if we wanted four choices for question 2 or 8 choices for question 8? 

We can use a list - this is also known as an array. An example of a list of fruit:
var fruits = ['apples', 'bananas', 'cranberry']
Each fruit can be fetched individually. This can be done by fruits[i] where i is a number. The number represents the position of where the fruit is in the list, we start at zero. So for example 
fruits[0] //apples
fruits[1] //bananas
fruits[2] // cranberry

Can you create a variable for each possible choices and pass it this.setAnswers. Hint
this.setAnswers = function (answer1, answer2, answer3) {...}

can change to take just one parameter which is the list
this.setAnswers = function (answerList) {...}

Now that we have a list we can use a for loop over it to create the radio button.
A for loop is loop that will run as long as it meets the conditions set. 

for (i=0; i<4; i++) { 
	alert(i);
}

The for loop is broken into three parts
i=0; i is a variable set to zero to start. 
i<4 The loop should continue to run until i is less than 4. If i is less than 4 then run what it is the curly brackets {} In this case it is to alert the number but it can be anything.
i++ On each loop increase i by 1.

In lists to find out how many items are in a list is we can do fruits.length. In the above example this would give us 3. So we can combine lists and for loops to write

for (i=0; i < fruits.length; i++) { 
	alert(fruit[i]);
}

Can you do this for setAnswers? Try changing the number of choices in the lists.

We want to check if the user has submitted the correct answers and tell them how many the got correct. We can do this all in 

quiz.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var result = quiz.querySelector('#result');
    
    result.innerHTML = "You got 2 out of 2 correct";
});

This code waits for the submit button to clicked. We need to add the code check their answers. The code to set the correct answer per question has already been created and the answer is stored in the variable correctAnswer. The function  this.checkAnswer is partially implemented. It currently just gets the radio button the user has selected and stores it in selectedAnswer. We need to update this function to tell us if selectedAnswer is the same as correctAnswer.

Working with booleans - a boolean is a true or false value. In Javascript we define this with three equal operators (===). So for example:

3 === 3 //true
“apples” === “oranges” //false

See if you can update checkAnswer to take a parameter that will be the users’ answer and check it against our correct answer.

We can use checkAnswer function in quiz.addEventListener to check if each answer is correct.

If statements. 
In many languages if statements are used to check conditions. In javascript this is defined as
if ( x === 3) {
//do something
}

or 
if (y === “apples”){
//do something
}

Where x and y are variables. You can also add it to check the result of a function e.g. checkAnswer (remember that function returns a true or false answer). 
We may want to count how many of the questions are correct, so we can set a variable to zero e.g. var counter = 0, to increase a counter by one we simply do counter++.
Finally you want to return back to the user how many they got correct. You can do this with an alert(counter); or update result.innerHTML  with string concatenation:
"You got" +counter + " out of 2 correct";


  
