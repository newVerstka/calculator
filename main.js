const display = document.querySelector('.display');
const number = document.querySelectorAll('.num');
const op = document.querySelectorAll('.operator');
const action = ['-', '+', '*', '/', '+/-', '%'];

let Num1 = '';
let Num2 = '';
let sign = '';
let result = false;

function AC() {
      Num1 = '';
      Num2 = '';
      sign = '';
      result = false;
      display.textContent = '0';
}

document.querySelector('.ac').onclick = AC;

for (let i = 0; i < number.length; i++) {
      number[i].addEventListener('click', function (e) {
            let numbers = e.target.innerText;
            if (Num1.length > 9) {
                  Num1.disabled = true;
            } else {
                  if (Num2 === '' && sign === '') {
                        Num1 += numbers;
                        display.textContent = Num1;
                        console.log(Num1)
                  } else if (Num1 !== '' && Num2 !== '' && result) {
                        Num2 = numbers;
                        result = false;
                        display.textContent = Num2;
                  }
                  else {
                        Num2 += numbers;
                        display.textContent = Num2;
                        console.log(Num2)
                  }
            }




      });
}

for (let i = 0; i < op.length; i++) {
      op[i].addEventListener('click', function (e) {
            let operators = e.target.innerText;
            if (action.includes(operators)) {
                  sign = operators;
                  // display.textContent = sign;
            }
            if (operators === '=') {
                  switch (sign) {
                        case '+':
                              Num1 = (+Num1) + (+Num2);
                              break;
                        case '-':
                              Num1 = Num1 - Num2;
                              break;
                        case '*':
                              Num1 = Num1 * Num2;
                              break;
                        case '/':
                              if (Num2 === '0') {
                                    display.textContent = 'Ошибка';
                                    Num1 = '';
                                    Num2 = '';
                                    sign = '';
                                    return;
                              }
                              Num1 = Num1 / Num2;
                              break;
                  }
                  
                  console.log(Num1)
                  result = true;
                  display.textContent = Num1;
            }

            if (operators === '%') {
                  Num1 = (Num1 * Num2) / 100;
                  display.textContent = Num1;
                  result = true;
            } 

       
      });
}


