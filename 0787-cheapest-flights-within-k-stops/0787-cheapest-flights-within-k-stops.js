class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return top;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][0] <= this.heap[index][0]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

let Dijkstraa = function (n, src, target, graph, maxStops) {
  let pq = new MinHeap();
  pq.push([0, src, 0]);
  let visited = new Map();

  while (pq.size() > 0) {
    const [currentCost, currentNode, stops] = pq.pop();
    if (currentNode === target) return currentCost;
    if (stops > maxStops) continue;
    if (visited.has(`${currentNode}-${stops}`)) continue;
    visited.set(`${currentNode}-${stops}`, currentCost);

    for (let [neighbor, weight] of graph[currentNode]) {
      const newCost = currentCost + weight;
      pq.push([newCost, neighbor, stops + 1]);
    }
  }

  return -1;
};

var findCheapestPrice = function (n, flights, src, dst, k) {
  let graph = new Array(n).fill(0).map(() => []);
  for (let [u, v, w] of flights) {
    graph[u].push([v, w]);
  }
  return Dijkstraa(n, src, dst, graph, k);
};
