class MinHeap {
  constructor() {
    this.heap = [null];
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

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  printHeap() {
    console.log(this.heap);
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  remove() {
    if (this.heap.length <= 1) {
      return false;
    }

    const smallest = this.heap[1];
    const lastNode = this.heap.pop();

    if (this.heap.length > 1) {
      this.heap[1] = lastNode;
      this.bubbleDown();
    }

    return smallest;
  }
  bubbleDown() {
    let currentIndex = 1;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    while (this.heap[leftChildIndex] || this.heap[rightChildIndex]) {
      let smallestIndex = rightChildIndex;
      if (
        !smallestIndex ||
        this.heap[leftChildIndex] < this.heap[rightChildIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      if (this.heap[currentIndex] > this.heap[smallestIndex]) {
        this.swap(currentIndex, smallestIndex);
        currentIndex = smallestIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
        rightChildIndex = this.getRightChildIndex(currentIndex);
      } else {
        break;
      }
    }
  }
}

let heap = new MinHeap();

heap.insert(3);
heap.insert(2);
heap.insert(1);
heap.insert(7);
heap.insert(8);
heap.insert(4);
heap.insert(10);
heap.insert(16);
heap.insert(12);

heap.printHeap(); // Output: [null, 1, 3, 2, 7, 8, 4, 10, 16, 12]

heap.remove();

heap.printHeap(); // Output: [null, 1, 3, 2, 7, 8, 4, 10, 16, 12]
heap.remove();
heap.printHeap(); // Output: [null, 1, 3, 2, 7, 8, 4, 10, 16, 12]
