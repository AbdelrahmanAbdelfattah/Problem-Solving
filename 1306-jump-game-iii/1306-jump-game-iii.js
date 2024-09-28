var BFS = function (arr, start) {
  let q = [];
  q.push(start);
  let visit = new Array(arr.length).fill(0);

  while (q.length > 0) {
    let index = q.shift();
    let node = arr[index];
    visit[index] = 1;
    let right = index + node;
    let left = index - node;

    console.log(node);
    if (node == 0) return true;
    if (left >= 0 && !visit[left]) q.push(left);
    if (right < arr.length && !visit[right]) q.push(right);
  }
  return false;
};

var canReach = function (arr, start) {
  return BFS(arr, start);
};