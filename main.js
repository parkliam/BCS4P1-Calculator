let result;

let inputNumber;
let operator;

const resultEl = document.querySelector(".result");

function inputResult(_result) {
  result = _result ? _result + "" : "0";

  if (result.length > 16) {
    resultEl.innerHTML = `${result.substring(0, 16)}...`;
  } else {
    resultEl.innerText = result;
  }
}

function clickNumber(_number) {
  if (result === "0") result = "";

  let numberResult = result + _number;

  inputResult(numberResult);
}

function clickDel() {
  inputResult(result.substring(0, result.length - 1));
}

function clickOperator(_operator) {
  if (result === "0") {
    alert("Please input value.");
    return;
  }

  operator = _operator;
  inputNumber = result;
  inputResult();
}

function clickEnter() {
  if (result === "0" || !inputNumber || !operator) {
    alert("Please input value.");
    return;
  }

  switch (operator) {
    case "+":
      result = +inputNumber + +result;
      inputResult(result);
      break;
    case "-":
      result = +inputNumber - +result;
      inputResult(result);
      break;
    case "*":
      result = +inputNumber * +result;
      inputResult(result);
      break;
    case "/":
      result = parseInt(+inputNumber / +result, 10);
      inputResult(result);
      break;
  }
}

inputResult();
