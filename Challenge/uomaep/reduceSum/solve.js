// write your codes
function solution(inputArray) {
  return inputArray.reduce((el, sum) => sum + el, 0);
}

exports.solution = solution;
