function prim(graph) {
  const nodes = graph.vertices;
  const edges = graph.edges;

  const mst = [];
  const visited = new Set();
  const edgeQueue = new PriorityQueue(); // 우선순위 큐를 이용

  let current = nodes[0]; // 첫 노드를 선택
  visited.add(current);

  while (visited.size !== nodes.length) {
    for (let edge of edges) {
      // 방문하지 않은 노드 중 가장 작은 가중치의 간선을 찾음
      if (edge.src === current && !visited.has(edge.dest)) {
        edgeQueue.enqueue(edge, edge.weight);
      }
    }

    let nextEdge = edgeQueue.dequeue(); // 가장 작은 가중치의 간선을 선택
    while (nextEdge && visited.has(nextEdge.dest)) {
      // 이미 방문한 노드라면 스킵
      nextEdge = edgeQueue.dequeue();
    }

    if (!nextEdge) {
      // 모든 노드를 방문했다면 종료
      break;
    }

    mst.push(nextEdge);
    visited.add(nextEdge.dest);
    current = nextEdge.dest;
  }

  return mst;
}
