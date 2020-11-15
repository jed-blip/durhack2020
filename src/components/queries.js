const host='http://ec2-35-177-205-141.eu-west-2.compute.amazonaws.com:3080/';


function login(name){
    // login - POST - queries: name=""
    fetch(host+"login?name="+name, {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'POST',
    })
    //.then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};

function roomFull(){
    // /roomfull - GET - return {full: [boolean]}
    fetch(host+"roomfull", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'GET',
    })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
};
function getQuestion(state,setState){
// /question - GET - return question
    
    fetch(host+"question", {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'GET',
    })
    .then(data=>{return data.text()})
    .then(res=>{setState({question:res,answer:state.answer,waiting:state.waiting})})
};

function sendAnswer(answer,name){
// /sendanswer - POST - queries: answer="", name=""
    fetch(host+"sendAnswer?answer="+answer+"&name="+name, {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'POST',
    })
    //.then(data=>{return data.json()})
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
    fetch(host+"getAnswers?name="+name, {
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
    fetch(host+"sendscore?name="+name+"&score="+score, {
        headers:{
            'content-type':'application/json; charset=UTF-8'
        },
        method: 'POST',
        //mode:"no-cors"  

    })
    //.then(data=>{return data.json()})
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
export {getQuestion, sendScore};
