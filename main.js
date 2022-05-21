const display = document.querySelector('.display');
const op = document.querySelectorAll('.operator');
const numberEl = document.querySelectorAll('.num');

let num1 = '';
let num2 = '';
let num3 = '';
let result = false;
let sign = '';
let action = ['*', '+', '-', '/'];


function clearAll() {
      num1 = '';
      num2 = '';
      num3 = '';
      result = false;
      sign = '';
      display.textContent = '0';
}

function del() {
      if (num1 !== '' && sign === '') {
            num1 = display.textContent = display.textContent.slice(0, -1);
      }
      if (display.textContent === '') {
            display.textContent = '0';
      }
      else if (num1 !== '' && sign !== '') {
            num2 = display.textContent = display.textContent.slice(0, -1);
      }
      return;
}

document.querySelector('.del').addEventListener('click', del);

function percent() {
      num1 = (num1 * num2) / 100;
      result = true;
      display.textContent = num1;
}

for (let i = 0; i < numberEl.length; i++) {
      numberEl[i].addEventListener('click', function (e) {

            let number = e.target.textContent;
            if (num1.length > 9) {
                  num1.disabled = true;
            } else {
                  if (num2 === '' && sign === '') {
                        num1 += number;
                        display.textContent = num1;
                  } else if (num1 !== '' && num2 !== '' && sign !== '' && result) {
                        num2 = number;
                        result = false;
                        display.textContent = num2;
                  }
                  else {
                        num2 += number;
                        display.textContent = num2;
                  }
            }
      });
}

for (let i = 0; i < op.length; i++) {
      op[i].addEventListener('click', function (e) {
            let operator = e.target.textContent;
            if (action.includes(operator)) {
                  sign = operator;
            }
            if (operator === '=') {
                  if (num1 === '') {
                        display.textContent = '0';
                  } else {
                        switch (sign) {
                              case '+':
                                    num1 = (+num1) + (+num2);
                                    break;
                              case '-':
                                    num1 = num1 - num2;
                                    break;
                              case '*':
                                    num1 = num1 * num2;
                                    break;
                              case '/':
                                    if (num2 === '0') {
                                          num1 = '';
                                          num2 = '';
                                          sign = '';
                                          display.textContent = 'Ошибка';
                                          return;
                                    } else {
                                          num1 = num1 / num2;
                                    }
                                    break;
                        }
                        result = true;
                        display.textContent = num1;
                  }
            }
      });
}
