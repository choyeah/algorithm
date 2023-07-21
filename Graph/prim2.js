class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  getParentIndex(i) {
    return Math.floor(i / 2);
  }

  getLeftChildIndex(i) {
    const index = i * 2;
    return index < this.heap.length ? index : null;
  }

  getRightChildIndex(i) {
    const index = i * 2 + 1;
    return index < this.heap.length ? index : null;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 1 &&
      this.heap[currentIndex][1] < this.heap[parentIndex][1]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    const smallest = this.heap[1];
    const endNode = this.heap.pop();

    if (this.heap.length > 1) {
      this.heap[1] = endNode;
      this.bubbleDown();
    }

    return smallest;
  }

  bubbleDown() {
    let currentIndex = 1;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      let smallestIndex = rightChildIndex;

      if (
        !smallestIndex ||
        (this.heap[leftChildIndex] &&
          this.heap[rightChildIndex] &&
          this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1])
      ) {
        smallestIndex = leftChildIndex;
      }

      if (this.heap[currentIndex][1] > this.heap[smallestIndex][1]) {
        this.swap(currentIndex, smallestIndex);
        currentIndex = smallestIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
        rightChildIndex = this.getRightChildIndex(currentIndex);
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}

function primMST(graph, start) {
  // 리턴값
  let mst = [],
    totalWeight = 0;

  // 우선순위 큐
  let pq = new PriorityQueue();
  pq.push([start, 0]);

  // 초기화 필요 변수
  let visited = {},
    parent = {},
    minEdgeWeight = {};

  // 초기화
  for (let node of Object.keys(graph)) {
    minEdgeWeight[node] = Infinity; // 1. 모든 노드의 최소 가중치를 무한대로,
    parent[node] = null; // 2. 부모 노드를 null로,
    visited[node] = false; // 3. 방문 여부를 false로 설정합니다.
  }
  minEdgeWeight[start] = 0; // 'start' 노드의 최소 가중치를 0으로 설정합니다.

  // 우선 순위 큐가 빌 때까지 반복합니다.
  while (!pq.isEmpty()) {
    let [currentNode, currentWeight] = pq.pop(); // 우선 순위 큐에서 가장 작은 노드를 꺼냅니다.

    if (visited[currentNode]) continue; // 현재 노드가 이미 방문되었다면 컨티뉴..

    visited[currentNode] = true; // 방문 표시를 합니다.

    // 부모 노드가 null이 아니라면 최소 신장 트리에 추가하고 총 가중치를 더합니다.
    // 프림(Prim)의 알고리즘에서는 시작 노드의 부모를 null로 설정하고, 나머지 노드들의 부모를 찾아나가면서 트리를 구성합니다.
    // 이렇게 하면, 시작 노드는 제외하고 나머지 노드들만이 정확히 한 번씩 최소 신장 트리에 추가되며, 이를 통해 올바른 최소 신장 트리를 구성할 수 있습니다.
    if (parent[currentNode] !== null) {
      mst.push([parent[currentNode], currentNode, currentWeight]);
      totalWeight += currentWeight;
    }

    // 현재 노드와 연결된 모든 노드를 확인합니다.
    for (let [adjacent, weight] of Object.entries(graph[currentNode])) {
      // 연결된 노드가 아직 방문되지 않았고, 연결된 노드의 가중치가 현재 최소 가중치보다 작다면,
      // 아직 MST에 추가되지 않은 노드를 향하는 간선 중에서 가장 가중치가 작은 간선을 찾음
      if (!visited[adjacent] && weight < minEdgeWeight[adjacent]) {
        parent[adjacent] = currentNode; // 부모 노드를 현재 노드로 설정하고,
        minEdgeWeight[adjacent] = weight; // 최소 가중치를 업데이트하고,
        pq.push([adjacent, minEdgeWeight[adjacent]]); //연결된 노드를 우선 순위 큐에 추가합니다.
      }
    }
  }

  // 반복문이 종료되면, 최소 신장 트리와 그의 총 가중치를 반환합니다.
  return { mst, totalWeight };
}

// const graph = {
//   A: { B: 7, D: 5 },
//   B: { A: 7, D: 8, E: 7, C: 8 },
//   C: { B: 8, E: 5 },
//   D: { A: 5, B: 8, E: 7, F: 6 },
//   E: { B: 7, D: 7, C: 5, F: 8, G: 9 },
//   F: { D: 6, E: 8, G: 11 },
//   G: { E: 9, F: 11 },
// };

const graph = {
  A: { B: 3, C: 1, D: 5 },
  B: { A: 3, C: 6, E: 9, F: 5 },
  C: { A: 1, B: 6, D: 2, F: 4 },
  D: { A: 5, C: 2, F: 6, G: 3 },
  E: { B: 9, F: 3 },
  F: { B: 5, C: 4, D: 6, E: 3, G: 7, H: 5 },
  G: { D: 3, F: 7, H: 9 },
  H: { F: 5, G: 9 },
};

let { mst, totalWeight } = primMST(graph, "A");
console.log("MST:", mst);
console.log("Total Weight:", totalWeight);
