
Goal of the session is to create a quiz with multiple questions and answers. The quiz will take user choices and reflect back how many answers are correct.

HTML
-----
-----
Aim:
Understand basic HTML and layout.
- Template (index.html) will contain basic form with a question and one answer.
- Student will be asked to add more answers 
- Change tags to see how this changes on the page.


Javascript & HTML
------------------
------------------

Aim:
Understand how to create quiz containing multiple questions and answers. Present back to the user how many correct answers they have.

- Template - quiz.html and quiz.js
- quiz.html to have the starting template for creating a question and element for inserting an answer.
- quiz.js to contain the code to insert a question.

Insert multiple choice answers
-------------------------------
- Student will be asked to insert three choices for the first question. Hint will be to follow similar pattern to inserting a question.  We expect the student to create a method with three answer parameters and copy how to create and insert the node as per question. (Note they may choose to do this by using an array as parameter.)
- Present to the student how to refactor the answer method to make the code reusable.
- Student will be asked how can the setAnswer function be taken any number of multiple choice questions. We expect (or need to hint) about arrays. Should we explain arrays?


Submit an answer to a question and tell user if they are correct
-----------------------------------------------------------------
- The guide will present how to find which of the mutiple choices has been checked by the user ( var selectedAnswer = question.querySelector(':checked').value)
- Student will be asked to create function that will check the real answer against the one submitted.
- Student will also need to implement how to reflect back to the user if they are correct or not.


Extra tasks depending on how far students get. 


Add multiple questions
----------------------
- Using the concept of arrays student can add multiple questions.
- Have a submit button per question to reflect back to the user?


Reflect back to the user how many answers are correct
------------------------------------------------------

- Student to implement a method to iterate over the answers to questions to calculate how many the user has answered correctly.
- Introduce concept of iteration and accumulating answers?
