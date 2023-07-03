class UnionFind {}

function kruskal(graph) {}

const graph = {
  vertices: ["A", "B", "C", "D", "E", "F", "G"],
  edges: [
    { src: "A", dest: "B", weight: 7 },
    { src: "A", dest: "D", weight: 5 },
    { src: "B", dest: "A", weight: 7 },
    { src: "B", dest: "C", weight: 8 },
    { src: "B", dest: "D", weight: 9 },
    { src: "B", dest: "E", weight: 7 },
    { src: "C", dest: "B", weight: 8 },
    { src: "C", dest: "E", weight: 5 },
    { src: "D", dest: "A", weight: 5 },
    { src: "D", dest: "B", weight: 9 },
    { src: "D", dest: "E", weight: 7 },
    { src: "D", dest: "F", weight: 6 },
    { src: "E", dest: "B", weight: 7 },
    { src: "E", dest: "C", weight: 5 },
    { src: "E", dest: "D", weight: 7 },
    { src: "E", dest: "F", weight: 8 },
    { src: "E", dest: "G", weight: 9 },
    { src: "F", dest: "D", weight: 6 },
    { src: "F", dest: "E", weight: 8 },
    { src: "F", dest: "G", weight: 11 },
    { src: "G", dest: "E", weight: 9 },
    { src: "G", dest: "F", weight: 11 },
  ],
};

console.log(kruskal(graph)); // 최소 신장 트리의 간선 목록을 출력합니다
// result
// [
//   { src: "A", dest: "D", weight: 5 },
//   { src: "C", dest: "E", weight: 5 },
//   { src: "D", dest: "F", weight: 6 },
//   { src: "A", dest: "B", weight: 7 },
//   { src: "B", dest: "E", weight: 7 },
//   { src: "E", dest: "G", weight: 9 },
// ]
