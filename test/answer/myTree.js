class Stack {
  constructor() {
    this.items = []
  }
  push(item) { this.items.push(item) }
  pop() {
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
}

class BinTreeNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parentNode = null;
  }
}

class BinTree {
  constructor() {
    this.root = null;
  }
  init_tree(string) {
    let stack = new Stack();
    let k = 0;
    let new_node = null;
    for (let i = 0; i < string.length; i++) {
      const item = string[i];
      if (item === "(") {
        stack.push(new_node);
        k = 1;
      } else if (item === ")") {
        stack.pop();
      } else if (item === ",") {
        k = 2;
      } else {
        new_node = new BinTreeNode(item);
        if (this.root === null) {
          this.root = new_node;
        } else {
          let top_item = stack.top();
          if (k === 1) {
            top_item.leftChild = new_node;
          } else {
            top_item.rightChild = new_node;
          }
          new_node.parentNode = top_item;
        }
      }
    }
  }
  get_root() {
    return this.root;
  }
  in_order(node) {
    if (node === null) {
      return false;
    }
    this.in_order(node.leftChild);
    console.log(node.data);
    this.in_order(node.rightChild);
  }
  pre_order(node) {
    if (node === null) {
      return false;
    }
    console.log(node.data);
    this.pre_order(node.leftChild);
    this.pre_order(node.rightChild);
  }
  post_order(node) {
    if (node === null) {
      return false;
    }
    this.post_order(node.leftChild);
    this.post_order(node.rightChild);
    console.log(node.data);
  }
  size() {
    return tree_node_count.call(this, this.root);
  }
  height() {
    return tree_height.call(this, this.root);
  }
  find(data) {
    return find_node.call(this, this.root, data);
  }
}
function tree_node_count(node) {
  if (node === null) {
    return 0;
  }
  let left_node_count = tree_node_count(node.leftChild);
  let right_node_count = tree_node_count(node.rightChild);
  return left_node_count + right_node_count + 1;
}
function tree_height(node) {
  if (node === null) {
    return 0;
  }
  let left_child_height = tree_height(node.leftChild);
  let right_child_height = tree_height(node.rightChild);
  let height = left_child_height > right_child_height ? left_child_height : right_child_height;
  return height + 1;
}
function find_node(node, data) {
  if (node === null) {
    return null;
  }
  if (node.data === data) {
    return node;
  }
  let left_res = find_node(node.leftChild, data);
  if (left_res) {
    return left_res;
  }
  return find_node(node.rightChild, data);
}

// * ????????????
let bt = new BinTree();
bt.init_tree("A(B(D,E(G,)),C(,F))")
// console.log(bt.size());
// console.log(bt.height());
// console.log(bt.find('D'));
let root_node = bt.get_root();
// bt.in_order(root_node)


// todo ?????????????????????:??????????????????????????????????????????????????????????????????????????????????????????????????????,?????????mirror??????

function mirror1(node) {
  if (node === null) {
    return null;
  }
  let temp = node.leftChild;
  node.leftChild = node.rightChild;
  node.rightChild = temp;
  mirror1(node.leftChild);
  mirror1(node.rightChild);
  return node;
};
function mirror2(node) {
  if (node === null) {
    return null;
  }
  let left = mirror2(node.leftChild);
  let right = mirror2(node.rightChild);
  node.leftChild = right;
  node.rightChild = left;
  return node;
};

// * ????????????
// mirror1(root_node);
// bt.in_order(root_node);
// mirror2(root_node);
// bt.in_order(root_node);


// todo ???????????????????????????????????????
function pre_order(node) {
  let stack = new Stack();
  let curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    if (curr_node.rightChild) {
      stack.push(curr_node.rightChild);
    }
    if (curr_node.leftChild) {
      curr_node = curr_node.leftChild;
    } else {
      curr_node = stack.pop();
    }
  }
};

// * ????????????
// pre_order(root_node);


// todo ???????????????????????????????????????
function in_order(node) {
  let stack = new Stack();
  let curr_node = node;
  while (true) {
    // ?????????????????????,?????????????????????? ????????????,????????????????????????????????????
    while (curr_node) {
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }
    // ????????????
    let pop_item = stack.pop();
    console.log(pop_item.data);
    // ???????????????,??????????????????null,???????????????,??????????????????while(curr_node) ???????????????
    curr_node = pop_item.rightChild;
    if (!curr_node && stack.isEmpty()) {
      break;
    }
  }
};

// bt.in_order(root_node);
// in_order(root_node);


// todo ???????????????????????????????????????
class Tag {
  constructor(node, state) {
    this.node = node;
    this.state = state;
  }
  // 0??????????????????????????????,1??????????????????????????????
};

function post_order(node) {
  let stack = new Stack();
  let curr_node = node;
  while (true) {
    while (curr_node) {
      let tag = new Tag(curr_node, 0);
      stack.push(tag);
      curr_node = curr_node.leftChild;
    }

    let pop_item = stack.pop();
    if (pop_item.node.rightChild && pop_item.state == 0) {
      pop_item.state = 1;
      stack.push(pop_item);
      curr_node = pop_item.node.rightChild;
    } else {
      console.log(pop_item.node.data);
    }
    if (!curr_node && stack.isEmpty()) {
      break;
    }
  }
};
post_order(root_node);


// todo ???????????????????????????????????????
let node1 = bt.find("D");
let node2 = bt.find("G");
console.log(node1.data);
console.log(node2.data);

// ????????????????????????
function lowest_common_ancestor(root_node, node1, node2) {
  if (!root_node || root_node == node1 || root_node == node2) {
    return root_node;
  }

  let left = lowest_common_ancestor(root_node.leftChild, node1, node2);
  let right = lowest_common_ancestor(root_node.rightChild, node1, node2);

  if (left && right) {
    return root_node;
  }
  if (left) {
    return left;
  }
  return right;
};

let ancestor = lowest_common_ancestor(root_node, node1, node2);
console.log(ancestor.data);

// todo ?????????????????????
function level_order(node) {
  let queue = new Queue();
  // ??????????????????????????????
  queue.enqueue(node);
  queue.enqueue(0);
  let str_link = "";
  while (!queue.isEmpty()) {
    del_item = queue.dequeue();
    if (del_item == 0) {
      console.log(str_link);
      str_link = "";
      if (queue.isEmpty()) {
        break;
      } else {
        queue.enqueue(0);
      }
      continue;
    }
    str_link += del_item.data + "  ";
    // ?????????????????????????????????
    if (del_item.leftChild) {
      queue.enqueue(del_item.leftChild);
    }
    if (del_item.rightChild) {
      queue.enqueue(del_item.rightChild);
    }
  }
};

level_order(root_node);

// todo ??????????????????????????????
// ????????????
function get_width(node, n) {
  if (node == null) {
    return 0
  }
  let queue = new Queue();
  // ??????????????????????????????
  queue.enqueue(node);
  queue.enqueue(0);
  let width = 1;
  let level = 0;
  while (!queue.isEmpty()) {
    del_item = queue.dequeue();
    if (del_item == 0) {
      level += 1;
      if (level == n) {
        return width;
      }
      width = queue.size();
      if (queue.isEmpty()) {
        break;
      } else {
        queue.enqueue(0);
      }
    }
    // ?????????????????????????????????
    if (del_item.leftChild) {
      queue.enqueue(del_item.leftChild);
    }
    if (del_item.rightChild) {
      queue.enqueue(del_item.rightChild);
    }
  }
};

console.log(get_width(root_node, 1));
console.log(get_width(root_node, 2));
console.log(get_width(root_node, 3));
console.log(get_width(root_node, 4));