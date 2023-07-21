function dfs(graph, start, visited = new Set()) {
  visited.add(start);

  // 현재 노드에서 가능한 모든 이웃 노드에 대해 재귀적으로 탐색
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }

  // 방문된 노드들을 반환
  return visited;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

const start = "A";

// dfs 함수의 리턴값을 받아서 출력
const visited = dfs(graph, start);
console.log(Array.from(visited));
