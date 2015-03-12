var result = 0;
var op1 = null;
var op2 = null;
var operation = null;
var sequence = "";

var round = function(value, decimals){
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

var addition = function(number){
  result = parseFloat(result) + parseFloat(number);
  return result;
};

var subtraction = function(number){
  result = parseFloat(result) - parseFloat(number);
  return result;
};

var multiplication = function(number){
  result = parseFloat(result) * parseFloat(number);
  return result;
};

var division = function(number){
  result = parseFloat(result) / parseFloat(number);
  return result;
};

var modulus = function(number){
  result = parseFloat(result) % parseFloat(number);
  return result;
};

var clearAll = function () {
  result = 0;
  op1 = null;
  op2 = null;
  operation = null;
  sequence = '';
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
  return round(result, 10);
};

var setOp1 = function(){
  if(op1 === null){
    op1 = 0;
    sequence += '0'
  }
};

var displayResult = function(res){
  sequence = res;
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
      operation = text;
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
    case "0":
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
      if(operation === '='){
        clearAll();
      }
      if(operation === null){
        if(op1 === null){
          op1 = text;
        }
        else{
          op1 = op1 + text;
        }
      }
      else{
        if(op2 === null){
          op2 = text;
        }
        else{
          op2 = op2 + text;
        }
      }
      sequence += text;
      $('.form-control').val(sequence);
      break;
  }
});
