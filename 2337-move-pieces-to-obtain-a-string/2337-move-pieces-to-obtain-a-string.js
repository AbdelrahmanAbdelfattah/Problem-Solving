var canChange = function (start, target) {
  let start_q = [];
  let target_q = [];
  let length_start = 0;
  let length_target = 0;
  let p = 0;
  for (let i = 0; i < start.length; i++) {
    if (start[i] != "_") start_q.push([start[i], i]), length_start++;
    if (target[i] != "_") target_q.push([target[i], i]), length_target++;
  }

  if (length_start !== length_target) return false;
  console.log("pass");

  while (p< length_start) {
    let char1 = start_q[p];
    let char2 = target_q[p];
    if (char1[0] != char2[0]) return false;
    if (char1[0] === "L") {
      if (char1[1] < char2[1]) return false;
    } else {
      if (char1[1] > char2[1]) return false;
    }
    p++;
  }
  return true;
};
