/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var dfs = function (node, visited, isConnected) {
  visited[node] = 1;
  for (let i = 0; i < isConnected.length; i++) {
    if (isConnected[node][i] && !visited[i]) {
      dfs(i, visited, isConnected);
    }
  }
};

var findCircleNum = function (isConnected) {
  var visited = new Array(isConnected.length).fill(0);

  // for (let i = 0; i < isConnected.length; i++) {
  //   visited[i] = new Array(isConnected.length).fill(0);
  // }

  var count = 0;
  for (let node = 0; node < isConnected.length; node++) {
    if (!visited[node]) {
      dfs(node, visited, isConnected);
      count++;
    }
  }

  console.log(visited);
  return count;
};