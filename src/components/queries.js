const host='http://localhost:3080/';


function login(name){
    // login - POST - queries: name=""
    fetch(host+"login", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'POST',
        body: {
            name: name
        }
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};

function roomFull(){
    // /roomfull - GET - return {full: [boolean]}
    fetch(host+"roomFull", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'GET',
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};
function getQuestion(){
// /getquestion - GET - return question
    fetch(host+"getQuestion", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'GET',
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};

function sendAnswer(answer,name){
// /sendanswer - POST - queries: answer="", name=""
    fetch(host+"sendAnswer", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'POST',
        body: {
            name: name,
            answer:answer
        }
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};

function allAnswered(){
// allanswered - GET - return {allanswered: [boolean]}
    fetch(host+"allAnswered", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'GET',
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})  
};
function getAnswers(name){
// getanswers - GET - queries: name="" - return {[name]: [answer], ....}
    fetch(host+"getAnswers", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'GET',
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};

function sendScore(name,score){
// sendscore - POST - queries: name="", score=""
    fetch(host+"sendScore", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'POST',
        body: {
            name: name,
            score:score
        }
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};
function getScores(){
   // getscores - GET - return {[name]: [[roundscore, totalscore]], ....}
   fetch(host+"getScores", {
    headers:{
        'content-type':'application/json; charset=UTF-8'
    },
    method: 'GET',
    
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
 
};

console.log(getQuestion());