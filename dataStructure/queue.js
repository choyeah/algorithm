class Queue {}

// 예제 코드
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.printQueue()); // 출력: 1 2 3
console.log(myQueue.dequeue()); // 출력: 1
console.log(myQueue.printQueue()); // 출력: 2 3
console.log(myQueue.front()); // 출력: 2
console.log(myQueue.isEmpty()); // 출력: false
console.log(myQueue.size()); // 출력: 2
console.log(myQueue.dequeue()); // 출력: 2
console.log(myQueue.printQueue()); // 출력:3
