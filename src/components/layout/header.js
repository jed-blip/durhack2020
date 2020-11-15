import React from 'react';


class Header extends React.Component {
  render(){
    return (
      <div>
        <header style={headerStyle}>
          <h3 style={{textAlign:"left",position:"absolute",left:"0",top:"0"}}>Username: {this.props.username} </h3>
          <h1>Ice Breaker</h1>
        </header>
      </div>
    )}
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position:"relative"
}
export default Header;