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
    return (index + 1) % this.size;
  }

  isCollision(key, index) {
    return this.buckets[index] !== null && this.buckets[index].key !== key;
  }

  set(key, value) {
    let index = this.hash(key);
    while (this.isCollision(key, index)) {
      index = (index + 1) % this.size;
    }
    this.buckets[index] = { key, value };
  }

  get(key) {
    let index = this.hash(key);
    while (this.buckets[index] !== null) {
      if (this.buckets[index].key === key) {
        return this.buckets[index].value;
      }
      index = (index + 1) % this.size;
    }

    return undefined;
  }

  delete(key) {
    let index = this.hash(key);

    while (this.buckets[index] !== null) {
      if (this.buckets[index].key === key) {
        this.buckets[index].key = null;
        return;
      }
      index = (index + 1) % this.size;
    }
  }
}

// Test cases
const hashTable = new HashTable();
hashTable.set("firstName", "John");
hashTable.set("lastName", "Doe");
hashTable.set("email", "john.doe@example.com");
hashTable.set("age", 30);

console.log(hashTable.get("firstName")); // 출력: "John"
console.log(hashTable.get("lastName")); // 출력: "Doe"
console.log(hashTable.get("email")); // 출력: "john.doe@example.com"
console.log(hashTable.get("age")); // 출력: 30

hashTable.set("lastName", "Smith");
console.log(hashTable.get("lastName")); // 출력: "Smith"

hashTable.delete("lastName");
console.log(hashTable.get("lastName")); // 출력: undefined

// 충돌 테스트
hashTable.set("collision1", "value1");
hashTable.set("collision2", "value2");
hashTable.set("collision3", "value3");

console.log(hashTable.get("collision1")); // 출력: "value1"
console.log(hashTable.get("collision2")); // 출력: "value2"
console.log(hashTable.get("collision3")); // 출력: "value3"

hashTable.delete("collision2");
console.log(hashTable.get("collision1")); // 출력: "value1"
console.log(hashTable.get("collision2")); // 출력: undefined
console.log(hashTable.get("collision3")); // 출력: "value3"
