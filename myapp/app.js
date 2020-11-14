const express = require('express');
const app = express();
const port = 3080;

var situationArray = ["You're on a walk. A boulder rolls onto your path.", 
"You're on a walk. A cat jumps in front of you.", 
"You're on a walk. The sky goes black.",
 "You're on a walk. A bolt of lightning strikes beside you.", 
 "You're on a walk. Shrek pops out of the ground.", 
 "You're at home. Your chair turns into a lion.", 
 "You're at home. It starts raining indoors.", 
 "You're at home. Everything you touch turns to gold.",
"You're at home. A bear barges into your room.",
"You're at home. Your pets begin to talk.",
"You're eating food. Your fork turns into a frog.",
 "You're eating food. Your tongue turns into paper.",
"You're eating food. Your plate begins to rotate.",
"You're eating food. All your food tastes like chocolate.",
"You're eating food. All your food turns into peas."];

var nameArray = [],
    answerArray = [],
    peopleCount = 0;
var questionCount = 0;
var qIndex = totalquestions - 1;
var roomFull = False;
var questionsEmpty = False;
var totalquestions = 10;
var questionsArray = [];
var totalScores = [];
var scoreArray = [];
var arrayFull = False;
var personObject = {}
var answerObject = {}

//Initialises the questions.
function initialiseQuestions() {
    l = situationArray.length
    var indices = [];
    while (indices.length < totalquestions) {
        var newindex = Math.floor(Math.random() * l);
        if (contains(newindex, indices) == False) {
            indices.push(newindex);
        }
    }
    i = 0
    while (questionsArray.length != totalquestions) {
        questionsArray.push(situationArray[indices[i]])
        i += 1
    }
    return questionsArray
}

var questionArray = initialiseQuestions()

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

app.post('/login', (req, res) => {
    nameArray.push([req.query.name, peopleCount]);
    peopleCount += 1;
    res.send(True);
    })

app.post('/roomfull', (req, res) => {
    if (peopleCount === 3) {
        roomFull = True;
    }
    var room = {full: roomFull};
    res.send(room);
})

app.get('/question', function (req, res) {
    if (questionCount === 3) {
        var variable = questionArray.pop();
        qIndex -= 1;
        questionCount = 0;
    }
    else {
        questionCount += 1;
    }
    if (questionArray.length() === 0) {
        question = '';
    }
    else {
        question = questionArray[qIndex];
    }
    res.send(question);
})

app.post('/sendanswer', (req, res) => {
    answerArray.push([req.query.name, req.query.answer]);
    res.send(True);
})

app.get('/allanswered', (req, res) => {
    if (answerArray.length() === 4) {
        arrayFull = True;
    }
    var answer = {full: arrayFull};
    res.send(answer)
})

app.post('/sendscore', (req,res) => {
    scoreArray.push([req.query.name, req.query.score]);
    res.send(True);
})

app.post('/getscore', (req, res) => {
    //object = name with attribute : array --> currentscore, totalscore
    for (var i; i < nameArray.length(); i++) {
        if (totalScores[i] === nameArray[i]) {
            for (var y; y < nameArray.length(); y++) {
                if (nameArray[i] === scoreArray[y][0]){
                    index = name
                    break
                }
            }
            totalScores[i][1] = scoreArray[index][1];
            totalScores[i][2] += scoreArray[index][1];
        }
    }
    for (var y; y < totalScores.length(); y++) {
        personObject[totalScores[y][0]] = [totalScores[y][1], totalScores[y][2]];
    }
    res.send(personObject)
})


app.get('/getanswers', (req, res) => {
    for (var i; i < answerArray; i++) {
        if (answerArray[i][0] != req.query.name) {
            answerObject[answerArray[y][0]] = answerArray[y][1];
        }
    }
    res.send(answerObject);
})