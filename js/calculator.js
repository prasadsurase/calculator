var result = 0;

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
