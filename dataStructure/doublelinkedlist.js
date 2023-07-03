// 양방향 노드 클래스 정의
class DoublyNode {
  data;
  prev;
  next;

  constructor(data) {}
}

// 양방향 링크드 리스트 클래스 정의
class DoublyLinkedList {
  head;
  tail;
  size;

  constructor() {}

  // 리스트가 비어있는지 확인하는 메소드
  isEmpty() {}

  // 리스트의 끝에 노드를 추가하는 메소드
  add(data) {}

  // 리스트에서 데이터를 삭제하는 메소드
  remove(data) {}

  // 리스트에서 데이터를 찾는 메소드
  find(data) {}

  // 리스트의 모든 노드를 출력하는 메소드
  print() {}
}

// 테스트 코드
const doublyLinkedList = new DoublyLinkedList();

// 데이터 추가 테스트
doublyLinkedList.add(10);
doublyLinkedList.add(20);
doublyLinkedList.add(30);
doublyLinkedList.add(40);

// 리스트 출력: 10 <-> 20 <-> 30 <-> 40
doublyLinkedList.print();

// 데이터 검색 테스트
console.log(doublyLinkedList.find(20)); // DoublyNode { data: 20, prev: DoublyNode { data: 10, ... }, next: DoublyNode { data: 30, ... } }
console.log(doublyLinkedList.find(50)); // null

// 데이터 삭제 테스트
doublyLinkedList.remove(20);
doublyLinkedList.remove(10);

// 리스트 출력: 30 <-> 40
doublyLinkedList.print();

// 데이터 삭제 테스트 (tail)
doublyLinkedList.remove(40);

// 리스트 출력: 30
doublyLinkedList.print();

// 비어있는지 확인 테스트
console.log(doublyLinkedList.isEmpty()); // false

// 데이터 삭제 테스트 (head)
doublyLinkedList.remove(30);

// 리스트 출력: (빈 리스트)
doublyLinkedList.print();

// 비어있는지 확인 테스트
console.log(doublyLinkedList.isEmpty()); // true
