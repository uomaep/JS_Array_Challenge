// write your codes
function solution(inputArray) {
  const answer = [];

  inputArray.filter((el) => {
    if (el.age >= 30 && el.age < 50) answer.push(el);
  });

  return answer;
}

exports.solution = solution;
