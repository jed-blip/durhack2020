import React from "react";
import Header from './layout/header';

class Waiting extends React.Component {
    render() {
        return(
            <div>
                <Header username={this.props.username} />
                <h1>Waiting for other users to submit</h1>
            </div>
        )
    }

    
}

export default Waiting;