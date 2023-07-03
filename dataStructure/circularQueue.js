class CircularQueue {
  queue;
  capacity;
  front = 0;
  rear = 0;
  size = 0;

  constructor(capacity = 3) {
    this.capacity = capacity;
    this.queue = new Array(capacity);
  }

  enqueue(element) {
    if (this.isFull()) {
      throw new Error("Full");
    }
    this.queue[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Empty");
    }
    const dequeuedElement = this.queue[this.front];
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return dequeuedElement;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error("Empty");
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

// 예제 코드
const myCircularQueue = new CircularQueue(3);
myCircularQueue.enqueue(1);
console.log(myCircularQueue);
myCircularQueue.enqueue(2);
console.log(myCircularQueue);
myCircularQueue.enqueue(3);
console.log(myCircularQueue);

try {
  myCircularQueue.enqueue(4);
} catch (error) {
  console.log(error.message); // 출력: Queue is full
}

console.log(myCircularQueue.dequeue()); // 출력: 1
console.log(myCircularQueue);
myCircularQueue.enqueue(4);
console.log(myCircularQueue);
console.log(myCircularQueue.dequeue()); // 출력: 2
console.log(myCircularQueue);
console.log(myCircularQueue.getFront()); // 출력: 3
console.log(myCircularQueue);
