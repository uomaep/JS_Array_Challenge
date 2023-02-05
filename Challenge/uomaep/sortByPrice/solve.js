// write your codes
function solution(inputArray) {
  return inputArray.sort((el1, el2) => el1.price - el2.price);
}

exports.solution = solution;
