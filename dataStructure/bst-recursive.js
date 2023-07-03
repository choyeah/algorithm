class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class RecursiveBinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }
    this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
        return;
      }
      return this.insertNode(node.left, value);
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new TreeNode(value);
        return;
      }
      return this.insertNode(node.right, value);
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  findMaxValue() {
    if (this.root === null) {
      return undefined;
    }
    return this.findMaxValueR(this.root);
  }

  findMaxValueR(node) {
    if (node.right !== null) {
      return this.findMaxValueR(node.right);
    }
    return node.value;
  }

  findMinValue() {
    if (this.root === null) {
      return undefined;
    }
    return this.findMinValueR(this.root);
  }

  findMinValueR(node) {
    if (node.left !== null) {
      return this.findMinValueR(node.left);
    }
    return node.value;
  }

  findMinNode(node) {
    if (node !== null && node.left !== null) {
      return this.findMinNode(node.left);
    }
    return node;
  }

  remove(value) {
    if (this.root === null) {
      return false;
    }
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    // 1 to left
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      // 2 to right
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // 3 remove
      // 3-1 leaf
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        // 3-2 left null
        node = node.right;
        return node;
      } else if (node.right === null) {
        // 3-3 right null
        node = node.left;
        return node;
      }
      // 3-4 has two children node
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  // 중위 순회를 사용하여 트리의 노드 값을 문자열로 변환
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }

  // 트리의 현재 모양을 출력
  print() {
    let result = "";
    this.inOrderTraversal(this.root, (value) => {
      result += value + " ";
    });
    console.log("트리: ", result.trim());
  }
}

// Test cases
const bst = new RecursiveBinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(80);
bst.print(); // 20이 삭제된 트리 출력

console.log(bst.search(45)); // 출력: true
console.log(bst.search(100)); // 출력: false

console.log(bst.findMinValue()); // 출력: 20
console.log(bst.findMaxValue()); // 출력: 80

bst.remove(20);
console.log(bst.findMinValue()); // 출력: 30
bst.remove(80);
console.log(bst.findMaxValue()); // 출력: 70

// 삭제 테스트
const bst2 = new RecursiveBinarySearchTree();
// 트리 생성
bst2.insert(50);
bst2.insert(30);
bst2.insert(20);
bst2.insert(40);
bst2.insert(70);
bst2.insert(60);
bst2.insert(80);

// 테스트 케이스 1: 리프 노드 삭제 (4-1)
bst2.remove(20);
console.log("케이스 1: 20 삭제 후 트리");
bst2.print(); // 20이 삭제된 트리 출력

// 테스트 케이스 2: 오른쪽 자식 노드만 가지고 있는 노드 삭제 (4-2)
bst2.remove(30);
console.log("케이스 2: 30 삭제 후 트리");
bst2.print(); // 30이 삭제된 트리 출력

// 테스트 케이스 3: 왼쪽 자식 노드만 가지고 있는 노드 삭제 (4-3)
bst2.remove(70);
console.log("케이스 3: 70 삭제 후 트리");
bst2.print(); // 70이 삭제된 트리 출력

// 테스트 케이스 4: 두 개의 자식 노드를 모두 가지고 있는 노드 삭제 (4-4)
bst2.remove(50);
console.log("케이스 4: 50 삭제 후 트리");
bst2.print(); // 50이 삭제된 트리 출력
