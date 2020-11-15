import React,{useState} from "react";

import Waiting from "./waiting";
import Header from './layout/header';
import './question.css';
import {} from './queries';
const host='http://ec2-35-177-205-141.eu-west-2.compute.amazonaws.com:3080/';

class Question extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { question: null , value: "", waiting: false};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({question: this.state.question, value: event.target.value, waiting: false});
    }

    handleSubmit(event) {
        //send to backend
        this.setState({question: this.state.question, value: this.state.value, waiting: true});
        // /sendanswer - POST - queries: answer="", name=""
        fetch(host+"sendanswer?answer="+this.state.value+"&name="+this.props.username, {
            headers:{
                'content-type':'application/json; charset=UTF-8'
            },
            method: 'POST',
        })
        .then(data=>{return data.text()})
        .then(res=>{console.log(res)})
        var interval=setInterval(() => {
            // /roomfull - GET - return {full: [boolean]}
            fetch(host+"allanswered", {
                headers:{
                   'content-type':'application/json; charset=UTF-8'
                   },
                method: 'GET',
            })
            .then(data=>{return data.json()})
            .then(res=>{if (res.full){clearInterval(interval);this.props.set_game_state("answers")}else{
                this.setState({question:this.state.question,value:this.state.value,waiting:true})
            }})
        }, 500)
        event.preventDefault();
    }

    componentWillMount() {
        fetch(host+"question", {
            headers:{
                'content-type':'application/json; charset=UTF-8'
            },
            method: 'GET',
        })
        .then(data=>{return data.text()})
        .then(res=>{this.setState({question:res,answer:this.state.answer,waiting:this.state.waiting})})
    };

    render() {
        if (this.state.question === "") {
            this.props.set_game_state("final-score")
        }

        if (this.state.waiting === false) {
            return(
                <div>
                    <Header />
                    <h1 className="question-text">{this.state.question}</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>
                            Answer:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input className="submit-button" type="submit" value="Submit" />
                    </form> 
                </div>
            );
        } else {
            return (
                <Waiting username={this.props.username}/>
            )
        }
    }

    
}

export default Question;