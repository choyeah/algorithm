function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const vertex = stack.pop();
    if (!visited.has(vertex)) {
      visited.add(vertex);
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
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

const start = "A";
let result = dfs(graph, start);
console.log(result);
