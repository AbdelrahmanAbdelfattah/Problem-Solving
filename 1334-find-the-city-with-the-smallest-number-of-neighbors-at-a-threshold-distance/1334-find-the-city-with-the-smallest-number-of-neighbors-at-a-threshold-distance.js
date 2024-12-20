class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);
    return top;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index][0] >= this.heap[parent][0]) break;
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  _heapifyDown(index) {
    const size = this.size();
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < size && this.heap[left][0] < this.heap[smallest][0])
        smallest = left;
      if (right < size && this.heap[right][0] < this.heap[smallest][0])
        smallest = right;
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

let Dijkstra = function (n, src, target, graph) {
  // Intialze distance array for stre the minimum distace between two nodes
  let distance = new Array(n).fill(Infinity);

  // Intialize Priority Queue
  let pq = new MinHeap();
  // push source with 0 cost
  pq.push([0, src]);
  distance[src] = 0;

  while (pq.size() > 0) {
    // pq.sort((a, b) => {
    //   return a[0] - b[0];
    // });

    const [currentCost, currentNode] = pq.pop();
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

var findTheCity = function (n, edges, distanceThreshold) {
  let graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Array();
  }
  for (let i = 0; i < edges.length; i++) {
    let [from, to, weight] = edges[i];
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  }

  let dists = [];

  for (let i = 0; i < n; i++) {
    let dist = Dijkstra(n, i, n, graph);
    let n_cities = 0,
      mx_dis = 0;
    for (let j = 0; j < dist.length; j++) {
      if (dist[j] <= distanceThreshold && j !== i) {
        n_cities++;
        mx_dis += dist[j];
      }
    }
    dists.push([i, n_cities, mx_dis]);
  }

  console.log(dists);
  let city = 0,
    mx_dis = -1,
    num_cities = Infinity;
  for (let i = 0; i < dists.length; i++) {
    let [c, n, mx] = dists[i];
    if (n < num_cities || (n === num_cities && c > city)) {
      num_cities = n;
      city = c;
    }
  }
 return city
};
