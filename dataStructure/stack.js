class Stack {
  items = [];

  // 스택에 새로운 요소를 추가
  push(element) {
    this.items.push(element);
  }

  // 스택에서 가장 위에 있는 요소를 제거하고 반환
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    const lastItem = this.items[this.items.length - 1];
    this.items.length -= 1; // 렝스를 줄이면 내부적으로 마지막 요소 삭제됨
    return lastItem;
  }

  // 스택의 가장 위에 있는 요소를 반환
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 길이를 반환
  size() {
    return this.items.length;
  }

  // 스택의 모든 요소를 제거
  clear() {
    this.items = [];
  }

  // 스택의 요소를 문자열로 반환
  toString() {
    return this.items.toString();
  }
}

// 사용 예시
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 출력: 3
console.log(stack.pop()); // 출력: 3
console.log(stack.size()); // 출력: 2
