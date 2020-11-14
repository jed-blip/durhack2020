const express = require('express');
const app = express();
const port = 3080;

var nameArray = [],
    answerArray = [],
    peopleCount = 0;
var questionCount = 0;
var qIndex = 9;
var roomFull = False;
var questionsEmpty = False;
var arrayFull = False;

//ask how to get parameters, what to put after slash
app.post('/', (req, res) => {
    if (name === '') {
        res.send("Name is empty");
    }
    nameArray.push([name, peopleCount]);
    if (peopleCount === 3) {
        roomFull = True;
    }
    peopleCount += 1;
    res.send(roomFull)
})

app.get('/question', function (req, res) {
        //res.send(questionsEmpty);
    if (questionCount === 3) {
        questionArray.pop();
        qIndex -= 1;
        questionCount = 0;
    }
    else {
        questionCount += 1;
    }
    if (questionArray.length() === 0) {
        questionsEmpty = True;
        question = null;
    }
    else {
        question = questionArray[qIndex];
    }
    res.send(question, questionsEmpty);
})

app.post('/matching', (req, res) => {
    answerArray.push([name, answer]);
    if (answerArray.length() === 4) {
        arrayFull = True;
    }
    res.send(arrayFull);
})

app.get('/matching', (req, res) => {
    
})

