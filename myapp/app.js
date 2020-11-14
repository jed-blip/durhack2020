const express = require('express', 4.17.1);
const app = express();
const port = 3080;

var nameArray = [];
var peopleCount = 0;
var roomFull = False;
var questionsEmpty = False;

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

app.get('/game', function (req, res) {
    if (questionArray.length() == 0) {
        res.send()
    }
    question = questionArray[qIndex];
})

