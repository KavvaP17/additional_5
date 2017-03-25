module.exports = function check(str, bracketsConfig) {
  let stack=[];
  let openBrackets=[];
  let closeBrackets=[];
  bracketsConfig.forEach((value)=>{
    openBrackets.push(value[0]);
    closeBrackets.push(value[1]);
  });
  let res=str.split('').every(function(value){
    let indexOpen=openBrackets.indexOf(value);
    let indexClose=closeBrackets.indexOf(value);
    if (indexOpen!==-1){
      if (indexOpen!==indexClose){
        stack.push(value);
      }
      else{
        if (stack.length>0){
          if (stack[stack.length-1]===value){
            stack.pop();
          }
          else{
            stack.push(value);
          }
        }
        else{
          stack.push(value);
        }
      }
    }
    else if (indexClose!==-1){
      if (openBrackets.indexOf(stack.pop())!==closeBrackets.indexOf(value)){
        return false;
      }
    }
    else{
      return false;
    }
    return true;
  });
  if (stack.length>0 || !res){
    return false;
  }
  return true;
}
