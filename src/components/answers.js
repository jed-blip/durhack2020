import React from "react";
import Waiting from "./waiting";
import Header from './layout/header';
import './answers.css';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        // chosenAnswers is {answer:chosen person}
        this.state = {chosenAnswers:{},answers: "", names: []};
        this.onChangeUser = this.onChangeUser.bind(this);
        this.calculateScore=this.calculateScore.bind(this)
    }

    componentWillMount() {
        //ask for the answer-user pairs
        this.setState({
            chosenAnswers:{},
        answers: {
            "Alice":"Answer1",
            "Bob":"Answer2",
            "Charlie":"Answer3"
        },names:["Alice","Bob","Charlie"]});

        for (var key in this.state.answers) {
            if (this.state.answers.hasOwnProperty(key)) {
                this.state.names.push(key);

            }
        }
    }
    onChangeUser(e){
        this.state.chosenAnswers[e.target.name]=e.target.value;
        console.log(this.state.chosenAnswers);
    }
    calculateScore(){
        var score=0
        for (var answer in this.state.chosenAnswers){
            if (this.state.chosenAnswers.hasOwnProperty(answer)) {
                var chosen_person=this.state.chosenAnswers[answer];
                if(this.state.answers[chosen_person]===answer){
                    score=score+1
                }
            }
        }
        this.postScore(score);
    }
    postScore(score) {
        console.log(score);
    }
    
    render() {
        return (
            <div>
                <Header />
                <div style={boxStyle}>
                    <div style={AnswerStyle}>
                        {this.state.answers[this.state.names[0]]}
                    <select name={this.state.answers[this.state.names[0]]} style={dropDownStyle} onChange={this.onChangeUser}>
                        <option value="" selected disabled hidden></option>
                        <option value={this.state.names[0]}>{this.state.names[0]}</option>
                        <option value={this.state.names[1]}>{this.state.names[1]}</option>
                        <option value={this.state.names[2]}>{this.state.names[2]}</option>
                    </select>
                    </div>
                    <div style={{paddingTop:"10px"}}></div>
                </div>
                <div style={boxStyle}>

                    <div style={AnswerStyle}>
                        {this.state.answers[this.state.names[1]]}
                    <select name={this.state.answers[this.state.names[1]]} style={dropDownStyle} onChange={this.onChangeUser}>
                        <option value="" selected disabled hidden></option>
                        <option value={this.state.names[0]}>{this.state.names[0]}</option>
                        <option value={this.state.names[1]}>{this.state.names[1]}</option>
                        <option value={this.state.names[2]}>{this.state.names[2]}</option>
                    </select>
                    </div>
                    <div style={{paddingTop:"10px"}}></div>
                </div>
                <div style={boxStyle}>

                    <div style={AnswerStyle}>
                        {this.state.answers[this.state.names[2]]}
                    <select name={this.state.answers[this.state.names[2]]} style={dropDownStyle} onChange={this.onChangeUser}>
                        <option value="" selected disabled hidden></option>
                        <option value={this.state.names[0]}>{this.state.names[0]}</option>
                        <option value={this.state.names[1]}>{this.state.names[1]}</option>
                        <option value={this.state.names[2]}>{this.state.names[2]}</option>
                    </select>
                    </div>
                    <div style={{paddingTop:"10px"}}></div>
                </div>
                <div style={{paddingTop:"10px"}}></div>
                <button onClick={this.calculateScore} type="submit" className="push_button blue">Submit</button>
            </div>
        )
    }

    
}
const AnswerStyle={
    width:"100%"
}
const dropDownStyle={
    display:"inline-block",
    position:"relative",
    float:"right"

}
const boxStyle={
    background:'#f4f4f4',
    padding:'10px',
    borderBottom:'1px #ccc dotted',
}
export default Answers;