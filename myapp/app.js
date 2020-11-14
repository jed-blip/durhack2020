const express = require('express', 4.17.1)
const app = express()
const port = 3080

var nameArray = []
var x = 0
var roomFull = False

app.get('/game', (req, res) => {
    if ()
    res.send
})
//error checking
app.post('/', (req, res) => {
    if (name === '') {
        res.send("Name is empty")
    }
    nameArray.push([name, x]);
    if (x === 3) {
        roomFull = True
    }
    x += 1;
    res.send(roomFull)
})



