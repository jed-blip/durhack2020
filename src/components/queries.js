const host='http://ec2-35-177-205-141.eu-west-2.compute.amazonaws.com:3080/';

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
export {sendScore};
