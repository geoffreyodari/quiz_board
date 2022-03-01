# Quiz Board
Quiz Board is a web application for testing students using quizzes.

Created by Geoffrey Odari 
## View demo
https://geoffreyodari.github.io/quiz_board/

### Authors
Geoffrey Odari

## Installation requirements

You will need a web server 

Any web server that can support html pages will do.
## Installation
1. download the application to the root of your web server from github "
````
$ git clone https://github.com/geoffreyodari/quiz_board
````
## Creating your questions
1. create your own custom question using the JSON object format provided 
```
    {

	"question": "What is the capital of kenya?",
	"answers": [{
                    "answer": "Nairobi",
                    "correct": true
                },
                {
                    "answer": "Mombasa",
                    "correct": false
                },
                {
                    "answer": "Kisumu",
                    "correct": false
                }
	            ]
    }
```
2. place each question object into an array and save it in the file "questions.json" in the /js directory 

## Using the application
### Accessing the application
On your web browser type in the address bar  http://your_server_address/quiz_board  to access the app 
![image](https://drive.google.com/uc?export=view&id=1BXscIpKVF0o2agTTEdD4ZkP9xaoYvMfC)

### Answering Questions
 Check the correct answer from the answer options provided
![image](https://drive.google.com/uc?export=view&id=1qTlFjk4mVKkEXcGQSdfuyT9tI5QjfWbj)

### Submiting Answers
 click on the submit button to submit your answers 
### Viewing Scores
 A student will be able to view their performance
 ![image](https://drive.google.com/uc?export=view&id=1Zw2wwTF1oFROWhoXqyQnaOGY0oofaRs_)