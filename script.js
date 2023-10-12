function nodeFactory(value = null, nextNode = null) {
  value = value;
  nextNode = nextNode;
  return { value, nextNode };
}

function linkedList() {
  let head = null;
  let count = 0;

  function prepend(value) {
    let node = nodeFactory(value);
    if (head === null) {
      head = nodeFactory("head", node);
    } else if (head.nextNode == node) {
      this.count++;
      return node;
    } else {
      node.nextNode = head.nextNode;
      head.nextNode = node;
      this.count++;
      return node;
    }
  }
  function append(value) {
    let node = nodeFactory(value);
    if (head == null) {
      node = prepend(value);
      this.count++;
      return node;
    } else {
      let tail = findTail();
      tail.nextNode = node;
      this.count++;
      return node;
    }
  }
  function findHead() {
    return head;
  }
  function findTail() {
    let tail = head;
    while (tail.nextNode != null) {
      tail = tail.nextNode;
    }
    return tail;
  }
  function at(index) {
    let tmp = head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
  function pop() {
    let tmp = head;
    let prev = null;
    while (tmp.nextNode != null) {
      prev = tmp;
      tmp = tmp.nextNode;
    }
    prev.nextNode = null;
    this.count--;
  }
  function contains(value) {
    let tmp = head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      if (tmp.value == value) {
        return true;
      }
    }
    return false;
  }
  function find(value) {
    let tmp = head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      if (tmp.value == value) {
        return tmp;
      }
    }
    return null;
  }
  function toString() {
    let tmp = head;
    let arr = [];
    while (tmp.nextNode != null) {
      arr.push(tmp.value);
      tmp = tmp.nextNode;
    }
    arr.push(tmp.value);
    let str = arr.toString();
    str = str.replace(/,/g, " -> ");
    return str;
  }
  return {
    prepend,
    append,
    head,
    count,
    findTail,
    findHead,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

let list = linkedList();
list.append(5);
list.prepend(1);
list.append(2);
list.append(4);
list.prepend(3);
console.log(list.toString());
console.log(list.contains(52));
console.log(list.find(4));
console.log(list.at(4));
list.pop();
console.log(list.count);
console.log(list.findTail());
console.log(list.findHead());
console.log(list.toString());
