export function number(number) {
  return {
    type: 'SET_NUMBERS',
    numberSelected: number,
  };
}

export function operator(operator) {
  return {
    type: 'SET_OPERATOR',
    operatorSelected: operator,
  };
}

export function clear() {
  return {
    type: 'CLEAR'
  };
}

export function toggleNegative() {
  equals();
  return {
    type: 'TOGGLE_NEGATIVE'
  };
}

export function equals() {
  // let tempState_five = state;
  // let operator_final = '';
  // if(tempState_five.number_one != '' && tempState_five.number_two != '' && tempState_five.operator_selected != '') {
  //   switch(tempState_five.operator_selected) {
  //     case '+':
  //       operator_final = 'plus'
  //   }
  //   let response = axios.get('http://localhost:3000/api/calculate' + '/?one=' + tempState_five.number_one+ '&two=' + tempState_five.number_two+ '&operator=' + operator_final)
  //   .then(function(response) {
  //     tempState_five.answer = response.data.answer;
  //     return Object.assign({}, state, tempState_five);
  //   });
  // }
  return {
    type: 'EQUALS'
  };
}
