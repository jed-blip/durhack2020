import React from "react";
import Header from './layout/header';

class Login extends React.Component {
    /*componentWillMount() {
        setInterval(() => {
            fetch("http://localhost:3080/ready").then(res => {
                if (res.areWeDone === "true") {
                    this.props.set_game_state("question");
                }
            })
        }, 500)
    }*/

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.set_username(this.state.value)
        this.props.set_game_state("question")
        event.preventDefault();
    }
    

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}

export default Login;