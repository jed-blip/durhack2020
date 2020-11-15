import React from "react";

class Waiting extends React.Component {
    render() {
        return(
            <div>
                <p>Username: {this.props.username}</p>
                <h1>Waiting for other users</h1>
            </div>
        )
    }

    
}

export default Waiting;