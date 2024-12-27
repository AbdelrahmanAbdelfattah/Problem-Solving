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

var minimumWeight = function (n, edges, src1, src2, dest) {
  let graph = new Array(n);
  let Inverse_graph = new Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Array();
    Inverse_graph[i] = new Array();
  }
  // create graph
  for (let i = 0; i < edges.length; i++) {
    let [from, to, weight] = edges[i];
    graph[from].push([to, weight]);
    Inverse_graph[to].push([from, weight]);
  }

  let dist1 = Dijkstra(n, src1, dest, graph);
  let dist2 = Dijkstra(n, src2, dest, graph);
  let distMid = Dijkstra(n, dest, 0, Inverse_graph);

  let minimum = Infinity;
  for (let i = 0; i < dist1.length; i++) {
    if (
      dist1[i] !== Infinity &&
      dist2[i] !== Infinity &&
      distMid[i] !== Infinity
    ) {
      minimum = Math.min(minimum, dist1[i] + dist2[i] + distMid[i]);
    }
  }

  if (minimum !== Infinity) return minimum;
  return -1;
};
