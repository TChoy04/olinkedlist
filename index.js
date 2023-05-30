class Node {
  constructor(nextNode, value) {
    this.nextNode = nextNode;
    this.value = value;
  }
  setValue(val) {
    this.value = val;
  }
  getValue() {
    return this.value;
  }
  setNext(node) {
    this.nextNode = node;
  }
  getNext() {
    return this.nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    let newNode = new Node(null, value);
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.setNext(newNode);
    this.head = newNode;
    this.size++;
  }
  prepend(value) {
    let newNode = new Node(this.tail, value);
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail = newNode;
    this.size++;
  }
  getSize() {
    return this.size;
  }
  at(index) {
    let temp = this.tail;
    for (let x = 0; x < index; x++) temp = temp.getNext();
    return temp;
  }
  pop() {
    let temp = this.tail;
    while (temp.getNext().getNext() != null) {
      temp = temp.getNext();
    }
    temp.setNext() == null;
    this.size--;
  }
  contains(value) {
    let temp = this.tail;
    while (temp != null) {
      if (temp.getValue() == value) return true;
      temp = temp.getNext();
    }
    return false;
  }
  find(value) {
    let count = 0;
    let temp = this.tail;
    while (temp != null) {
      if (temp.getValue() == value) return count;
      count++;
      temp = temp.getNext();
    }
    return -1;
  }
  toString() {
    let res = "";
    let temp = this.tail;
    while (temp != null) {
      res += "(" + temp.getValue() + ")";
      if (temp.getNext() != null) res += "->";
      temp = temp.getNext();
    }
    return res;
  }
}
list = new LinkedList();
list.append(5);
list.append(10);
list.prepend(20);
list.prepend(15);
list.append(1);

console.log(list.toString());
console.log("List Size: " + list.getSize());
list.pop();
console.log(list.toString());
console.log("List Size: " + list.getSize());
list.pop();
console.log(list.toString());
console.log("List Size: " + list.getSize());
console.log("List contains 20: " + list.contains(10));
console.log("List contains 5: " + list.contains(5));
console.log("Index with 5: " + list.find(5));
console.log("Value at Position 1:" + list.at(1));
