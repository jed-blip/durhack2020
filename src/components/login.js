import React from "react";
import Header from './layout/header';
import './login.css';
import Waiting from './waiting';
const host='http://ec2-35-177-205-141.eu-west-2.compute.amazonaws.com:3080/';


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
        this.state = {value: '',waiting:false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value,waiting:false});
    }

    handleSubmit(event) {

        this.props.set_username(this.state.value);
        console.log(this.props.username);
        // login - POST - queries: name=""
        fetch(host+"login?name="+this.props.username, {
            headers:{
                'content-type':'application/json; charset=UTF-8'
            },
            method: 'POST',
        })
        .then(data=>{return data.text()})
        .then(res=>{console.log(res)})
        
        var interval=setInterval(() => {
             // /roomfull - GET - return {full: [boolean]}
            fetch(host+"roomfull", {
                headers:{
                    'content-type':'application/json; charset=UTF-8'
                    },
                method: 'GET',
            })
            .then(data=>{return data.json()})
            .then(res=>{if (res.full){clearInterval(interval);this.props.set_game_state("question")}else{
                this.setState({value:this.state.value,waiting:true})
            }})
        }, 500)
        event.preventDefault();
    }
    

    render() {
        if (this.state.waiting===false){
            return(
                <div>
                    <Header />
                    <div style={{paddingTop:'10%'}}></div>
                    <button className="push_button red">Create Room</button>
                    <div style={{paddingTop:"20px"}}></div>
                    <button onClick={this.handleSubmit} type="submit" style={{width:"50%"}} className="push_button blue">Join Room</button>
                    <div style={{paddingTop:"20px"}}></div>
                    <form onSubmit={this.handleSubmit} style={formInputStyle}>
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
        }else{
            return (
            <Waiting username={this.props.username} />
            )
        }
    }
    
}
const formInputStyle={
    width:"50%",
    display:"flex",
    margin:"auto",
    flexDirection: "column",
}
export default Login;