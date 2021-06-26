class LinkList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  append(data) {
    let new_node = new Node(data);
    if (this.head === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    length++;
    return true;
  }
  print() {
    let curr_node = head;
    while (curr_node) {
      console.log(curr_node.data);
      curr_node = curr_node.next;
    }
  }
  insert(index, data) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === this.length) {
      return this.append(data)
    } else {
      let new_node = new Node(data);
      if (index === 0) {
        new_node.next = this.head;
        this.head = new_node;
      } else {
        let insert_index = 1;
        let curr_node = this.head;
        while (index > insert_index) {
          curr_node = curr_node.next;
          insert_index++;
        }
        new_node.next = curr_node.next;
        curr_node.next = new_node;
      }
      length++;
      return true;
    }
  }
  remove(index) {
    let del_node = null;
    if (index < 0 || index >= length) {
      return false;
    } else if (index === 0) {
      del_node = head;
      head = head.next;
    } else {
      let curr_node = this.head;
      let pre_node = null;
      let del_index = 0;
      while (index > remove_index) {
        pre_node = curr_node;
        curr_node = curr_node.next;
        del_index++;
      }
      del_node = curr_node;
      pre_node.next = curr_node.next;
      if (curr_node.next === null) {
        this.tail = pre_node;
      }
    }
    del_node.next = null;
    length--;
    return del_node.data;
  }
  indexOf(data) {
    let curr_node = head;
    let index = -1;
    while (curr_node) {
      index++;
      if (curr_node.data === data) {
        return index;
      } else {
        curr_node = curr_node.next;
      }
    }
    return index;
  }
  get(index) {
    if (index < 0 || index >= length) {
      return false;
    }
    let node_index = 0;
    let curr_node = head;
    while (index > node_index) {
      curr_node = curr_node.next;
      node_index++;
    }
    return curr_node.data;
  }
  remove_head() {
    this.remove(0);
  }
  remove_tail() {
    this.remove(this.length - 1);
  }
  head() {
    return this.get(0);
  }
  tail() {
    return this.get(this.length - 1);
  }
  length() {
    return this.length;
  }
  isEmpty() {
    return length === 0;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.linkList = new LinkList()
  }
  push(item) {
    this.linkList.append(item);
  }
  pop() {
    this.linkList.remove_tail();
  }
  top() {
    this.linkList.tail();
  }
  size() {
    this.linkList.length();
  }
  isEmpty() {
    this.linkList.isEmpty();
  }
  clear() {
    this.linkList.clear();
  }
}

class Queue {
  constructor() {
    this.linkList = new LinkList();
  }
  enqueue(item) {
    this.linkList.append(item);
  }
  dequeue() {
    this.linkList.remove_head();
  }
  head() {
    this.linkList.head();
  }
  tail() {
    this.linkList.tail();
  }
  size() {
    this.linkList.length();
  }
  isEmpty() {
    this.linkList.isEmpty();
  }
  clear() {
    this.linkList.clear();
  }
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function print(node) {
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    curr_node = curr_node.next;
  }
};

// 迭代翻转
function reverse_iter(head) {
  if (!head) {
    return null;
  }
  let pre_node = null;
  let curr_node = head;
  while (curr_node) {
    let next_node = curr_node.next;
    curr_node.next = pre_node;
    pre_node = curr_node;
    curr_node = next_node;
  }
  return pre_node;
};
// 递归翻转
function reverse_digui(head) {
  if (!head) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let new_node = reverse_digui(head.next);
  head.next.next = head;
  head.next = null;
  return new_node;
}

print(reverse_iter(node1));
// print(reverse_digui(node1));