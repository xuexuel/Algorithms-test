
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

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
    this.length++;
    return true;
  }
  print() {
    let curr_node = this.head;
    while (curr_node) {
      console.log(curr_node.data);
      curr_node = curr_node.next;
    }
  }
  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return this.append(data);
    } else {
      let new_node = new Node(data);
      if (index === 0) {
        new_node.next = this.head;
        this.head = new_node;
      } else {
        let insert_index = 1;
        let curr_node = this.head;
        while (insert_index < index) {
          curr_node = curr_node.next;
          insert_index++;
        }
        new_node.next = curr_node.next;
        curr_node.next = new_node;
      }
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    } else {
      let del_node = null;
      if (index === 0) {
        this.del_node = this.head;
        this.head = this.head.next;
        if (!head) {
          this.tail = null;
        }
      } else {
        let del_index = 1;
        let curr_node = this.head;
        while (del_index < index) {
          del_index++;
          curr_node = curr_node.next;
        }
        del_node = curr_node.next;
        curr_node.next = curr_node.next.next;
        if (curr_node.next === null) {
          this.tail = curr_node;
        }
      }
      this.length--;
      return del_node;
    }
  }
  indexOf(data) {
    let curr_node = this.head;
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
    if (index < 0 || index >= this.length) {
      return false;
    }
    let node_index = 0;
    let curr_node = this.head;
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
  headNode() {
    return this.get(0);
  }
  tailNode() {
    return this.get(this.length - 1);
  }
  listLength() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// let link = new LinkList();
// link.append(3);
// link.append(4);
// link.append(5);
// link.append(6);
// link.append(7);
// link.insert(3, 4);
// link.print();
// link.remove(2);
// link.print();
// link.remove(4);
// link.print();

// todo 1、基于链表实现Stack
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
    this.linkList.tailNode();
  }
  size() {
    this.linkList.listLength();
  }
  isEmpty() {
    this.linkList.isEmpty();
  }
  clear() {
    this.linkList.clear();
  }
}
// todo 2、基于链表实现Queue
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
    this.linkList.headNode();
  }
  tail() {
    this.linkList.tailNode();
  }
  size() {
    this.linkList.listLength();
  }
  isEmpty() {
    this.linkList.isEmpty();
  }
  clear() {
    this.linkList.clear();
  }
}


// todo 3、翻转链表
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function print(node) {
  let curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    curr_node = curr_node.next;
  }
};

// todo 3(1)迭代翻转
function reverse_iter(head) {
  if (!head) {
    return null;
  }
  let pre_node = null;
  let curr_node = this.head;
  while (curr_node) {
    let next_node = curr_node.next;
    curr_node.next = pre_node;
    pre_node = curr_node;
    curr_node = next_node;
  }
  return pre_node;
};
// todo 3(2)递归翻转
function reverse_digui(head) {
  if (!head) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let new_head = reverse_digui(head.next);
  head.next.next = head;
  head.next = null;
  return new_head;
}
// print(reverse_iter(node1));
// print(reverse_digui(node1));



// todo 从尾到头打印链表,不许翻转链表。
function reverse_print(head) {
  // 递归终止条件
  if (head == null) {
    return
  } else {
    reverse_print(head.next);  // 甩锅
    console.log(head.data);    // 后面的都打印了，该打印自己了
  }
};
// reverse_print(node1);


// todo 合并两个两个有序链表 :已知有两个有序链表(链表元素从小到大)，请实现函数merge_link，将两个链表合并成一个有序链表，并返回新链表，原有的两个链表不要修改

let node11 = new Node(1);
let node21 = new Node(4);
let node31 = new Node(9);
let node41 = new Node(2);
let node51 = new Node(5);
let node61 = new Node(6);
let node71 = new Node(10);

node11.next = node21;
node21.next = node31;

node41.next = node51;
node51.next = node61;
node61.next = node71;

function merge_link(head1, head2) {
  if (head1 == null) {
    return head2;
  } else if (head2 == null) {
    return head1;
  }
  let merge_head = null;   // 合并后链表头
  let merge_tail = null;   // 合并后链表尾
  let curr_1 = head1;
  let curr_2 = head2;
  while (curr_1 && curr_2) {
    // 找到最小值
    let min_data;
    if (curr_1.data < curr_2.data) {
      min_data = curr_1.data;
      curr_1 = curr_1.next;
    } else {
      min_data = curr_2.data;
      curr_2 = curr_2.next;
    }
    let new_node = new Node(min_data);
    if (merge_head == null) {
      merge_head = new_node;
    } else {
      merge_tail.next = new_node;
    }
    merge_tail = new_node;
  }
  // 链表可能还有一部分没有合并进来
  let rest_link = curr_1 ? curr_1 : curr_2;
  while (rest_link) {
    let new_node = new Node(rest_link.data);
    merge_tail.next = new_node;
    merge_tail = new_node;
    rest_link = rest_link.next;
  }
  return merge_head;
};

// todo 查找单链表中的倒数第K个节点(k > 0):实现函数reverse_find，返回链表倒数第k个节点的数值
function reverse_find(head, k) {
  // 在这里实现你的代码,返回倒数第k个节点的值
  let fast = head;
  let slow = head;
  let step = k;
  // 先让快游标的先走k步
  while (step > 0 && fast) {
    fast = fast.next;
    step -= 1;
  }
  // 当循环结束时,如果step != 0,说明链表的长度不够k
  if (step != 0) {
    return null;
  } else {
    // 快的和慢的游标一起走
    while (fast && slow) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return slow.data;
};

// console.log(reverse_find(node1, 2));


// todo 查找单链表的中间结点:实现函数find_middle，查找并返回链表的中间节点
function find_middle(head) {
  // 在这里实现你的代码,返回倒数第k个节点的值
  let fast = head;
  let slow = head;
  // 两个一起走,fast一次走两步,slow一次走一步
  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
};
// console.log(find_middle(node1));

// todo 实现双向链表
function DoubleLinkList() {
  // 定义节点
  let Node = function (data) {
    this.data = data;   // 数据
    this.next = null;   // 后继指针
    this.pre = null;    // 前驱指针
  }

  let length = 0;        // 长度
  let head = null;       // 头节点
  let tail = null;       // 尾节点

  this.append = function (data) {
    // 在这里实现append方法
  };

  this.insert = function (index, data) {
    // 在这里实现insert方法
  };

  this.remove = function (index) {
    // 在这里实现remove方法
  };

};