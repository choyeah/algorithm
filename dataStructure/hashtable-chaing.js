class LinkedListNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size = 50) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  hash(key) {
    let index = 0;
    for (let char of key) {
      index += char.charCodeAt(0);
    }

    return index % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const newNode = new LinkedListNode(key, value);

    if (this.buckets[index] === null) {
      this.buckets[index] = newNode;
      return;
    }

    let currentNode = this.buckets[index];
    while (currentNode !== null) {
      // update value when same key
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }

      // met lastnode set new node
      if (currentNode.next === null) {
        currentNode.next = newNode;
        return;
      }

      currentNode = currentNode.next;
    }
  }

  get(key) {
    const index = this.hash(key);
    let currentNode = this.buckets[index];
    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);

    // first node
    if (this.buckets[index].key === key) {
      this.buckets[index] = this.buckets[index].next;
      return;
    }

    let previousNode = this.buckets[index];
    let currentNode = this.buckets[index].next;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        previousNode.next = currentNode.next;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return undefined;
  }
}

// Test cases
const testHashTable = new HashTable();

testHashTable.set("apple", "delicious");
testHashTable.set("banana", "tasty");
testHashTable.set("orange", "sweet");

console.log(testHashTable.get("apple")); // 출력: "delicious"
console.log(testHashTable.get("banana")); // 출력: "tasty"
console.log(testHashTable.get("orange")); // 출력: "sweet"
console.log(testHashTable.get("grape")); // 출력: undefined

testHashTable.set("banana", "very tasty");
console.log(testHashTable.get("banana")); // 출력: "very tasty"

testHashTable.delete("orange");
console.log(testHashTable.get("orange")); // 출력: undefined

testHashTable.set("watermelon", "juicy");
console.log(testHashTable.get("watermelon")); // 출력: "juicy"

testHashTable.delete("apple");
console.log(testHashTable.get("apple")); // 출력: undefined
