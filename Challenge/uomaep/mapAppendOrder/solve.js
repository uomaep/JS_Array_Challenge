// write your codes
function solution(inputArray) {
  const answer = [];
  inputArray.forEach((name, i) => {
    answer.push({
      name,
      order: i + 1,
    });
  });
  return answer;
}

exports.solution = solution;
