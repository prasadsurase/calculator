var result = 0;
var op1 = null;
var op2 = null;
var operation = null;
var sequence = "";

var reset = function(){
  result = 0;
  return;
};

var addition = function(number){
  result = result + number;
  return result;
};

var subtraction = function(number){
  result = result - number;
  return result;
};

var multiplication = function(number){
  result = result * number;
  return result;
};

var division = function(number){
  result = result / number;
  return result;
};

var modulus = function(number){
  result = result % number;
  return result;
};

var clearAll = function () {
  result = 0;
  op1 = null;
  op2 = null;
  operation = null;
  sequence = '';
  $('#result').text('');
  $('.form-control').val('');
};

var computeResult = function(){
  result = op1;
  switch(operation){
    case "+":
      addition(op2);
      break;
    case "-":
      subtraction(op2);
      break;
    case "*":
      multiplication(op2);
      break;
    case "/":
      division(op2);
      break;
    case "%":
      modulus(op2);
      break;
  }
  op1 = result;
  op2 = null;
  operation = null
  return result;
};

var setOp1 = function(){
  if(op1 === null){
    op1 = 0;
    sequence += '0'
  }
};

var displayResult = function(res){
  $('#result').text(res);
  sequence = result;
  $('.form-control').val(sequence);
};

$(".btn").on("click", function(){
  var text = $(this).text();
  switch(text){
    case "AC":
      clearAll();
      break;
    case "=":
      var res = computeResult();
      displayResult(res);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      setOp1();
      if(operation === null){
        operation = text;
      }
      else{
        if(op2 != null){
          computeResult();
          operation = text;
        }
      }
      operation = text;
      sequence += ' ' + text + ' ';
      $('.form-control').val(sequence);
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      if(operation === null){
        if(op1 === null){
          op1 = parseFloat(text);
        }
        else{
          op1 = parseFloat(op1.toString() + text);
        }
      }
      else{
        if(op2 === null){
          op2 = parseFloat(text);
        }
        else{
          op2 = parseFloat(op2.toString() + text);
        }
      }
      sequence += text;
      $('.form-control').val(sequence);
      break;
  }
});
