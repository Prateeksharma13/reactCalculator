import axios from 'axios';

const initialState = {
    answer: '',
    number_one: '',
    number_two: '',
    operator_selected: '',
    is_negative: false
};

const Calculator = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NUMBERS':
        //console.log(axios.get('http://localhost:3000/api/calculate'));
          let tempState = state;
          if(tempState.number_one != '') {
            if(tempState.operator_selected == '') {
              tempState.number_one += action.numberSelected;
              tempState.answer = tempState.number_one;
            } else {
              tempState.number_two += action.numberSelected;
              tempState.answer = tempState.number_two;
            }
          } else {
            tempState.number_one += action.numberSelected;
            tempState.answer = tempState.number_one;
          }
          return Object.assign({}, state, tempState);
        case 'SET_OPERATOR':
          let tempState_two = state;
          if(tempState_two.number_one != '') {
            tempState_two.operator_selected = action.operatorSelected;
            return Object.assign({}, state, tempState_two);
          } else {
            tempState_two.operator_selected = action.operatorSelected;
            return Object.assign({}, state, tempState_two);
          }
        case 'CLEAR':
          let tempState_three = state;
          tempState_three.number_one = '';
          tempState_three.number_two = '';
          tempState_three.operator_selected = '';
          tempState_three.answer = '';
          return Object.assign({}, state, tempState_three);
        case 'TOGGLE_NEGATIVE':
            let tempState_four = state;
            if(tempState_four.number_one == '') {
              tempState_four.number_one += '-';
            } else if (tempState_four.number_two == '') {
              tempState_four.number_two += '-';
            }
            return Object.assign({}, state, tempState_four);
        case 'EQUALS':
              let tempState_five = state;
              let operator_final = '';
              if(tempState_five.number_one != '' && tempState_five.number_two != '' && tempState_five.operator_selected != '') {
                switch(tempState_five.operator_selected) {
                  case '+':
                    operator_final = 'plus'
                }
                let response = axios.get('http://localhost:3000/api/calculate' + '/?one=' + tempState_five.number_one+ '&two=' + tempState_five.number_two+ '&operator=' + operator_final)
                .then(function(response) {
                  tempState_five.answer = response.data.answer;
                  return Object.assign({}, state, tempState_five);
                });
              }

        default:
            return state;
    }

}

export default Calculator;
