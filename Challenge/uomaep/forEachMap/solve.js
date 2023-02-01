// write your codes
function solution(inputArray) {
  const answer = [];
  inputArray.forEach((el) => answer.push(el + "%"));
  return answer;
}

exports.solution = solution;
