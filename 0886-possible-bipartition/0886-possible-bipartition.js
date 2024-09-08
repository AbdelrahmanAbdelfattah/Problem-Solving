var dfs = function (node, graph, visit, color) {
  visit[node] = 1;
  for (let i = 0; i < graph[node].length; i++) {
    if (!visit[graph[node][i]]) {
      if (color[node] == 1) color[graph[node][i]] = 2;
      else if (color[node] == 2) color[graph[node][i]] = 1;
      else {
        color[node] = 1;
        color[graph[node][i]] = 2;
      }
      if (!dfs(graph[node][i], graph, visit, color)) return false;
    } else {
      if (color[node] == color[graph[node][i]]) return false;
    }
  }
  return true;
};

var possibleBipartition = function (n, dislikes) {
  let graph = new Array(n + 1);
  for (let i = 0; i <= n; i++) graph[i] = new Array();

  for (let i = 0; i < dislikes.length; i++)
  {
    graph[dislikes[i][0]].push(dislikes[i][1]);
    graph[dislikes[i][1]].push(dislikes[i][0]);

  }

  let visit = new Array(n + 1).fill(0);
  let color = new Array(n + 1).fill(0);

  color[1] = 1;
  ans = true;

  for (let i = 1; i < +n; i++) {
    if (!visit[i]) ans &= dfs(i, graph, visit, color);
  }

  return ans;
};
