// 우선순위 큐를 최소 힙으로 구현한 클래스입니다.
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(node, priority) {
    this.heap.push([node, priority]);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    const root = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return root;
  }

  // peek() {
  //   return this.heap[0][1];
  // }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.heap[parentIndex];
    const child = this.heap[index];
    if (child[1] < parent[1]) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallestChildIndex = leftChildIndex;
    if (
      rightChildIndex < this.heap.length &&
      this.heap[leftChildIndex][1] > this.heap[rightChildIndex][1]
    ) {
      smallestChildIndex = rightChildIndex;
    }
    if (
      smallestChildIndex < this.heap.length &&
      this.heap[smallestChildIndex][1] < this.heap[index][1]
    ) {
      this.swap(index, smallestChildIndex);
      this.bubbleDown(smallestChildIndex);
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

function dijkstra(graph, start) {
  let distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  let pQueue = new PriorityQueue();
  pQueue.enqueue(start, 0);

  let totalCnt = 0;
  while (!pQueue.isEmpty()) {
    const [currentNode, currentDistance] = pQueue.dequeue();
    totalCnt++;
    if (distances[currentNode] < currentDistance) {
      continue;
    }
    for (const neighbor in graph[currentNode]) {
      totalCnt++;
      const newDistance = distances[currentNode] + graph[currentNode][neighbor];
      if (distances[neighbor] > newDistance) {
        distances[neighbor] = newDistance;
        pQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  console.log("totalCnt:", totalCnt);
  return distances;
}

// Unit tests
let graph = {
  A: { B: 2, C: 5, D: 4 },
  B: { A: 2, C: 2, D: 1, E: 6 },
  C: { A: 5, B: 2, F: 3 },
  D: { A: 4, B: 1, E: 4, G: 2 },
  E: { B: 6, D: 4, F: 1, G: 3 },
  F: { C: 3, E: 1, G: 2 },
  G: { D: 2, E: 3, F: 2 },
};

const result = dijkstra(graph, "A");
console.log(result);
// { A: 0, B: 2, C: 4, D: 3, E: 7, F: 7, G: 5 }
