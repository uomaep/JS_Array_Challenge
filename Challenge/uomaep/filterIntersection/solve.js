function solution(inputArray1, inputArray2) {
  const answer = inputArray1.filter((el) => inputArray2.includes(el));
  return answer;
}

exports.solution = solution;
