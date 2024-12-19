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
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    _heapifyDown(index) {
        const size = this.size();
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left < size && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
            if (right < size && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function minimumEffortPath(heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const minHeap = new MinHeap(); // Min-heap for Dijkstra's algorithm
    const effortTo = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    effortTo[0][0] = 0;

    minHeap.push([0, 0, 0]); // [effort, row, col]

    while (minHeap.size() > 0) {
        const [currentEffort, r, c] = minHeap.pop();

        // If we reach the bottom-right cell, return the effort
        if (r === rows - 1 && c === cols - 1) return currentEffort;

        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const newEffort = Math.max(
                    currentEffort,
                    Math.abs(heights[r][c] - heights[newRow][newCol])
                );

                if (newEffort < effortTo[newRow][newCol]) {
                    effortTo[newRow][newCol] = newEffort;
                    minHeap.push([newEffort, newRow, newCol]);
                }
            }
        }
    }
}
