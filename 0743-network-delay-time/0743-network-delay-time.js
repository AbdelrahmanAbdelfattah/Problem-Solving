let Dijkstra = function (src, target, graph) {
  // Intialze distance array for stre the minimum distace between two nodes
  let distance = new Array(target + 1).fill(Infinity);

  // Intialize Priority Queue
  let pq = [];
  // push source with 0 cost
  pq.push([0, src]);
  distance[src] = 0;

  while (pq.length > 0) {
    pq.sort((a, b) => {
      return a[0] - b[0];
    });

    const [currentCost, currentNode] = pq.shift();
    console.log(currentCost, currentNode);
    if (currentCost > distance[currentNode]) continue;

    for (let [v, w] of graph[currentNode]) {
      const newCost = currentCost + w;
      if (newCost < distance[v]) {
        distance[v] = newCost;
        // parent[v] = currentNode;
        pq.push([newCost, v]);
      }
    }
  }
  return distance;
};

var networkDelayTime = function (times, n, k) {
  let graph = new Array(n + 1);
  for (let i = 0; i <= n; i++) graph[i] = [];

  // create graph
  for (let i = 0; i < times.length; i++) {
    let [u, v, w] = times[i];
    graph[u].push([v, w]);
  }

  // console.log(graph);
  let dist = Dijkstra(k, n, graph);
  console.log(dist);
  let res = 0;
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] === Infinity) return -1;
    res = Math.max(dist[i], res);
  }
  return res;
};