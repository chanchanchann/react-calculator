import React,{ Component } from 'react';
import './App.css';
import { Button} from 'react-bootstrap';
import { tsConstructorType } from '@babel/types';
import {Input} from './Input.jsx';
import {Button1} from './Button1.jsx';
import {AC} from './AC.jsx';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display:""
    };
    this.displayToInput = this.displayToInput.bind(this);
  }

  displayToInput = val =>{
    console.log(this.state.display);
    this.setState({display: this.state.display + val});
  };
  handleEqual = () =>{
    this.setState({display: math.evaluate(this.state.display) })
  };

  render(){
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <Input display={this.state.display}/>
        </div>
        <div className="row">
          <AC className="buttonAC" handleClear={() => this.setState({display: ""})} >AC</AC>
          <Button1 className="buttonDY" handleClick={this.displayToInput}>/</Button1>
        </div>
        <div className="row">
          <Button1 handleClick={() => this.displayToInput}>7</Button1>
          <Button1 handleClick={this.displayToInput}>8</Button1>
          <Button1 handleClick={this.displayToInput}>9</Button1>
          <Button1 handleClick={this.displayToInput}>*</Button1>
        </div>
        <div className="row">
          <Button1 handleClick={this.displayToInput} >4</Button1>
          <Button1 handleClick={this.displayToInput} >5</Button1>
          <Button1 handleClick={this.displayToInput} >6</Button1>
          <Button1 handleClick={this.displayToInput} >-</Button1>
        </div>
        <div className="row">
          <Button1 handleClick={this.displayToInput} >1</Button1>
          <Button1 handleClick={this.displayToInput} >2</Button1>
          <Button1 handleClick={this.displayToInput} >3</Button1>
          <Button1 handleClick={this.displayToInput} >+</Button1>
        </div>
        <div className="row">
          <Button1 handleClick={this.displayToInput} >0</Button1>
          <Button1 handleClick={this.displayToInput} >.</Button1>
          <Button1 handleClick={() =>  this.handleEqual()} >=</Button1>
        </div>
      </div>
    </div>
  );
}
}

export default App;
