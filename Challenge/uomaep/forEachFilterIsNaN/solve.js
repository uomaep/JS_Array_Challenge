// write your codes
function solution(inputArray) {
  const answer = inputArray.filter((el) => typeof el === "number");
  return answer;
}

exports.solution = solution;
