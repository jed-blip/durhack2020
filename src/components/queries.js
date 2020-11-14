function getQuestion(name) {
    var local_res;
    fetch("http://localhost:3080/getquestion?name="+name)
        .then(res => local_res = res.text())
    return local_res;        
}

function join(name) {
    var local_res;
    fetch("http://localhost:3080/join", {
        method: 'POST',
        body: {
            name: name
        }
    })
}