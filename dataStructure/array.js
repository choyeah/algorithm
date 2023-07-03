// Array 클래스 정의
class Array {
  data = {};
  length = 0;

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("empty");
      return;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  remove(index) {
    if (this.isEmpty()) {
      console.log("empty");
      return;
    }
    if (!this.isExistItem(index)) {
      console.log("no item");
      return;
    }
    delete this.data[index];
    this.shift(index);
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  isExistItem(index) {
    return this.data.hasOwnProperty(index);
  }
}

// Array 클래스 인스턴스 생성
const myArray = new Array();

// 배열 요소 추가
myArray.push("Apple");
myArray.push("Banana");
myArray.push("Cherry");
myArray.push("Choyeah");
myArray.push("Jun");
myArray.push("Min");
console.log("print", myArray);

// 배열 요소 출력
if (
  myArray.get(0) === "Apple" &&
  myArray.get(1) === "Banana" &&
  myArray.get(2) === "Cherry" &&
  myArray.get(3) === "Choyeah" &&
  myArray.get(4) === "Jun" &&
  myArray.get(5) === "Min"
) {
  // console.log(myArray.get(0)); // 'Apple'
  // console.log(myArray.get(1)); // 'Banana'
  // console.log(myArray.get(2)); // 'Cherry'
  // console.log(myArray.get(3)); // 'Choyeah'
  // console.log(myArray.get(4)); // 'Jun'
  // console.log(myArray.get(5)); // 'Min'

  console.log("1. True");
} else {
  console.log("1. False");
}

// 배열 요소 삭제
myArray.remove(1);
console.log("print", myArray);

// 배열 요소 삭제
myArray.remove(4);
console.log("print", myArray);

// 배열 요소 삭제
myArray.remove(6);
console.log("print", myArray);

// 배열 요소 삭제
myArray.remove(0);
console.log("print", myArray);

// 팝
console.log("pop");
myArray.pop();
console.log("print", myArray);

// 팝
console.log("pop");
myArray.pop();
console.log("print", myArray);

// 팝
console.log("pop");
myArray.pop();
console.log("print", myArray);

// 팝
console.log("pop");
myArray.pop();
console.log("print", myArray);

// get, set, pop, remove, shift
