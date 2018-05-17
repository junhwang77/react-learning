import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state ={
    username: 'jhwang'
  }

  changeUserNameHandler = (event) => {
    this.setState( {
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '5px dashed black',
      padding: '20px'
    }


    return (
      <div className="App" style={style}>
        <UserInput changed={this.changeUserNameHandler} username={this.state.username}/>
        <UserOutput username='junhwang77' />
        <UserOutput
          username={this.state.username} />
        <UserOutput  />
      </div>
    );
  }
}

export default App;
