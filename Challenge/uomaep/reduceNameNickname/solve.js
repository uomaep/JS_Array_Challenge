// write your codes
function solution(inputArray) {
  const answer = inputArray.reduce((acc, { name, nickname }) => {
    acc[nickname] = name;
    return acc;
  }, {});
  return answer;
}

exports.solution = solution;
