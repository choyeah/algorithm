class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getParentIndex(i) {
    return Math.floor(i / 2);
  }

  getLeftChildIndex(i) {
    return Math.floor(i * 2);
  }

  getRightChildIndex(i) {
    return Math.floor(i * 2 + 1);
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

    let minValue = this.heap[1];
    let end = this.heap.pop();

    if (this.heap.length > 1) {
      this.heap[1] = end;
      this.bubbleDown();
    }
    return minValue;
  }

  bubbleDown() {
    let currentIndex = 1;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    while (currentIndex < this.heap.length) {
      // while (this.heap[leftChildIndex] || this.heap[rightChildIndex])
      let smallestIndex = rightChildIndex;
      if (
        this.heap[leftChildIndex] < this.heap[rightChildIndex] ||
        this.heap[rightChildIndex] === undefined
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
