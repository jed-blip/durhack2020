const host='http://localhost:3080/';

function getQuestion(name) {
    var local_res;
    fetch("http://localhost:3080/getquestion?name="+name)
        .then(res => local_res = res.text())
    return local_res;        
};

function login(name){
    // login - POST - queries: name=""
    fetch("http://localhost:3080/login", {
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
    fetch("http://localhost:3080/roomFull", {
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
    fetch("http://localhost:3080/getQuestion", {
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
    fetch("http://localhost:3080/sendAnswer", {
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

};
function getAnswers(name){
// getanswers - GET - queries: name="" - return {[name]: [answer], ....}

};

function sendScore(name,score){
// sendscore - POST - queries: name="", score=""
    fetch("http://localhost:3080/sendScore", {
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
 
}
