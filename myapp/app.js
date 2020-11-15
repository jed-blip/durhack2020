const express = require('express');
const app = express();
const port = 3080;

var cors = require('cors');

//sam and jenni, this is something I have included to allow access to the API when hosted on a different domain to the front end
app.use(cors());

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

var nameArray = [];
var answerArray = [];
var peopleCount = 0;
var questionCount = 0;
var qIndex = totalquestions - 1;
var roomFull = false;
var totalquestions = 10;
var questionsArray = [];
var totalScoreArray = {};
var scoreArray = {};
var arrayFull = false;

//Initialises the questions.
function initialiseQuestions() {
    l = situationArray.length
    var indices = [];
    while (indices.length < totalquestions) {
        var newindex = Math.floor(Math.random() * l);
        if (contains(newindex, indices) == false) {
            indices.push(newindex);
        }
    }
    i = 0
    while (questionsArray.length != totalquestions*3) {
        questionsArray.push(situationArray[indices[i]])
        questionsArray.push(situationArray[indices[i]])
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
    totalScoreArray[req.query.name] = 0;
    peopleCount += 1;
    console.log(nameArray);
    res.send(true);
})

app.get('/roomfull', (req, res) => {
    if (peopleCount === 3) {
        roomFull = true;
    }
    var room = {full: roomFull};
    res.send(room);
})

app.get('/question', function (req, res) {
    answerArray = [];
    scoreArray = {};
    if (questionArray.length === 0) {
        question = '';
        questionArray = initialiseQuestions();
    }
    else {
        question = questionArray.pop();
    }

    res.send(question);
})

app.post('/sendanswer', (req, res) => {
    answerArray.push([req.query.name, req.query.answer]);
    console.log(answerArray);
    res.send(true);
})

app.get('/allanswered', (req, res) => {
    if (answerArray.length === 3) {
        arrayFull = true;
    }
    var answer = {full: arrayFull};
    res.send(answer)
})

app.post('/sendscore', (req,res) => {
    console.log(req.query.name, req.query.score);
    scoreArray[req.query.name] = req.query.score;
    totalScoreArray[req.query.name] += req.query.score;
    console.log(scoreArray);
    console.log(totalScoreArray);
    res.send(true);
})

app.get('/allscoressent', (req, res) => {
    if (Object.keys(scoreArray).length === 3) {
        res.send({ready: true});
    } else {
        res.send({ready: false});
    }
})

app.get('/getscore', (req, res) => {
    var personObject = {}
    for (var y=0; y < nameArray.length; y++) {
        personObject[nameArray[y][0]] = [scoreArray[nameArray[y][0]], totalScoreArray[nameArray[y][0]]];
    }

    res.send(personObject)
})

app.get('/getfinalscore', (req, res) => {
    var personObject = {}
    for (var y=0; y < nameArray.length; y++) {
        personObject[nameArray[y][0]] = [scoreArray[nameArray[y][0]], totalScoreArray[nameArray[y][0]]];
    }

    nameArray = [];
    scoreArray = {};
    totalScoreArray = {};

    res.send(personObject)
})


app.get('/getanswers', (req, res) => {
    var answerObject = {}
 
    for (var i=0; i < answerArray.length; i++) {
        if (answerArray[i][0] != req.query.name) {
            answerObject[answerArray[i][0]] = answerArray[i][1];
        }
    }
 
    console.log(answerObject);
    res.send(answerObject);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
