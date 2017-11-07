import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: '',
        number_one: '',
        number_two: '',
        operator_selected: '',
        is_negative: false }
    this.number = this.number.bind(this);
    this.operator = this.operator.bind(this);
    this.clear = this.clear.bind(this);
    this.equals = this.equals.bind(this);
  }


  number(numberSelected) {
    let tempState = this.state;
    console.log(tempState);
    if(tempState.number_one !== '') {
      if(tempState.operator_selected === '') {
        tempState.number_one += numberSelected;
        tempState.answer = tempState.number_one;
      } else {
        tempState.number_two += numberSelected;
        tempState.answer = tempState.number_two;
      }
    } else {
      tempState.number_one += numberSelected;
      tempState.answer = tempState.number_one;
    }
    this.setState(tempState);
  }

  operator(operatorSelected) {
    let tempState_two = this.state;
    if(tempState_two.number_one !== '') {
      tempState_two.operator_selected = operatorSelected;
    } else {
      tempState_two.operator_selected = operatorSelected;
    }
    this.setState(tempState_two);
  }

  clear() {
    let tempState_three = this.state;
    tempState_three.number_one = '';
    tempState_three.number_two = '';
    tempState_three.operator_selected = '';
    tempState_three.answer = '';
    this.setState(tempState_three);
  }


  equals() {
    let tempState_five = this.state;
    let operator_final = '';
    if(tempState_five.number_one != '' && tempState_five.number_two != '' && tempState_five.operator_selected != '') {
      switch(tempState_five.operator_selected) {
        case '+':
          operator_final = 'plus'
          break;
        case '-':
          operator_final = 'sub'
          break;
        case '*':
          operator_final = 'mul'
          break;
        case '/':
          operator_final = 'div'
          break;
      }
      let response = axios.get('http://localhost:3000/api/calculate' + '/?one=' + tempState_five.number_one+ '&two=' + tempState_five.number_two+ '&operator=' + operator_final)
      .then(response => {
        console.log(response.data.answer);
        this.setState({
          answer: response.data.answer,
          number_one: response.data.answer,
          number_two : '',
          operator_selected: ''
        })
      });

  }
}



  renderDisplayValue() {
    return <div> {this.state.answer} <sup> {this.state.operator_selected}</sup> </div>
  }
  render() {
    return (
      <div className="container">
          <div className="col-md-4"> </div>
          <div className="col-md-4 col-sm-8 col-xs-12 calculator-layout">
            <div className="answer-field">
              <div className="result" readOnly> {this.renderDisplayValue()} </div>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn btn-lg" onClick={() => this.number('9')}>9</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn btn-lg" onClick={() => this.number('8')}>8</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('7')}>7</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('6')}>6</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('5')}>5</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('4')}>4</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('3')}>3</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('2')}>2</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('1')}>1</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('0')}>0</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.number('.')}>.</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.operator('+')}>+</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.operator('-')}>-</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.operator('/')}>/</button>
            </div>
            <div className="col-xs-4 calculator-button">
              <button className="btn  btn-lg" onClick={() => this.operator('*')}>x</button>
          </div>
          <div className="col-xs-4 calculator-button">
            <button className="btn btn-lg" onClick={() => this.equals()}>=</button>
          </div>
          <div className="col-xs-4 calculator-button">
            <button className="btn btn-lg" onClick={() => this.clear()}>C</button>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    number_one : state.number_one,
    number_two: state.number_two,
    operator_selected: state.operator_selected,
    answer: state.answer
  }
}


function mapDispatchToProps(dispatch) {
    return {
      // number: (data) => dispatch(number(data)),
      // operator : (data) => dispatch(operator(data)),
      // clear : (data) => dispatch(clear(data)),
      // toggleNegative: (data) => dispatch(toggleNegative(data)),
      // equals: (data) => dispatch(equals(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
