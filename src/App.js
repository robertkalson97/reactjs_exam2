import React, { Component } from 'react';
import Content from './Content';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            add_value:'', list_array:[]
        }
        this.getValueHandler = this.getValueHandler.bind(this);
        this.addValueHander = this.addValueHander.bind(this);
    };
    getValueHandler = (e) => {
        this.setState({ add_value: e.target.value });
    }
    addValueHander = () => {
        var item = this.state.add_value;
        var myArray = this.state.list_array;
        if(item !== '')
	         myArray.push(item);
        this.setState({ list_array: myArray, add_value:'' });
    }
  render() {
    return (
        <Content added_list_array = { this.state.list_array } inputValue={this.state.add_value} get_function={this.getValueHandler} add_function={this.addValueHander}/>
    );
  }
}

export default App;