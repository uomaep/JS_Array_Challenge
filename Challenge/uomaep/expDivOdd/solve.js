function solution(inputArray) {
  let answer = inputArray.map((el) => el ** 2);
  answer = answer.filter((el) => (el % 3) % 2 !== 0);
  return answer.reduce((el, sum) => sum + el, 0);
}

exports.solution = solution;
