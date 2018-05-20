import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Username from './Username.js';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:'ON'
    }
  };
  onClick_change=()=>{
    // console.log(this.state.value);
    if(this.state.value === 'ON'){
      this.setState({ value:'OFF' });
    }
    else{
      this.setState({ value:'ON' });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Username name = 'MARK'/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary" onClick={ this.onClick_change}>{ this.state.value }</Button>
      </div>
    );
  }
}

export default App;
