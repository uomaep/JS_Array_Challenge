// 기본 점수
const baseScore = {
  jump: 10,
  spin: 20,
  step: 15,
};

const baseAssignment = {
  jump: 3,
  spin: 3,
  step: 1,
};

// write your codes

function solution(inputArray) {
  const answer = [];
  inputArray.map(({ name, goe, pcs, penalty }) => {
    let { jump, spin, step } = goe;
    if (
      jump.length >= baseAssignment.jump ||
      spin.lenght >= baseAssignment.spin ||
      step.lenght >= baseAssignment.step
    ) {
      if (jump.length >= 4) {
        jump.sort((a, b) => b - a);
        jump = jump.slice(0, 3);
      }
      if (spin.lenght >= 4) {
        spin.sort((a, b) => b - a);
        spin = spin.slice(0, 3);
      }

      const jumpScore =
        jump.reduce((score, sum) => sum + score, 0) * baseScore.jump;
      const spinScore =
        spin.reduce((score, sum) => sum + score, 0) * baseScore.spin;
      const stepScore =
        step.reduce((score, sum) => sum + score, 0) * baseScore.step;

      answer.push({
        name,
        score: jumpScore + spinScore + stepScore + pcs - penalty,
      });
    }
  });
  return answer;
}

exports.solution = solution;
