import React, { Component } from 'react';
import { Button,Input,InputGroup,InputGroupAddon,Table } from 'reactstrap';
import './App.css';

class Content extends Component{
    render(){
        const lists = this.props.added_list_array.map((list, index)=>
          <tr key={ index }><td>{ list }</td></tr>
      );
      return(
        <div className = "content">
            <div>
                <InputGroup>
                    <Input placeholder="Enter words" value={ this.props.inputValue }  onChange={ this.props.get_function }/>
                    <InputGroupAddon addonType="append">
                        <Button color = 'success' onClick = { this.props.add_function }>
                            <span>ADD</span>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div className = "list_content">
                <h2>List of Items</h2>
                <Table striped bordered>   
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        </div>
      );
    }
};
export default Content;