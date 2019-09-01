
let exp = '', number, decimal, equal, operator, allowSR = true; 
let textView = document.forms['myForm'] ['textview'];
const tableInputOfNumType = document.getElementsByClassName("number");

const insertNum = (num) => {
  if (equal) {
    exp = num;
    textView.value = exp;
    number = true;
    equal = false;
  } else {
    exp = textView.value + num;
    textView.value = exp;
    number = true;
  }
  
  if(operator) decimal = false;
  SR('a');
};

const insertOp = (op) => {
  textView.value = exp + op;
  operator = true;
  equal = false;
  allowSR = false;
  SR('a');
};

const insertDec = () => {
  if(number && !decimal) {
    textView.value = exp + ".";
    decimal = true;
    equal = false;
    operator = false;  
  }
}

const equalTo = () => {
  if(exp) {
    exp = eval(exp);
    textView.value = exp;
    equal = true;
    decimal = false;
    number = false;
    allowSR = true;
    SR('a');
  }
}

const clearDisplayVal = () => {
  exp = '';
  textView.value = exp;
  decimal = false;
}

const back = () => {
  exp = textView.value;
  exp = exp.substring(0, exp.length - 1);
  textView.value = exp;
}

const SR = (x) => {
  if (x == 'r') {
    exp = Math.sqrt(exp);
    textView.value = exp;
  } else if (x == 's') {
    exp = exp * exp;
    textView.value = exp;
  } else if (x == 'a' && allowSR) {
    document.getElementById('r').disabled = false;
    document.getElementById('s').disabled = false;
  } else if (!allowSR) {
    document.getElementById('r').disabled = true;
    document.getElementById('s').disabled = true;
  }
}