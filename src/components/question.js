import React from "react";
import Waiting from "./waiting";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: "Lorem ipsum?", value: "", waiting: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({question: this.state.question, value: event.target.value, waiting: false});
    }

    handleSubmit(event) {
        //send to backend
        this.setState({question: this.state.question, value: this.state.value, waiting: true});
        event.preventDefault();
    }

    /*componentWillMount() {
        this.state.res = "" //a function
    }*/

    render() {
        if (this.state.waiting === false) {
            return(
                <div>
                    <p className="question-text">{this.state.question}</p>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>
                            Answer:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
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