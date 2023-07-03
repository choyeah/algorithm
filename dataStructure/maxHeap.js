class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  getMax() {
    return this.heap[1];
  }

  getParentIndex(i) {
    return Math.floor(i / 2);
  }

  getLeftChildIndex(i) {
    const index = i * 2;
    return index < this.heap.length ? index : null;
  }

  getRightChildIndex(i) {
    const index = i * 2 + 1;
    return index < this.heap.length ? index : null;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    if (typeof value !== "number") {
      return null;
    }
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 1 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  remove() {
    if (this.heap.length <= 1) {
      return null;
    }
    const largest = this.heap[1];
    this.heap[1] = this.heap.pop();
    if (this.heap.length > 1) {
      this.bubbleDown();
    }
    return largest;
  }
  bubbleDown() {
    let currentIndex = 1;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      let largestChildIndex = rightChildIndex;
      if (
        !largestChildIndex ||
        this.heap[leftChildIndex] > this.heap[rightChildIndex]
      ) {
        largestChildIndex = leftChildIndex;
      }

      if (this.heap[currentIndex] < this.heap[largestChildIndex]) {
        this.swap(currentIndex, largestChildIndex);
        currentIndex = largestChildIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
        rightChildIndex = this.getRightChildIndex(currentIndex);
      } else {
        break;
      }
    }
  }

  printHeap() {
    console.log(this.heap);
  }
}

let heap = new MaxHeap();

// Insert nodes
heap.insert(3);
heap.insert(2);
heap.insert(1);
heap.insert(7);
heap.insert(8);
heap.insert(4);
heap.insert(10);
heap.insert(16);
heap.insert(12);

heap.printHeap(); // Output: [ null, 16, 12, 10, 7, 8, 3, 1, 2, 4 ]

// Get and print maximum
console.log(heap.getMax()); // Output: 16

// Remove root and print maximum
heap.remove();
console.log(heap.getMax()); // Output: 12

// Remove root and print maximum
heap.remove();
console.log(heap.getMax()); // Output: 10

let heap2 = new MaxHeap();

heap2.insert(5);
heap2.insert(3);
heap2.insert(17);
heap2.insert(10);
heap2.insert(84);
heap2.insert(19);
heap2.insert(6);
heap2.insert(22);
heap2.insert(9);

heap2.printHeap(); // Output: [ null, 84, 22, 19, 10, 3, 17, 6, 5, 9 ]

console.log(heap2.getMax()); // Output: 84

heap2.remove();
console.log(heap2.getMax()); // Output: 22

heap2.remove();
console.log(heap2.getMax()); // Output: 19

heap2.remove();
console.log(heap2.getMax()); // Output: 17

heap2.remove();
console.log(heap2.getMax()); // Output: 10
