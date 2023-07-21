function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    let vertex = queue.shift();
    if (!visited.has(vertex)) {
      visited.add(vertex);
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return visited;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};
//       A
//     /   \
//    B     C
//   /     /|\
//   D    G H I
//  / \       /
// E   F     J

// 시작 정점
const start = "A";

// BFS 탐색 시작
let r = bfs(graph, start);
console.log(r);
