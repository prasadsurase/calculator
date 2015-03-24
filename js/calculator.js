//var result = 0;
//var op1 = null;
//var op2 = null;
//var operation = null;
//var sequence = "";

function Calculator(){
  this.result = 0; //the result of calculation
  this.op1 = null; //operand 1
  this.op2 = null; //operand 2k
  this.operation = null; //the operation to be performed
  this.sequence = ''; //the sequence entered
}

Calculator.prototype.round = function(value, decimals){
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

Calculator.prototype.addition = function(){
  this.result = parseFloat(this.result) + parseFloat(this.op2);
  return this.result;
};

Calculator.prototype.subtraction = function(){
  this.result = parseFloat(this.result) - parseFloat(this.op2);
  return this.result;
};

Calculator.prototype.multiplication = function(){
  this.result = parseFloat(this.result) * parseFloat(this.op2);
  return this.result;
};

Calculator.prototype.division = function(){
  this.result = parseFloat(this.result) / parseFloat(this.op2);
  return this.result;
};

Calculator.prototype.percentage = function(){
  this.result = parseFloat(this.result) * parseFloat(this.op2) / 100.0;
  return this.result;
};

Calculator.prototype.clearAll = function () {
  this.result = 0;
  this.op1 = null;
  this.op2 = null;
  this.operation = null;
  this.sequence = '';
  $('.form-control').val('');
};

Calculator.prototype.computeResult = function(){
  this.result = this.op1;
  switch(this.operation){
    case "+":
      this.addition();
    break;
    case "-":
      this.subtraction();
    break;
    case "*":
      this.multiplication();
    break;
    case "/":
      this.division();
    break;
    case "%*":
      this.percentage();
    break;
  }
  this.op1 = this.result;
  this.op2 = null;
  this.operation = null
  return this.round(this.result, 10);
};

Calculator.prototype.setOp1 = function(){
  if(this.op1 === null){
    this.op1 = 0;
    this.sequence += '0'
  }
};

Calculator.prototype.displayResult = function(res){
  this.sequence = res;
  $('.form-control').val(this.sequence);
};

var cal = new Calculator()

$(".btn").on("click", function(){
  var text = $(this).text();
  switch(text){
    case "AC":
      cal.clearAll();
      break;
    case "=":
      var res = cal.computeResult();
      cal.displayResult(res);
      cal.operation = text;
      break;
    case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        cal.setOp1();
        if(cal.operation === null){
          cal.operation = text;
        }
        else{
          if(cal.op2 != null){
            cal.computeResult();
            cal.operation = text;
          }
        }
        cal.operation = text;
        cal.sequence += ' ' + text + ' ';
        $('.form-control').val(cal.sequence);
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
        if(cal.operation === '='){
          cal.clearAll();
        }
        if(cal.operation === '%'){
          cal.operation = cal.operation + '*'
        }
        if(cal.operation === null){
          if(cal.op1 === null){
            cal.op1 = text;
          }
          else{
            cal.op1 = cal.op1 + text;
          }
        }
        else{
          if(cal.op2 === null){
            cal.op2 = text;
          }
          else{
            cal.op2 = cal.op2 + text;
          }
        }
        cal.sequence += text;
        $('.form-control').val(cal.sequence);
        break;
  }
});
