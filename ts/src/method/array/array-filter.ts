function positiveNumber(value) {
  return value > 0;
}
var result = [-1,-3,-5,1,2,-10,6,100].filter(positiveNumber);
console.log(result);