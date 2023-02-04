// write your codes
function solution(inputArray) {
  const answer = inputArray.filter((el) => el % 2 !== 0);
  return answer;
}

exports.solution = solution;
