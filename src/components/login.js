import React from "react";
import Header from './layout/header';
import './login.css';
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
                <Header />
                <div style={{paddingTop:'10%'}}></div>
                <button className="push_button red">Create Room</button>
                <div style={{paddingTop:"20px"}}></div>
                <button type="submit" className="push_button blue" onClick={this.handleSubmit}>Join Room</button>
                <div style={{paddingTop:"20px"}}></div>
                <form style={formInputStyle}>
                    <input 
                        type="text" 
                        name="name" 
                        style={{ flex: '10', padding: '10px' }}
                        placeholder="User Name" 
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form> 
            </div>
        )
    }
    
}
const formInputStyle={
    width:"50%",
    display:"flex",
    margin:"auto"
    


}
export default Login;