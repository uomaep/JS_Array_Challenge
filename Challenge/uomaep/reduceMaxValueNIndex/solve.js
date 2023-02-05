// write your codes
function solution(inputArray) {
  const answer = inputArray.reduce(
    (acc, cur, index) => {
      if (acc?.maxValue < cur) {
        return {
          maxValue: cur,
          idx: index,
        };
      }
      return acc;
    },
    { maxValue: -Infinity, idx: -1 }
  );
  return answer;
}

exports.solution = solution;
