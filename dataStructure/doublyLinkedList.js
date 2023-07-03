// 노드 클래스 정의
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// 링크드 리스트 클래스 정의
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  remove(data) {
    if (this.isEmpty()) {
      throw new Error("Empty");
    }

    if (this.head.data === data) {
      this.head = this.head.next;

      if (this.head !== null) {
        this.head.prev = null;
      } else {
        // 요소가 없을 경우
        this.tail = null;
      }
      this.size--;
      return;
    }

    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        if (this.tail.data === data) {
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        this.size--;
        return;
      }

      currentNode = currentNode.next;
    }

    throw new Error("Data not found in the list");
  }

  find(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    throw new Error("Data not found in the list");
  }

  reverseFind(data) {
    let currentNode = this.tail;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.prev;
    }
    throw new Error("Data not found in the list");
  }

  print() {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += currentNode.data + (currentNode.next ? " <-> " : "");
      currentNode = currentNode.next;
    }
    return result;
  }

  reversePrint() {
    let currentNode = this.tail;
    let result = "";
    while (currentNode !== null) {
      result += currentNode.data + (currentNode.prev ? " <-> " : "");
      currentNode = currentNode.prev;
    }
    return result;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// 링크드 리스트 인스턴스 생성
function assert(condition, message) {
  if (condition) {
    console.log("✅ " + message);
  } else {
    console.log("❌ " + message);
  }
}

const linkedList = new DoublyLinkedList();
console.log("Add=======================");
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);

const result1 = linkedList.print();
assert(result1 === "10 <-> 20 <-> 30 <-> 40", "Adding elements to the list");

// 중복 데이터 추가 테스트
linkedList.add(30);
const afterAddDuplicate = linkedList.print();
assert(
  afterAddDuplicate === "10 <-> 20 <-> 30 <-> 40 <-> 30",
  "Adding duplicate data"
);

// 리스트의 첫 번째 노드 찾기 테스트
try {
  const firstNode = linkedList.find(30);
  assert(firstNode.data === 30, "Finding the first node in the list");
} catch (error) {
  console.log("❌ " + error.message);
}

try {
  const firstNode = linkedList.reverseFind(30);
  assert(firstNode.data === 30, "Reverse finding the first node in the list");
} catch (error) {
  console.log("❌ " + error.message);
}

// 리스트의 마지막 노드 찾기 테스트
try {
  linkedList.find(50);
  console.log("❌ Finding non-existing node");
} catch (error) {
  assert(
    error.message === "Data not found in the list",
    "Finding non-existing node"
  );
}

// 리스트에 단일 노드가 있는 경우 데이터 삭제 테스트
const singleNodeList = new DoublyLinkedList();
singleNodeList.add(100);
console.log(singleNodeList);
try {
  singleNodeList.remove(100);
  console.log(singleNodeList);
  const afterRemoveSingleNode = singleNodeList.print();
  assert(afterRemoveSingleNode === "", "Removing the single node in the list");
} catch (error) {
  console.log("❌ " + error.message);
}

// 리스트 크기 확인 테스트
const sizeTestList = new DoublyLinkedList();
sizeTestList.add(1);
sizeTestList.add(2);
sizeTestList.add(3);
assert(sizeTestList.size === 3, "Checking the size of the list");

try {
  linkedList.remove(20);

  console.log(linkedList);
  const afterRemove20 = linkedList.print();
  console.log(afterRemove20);
  assert(afterRemove20 === "10 <-> 30 <-> 40 <-> 30", "Removing element 20");
} catch (error) {
  console.log("❌ " + error.message);
}

const reversed = linkedList.reversePrint();
console.log(reversed);

try {
  linkedList.remove(10);
  const afterRemove10 = linkedList.print();
  assert(afterRemove10 === "30 <-> 40 <-> 30", "Removing element 10");
} catch (error) {
  console.log("❌ " + error.message);
}

try {
  linkedList.remove(40);
  const afterRemove40 = linkedList.print();
  assert(afterRemove40 === "30 <-> 30", "Removing tail element");
} catch (error) {
  console.log("❌ " + error.message);
}

const isNotEmpty = linkedList.isEmpty();
assert(!isNotEmpty, "Checking if list is not empty");

try {
  linkedList.remove(30);
  const afterRemove30 = linkedList.print();
  assert(afterRemove30 === "30", "Removing head element");
} catch (error) {
  console.log("❌ " + error.message);
}

const result4 = linkedList.print();
assert(result4 === "30", "Printing list Checking if list is not empty");

try {
  linkedList.remove(30);
  const afterRemove30 = linkedList.print();
  assert(afterRemove30 === "", "Removing last element");
} catch (error) {
  console.log("❌ " + error.message);
}

const result5 = linkedList.print();
assert(result5 === "", "Printing list after removing last element");

const isEmpty2 = linkedList.isEmpty();
assert(isEmpty2, "Checking if list is empty");
