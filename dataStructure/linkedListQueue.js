class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  remove(data) {
    if (this.isEmpty()) {
      throw Error("Empty");
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let currentNode = this.head.next;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        if (this.tail.data === data) {
          this.tail = previousNode;
        }

        previousNode.next = currentNode.next;
        currentNode = null;
        this.size--;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    throw new Error("No data");
  }

  removeFirstNode() {
    if (this.isEmpty()) {
      throw Error("Empty");
    }
    const removedData = this.head;
    this.head = this.head.next;
    if (this.isEmpty()) {
      this.tail = null;
    }
    this.size--;
    return removedData;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

class Queue {
  linkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(data) {
    return this.linkedList.append(data);
  }

  dequeue() {
    return this.linkedList.removeFirstNode();
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  peek() {
    if (this.linkedList.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.linkedList.head.data;
  }

  getSize() {
    return this.linkedList.getSize();
  }
}

// 사용 예시
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // 출력: 1
console.log(queue.dequeue()); // 출력: 1
console.log(queue.peek()); // 출력: 2
