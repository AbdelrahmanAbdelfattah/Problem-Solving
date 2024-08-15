/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var dfs = function (node, visited, graph, stack) {
  if (stack[node]) return true;
  if (visited[node]) return false;

  visited[node] = true;
  stack [node ] = true ;
  for (let i = 0; i < graph[node].length; i++) {
    if (dfs(graph[node][i], visited, graph, stack)) return true;
  }

  stack[node] = false;
  return false;
};

var eventualSafeNodes = function (graph) {
  let stack = new Array(graph.length).fill(0);
  let visited = new Array(graph.length).fill(0);

  for (let i = 0; i < graph.length; i++) {
    if (!stack[i]) dfs(i, visited, graph, stack);
  }

  let safe_nodes = [];

  for (let i = 0; i < stack.length; i++) {
    if (!stack[i]) safe_nodes.push(i);
  }

  return safe_nodes;
};
