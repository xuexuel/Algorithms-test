class MinHeap {
  constructor(size) {
    this.heap = new Array(size);
    this.curr_size = 0;
    this.max_size = size;
  }
  init(arr) {
    let len = arr.length;
    this.max_size = len;
    this.curr_size = len;
    this.heap = new Array(len);
    for (let i = 0; i < len; i++) {
      this.heap[i] = arr[i];
    }
    let curr_pos = Math.floor((len - 2) / 2);
    while (curr_pos >= 0) {
      shif_down.call(this, curr_pos, len - 1);
      curr_pos--;
    }
  }
  insert(item) {
    if (this.curr_size == this.max_size) {
      return false;
    }
    this.heap[this.curr_size] = item;
    shif_up.call(this, this.curr_size);
    this.curr_size++;
    return true;
  }
  remove_min() {
    if (this.curr_size <= 0) {
      return null;
    }
    let min_value = this.heap[0];
    this.heap[0] = this.heap[this.curr_size - 1];
    this.curr_size--;
    shif_down.call(this, 0, this.curr_size - 1);
    return min_value;
  }
  size() {
    return this.curr_size;
  }
  print() {
    console.log(this.heap);
  }
  get_min() {
    if (this.curr_size > 0) {
      return this.heap[0];
    }
    return null;
  }
}

function shif_down(start_index, last_index) {
  let parent_index = start_index;
  let min_child_index = parent_index * 2 + 1;
  while (min_child_index <= last_index) {
    if (min_child_index < last_index && this.heap[min_child_index] > this.heap[min_child_index + 1]) {
      min_child_index++;
    }
    if (this.heap[parent_index] <= this.heap[min_child_index]) {
      break;
    } else {
      let tmp = this.heap[parent_index];
      this.heap[parent_index] = this.heap[min_child_index];
      this.heap[min_child_index] = tmp;
      parent_index = min_child_index;
      min_child_index = 2 * min_child_index + 1;
    }
  }
};

function shif_up(start) {
  let heap = this.heap;
  let child_index = start;
  let parent_index = Math.floor((child_index - 1) / 2);
  while (child_index > 0) {
    if (heap[parent_index] <= heap[child_index]) {
      break;
    } else {
      let temp = heap[child_index];
      heap[child_index] = heap[parent_index];
      heap[parent_index] = temp;
      child_index = parent_index;
      parent_index = Math.floor((parent_index - 1) / 2);
    }
  }
}

// *测试代码
// let min_heap = new MinHeap(10);
// min_heap.init([1, 63, 75, 3, 32, 57, 36, 92]);
// min_heap.print();
// min_heap.remove_min();
// min_heap.print();


// todo 排序:可以使用最小堆进行排序，使用待排序数组初始化最小堆，然后逐个删除堆顶元素，由于堆顶元素始终最小，所以可以得到一个有序的数组

// 数据准备
let arr_2 = [53, 17, 78, 9, 45, 65, 87, 23];
let min_heap_2 = new MinHeap(8);
for (let i = 0; i < arr_2.length; i++) {
  min_heap_2.insert(arr_2[i]);
}

let sort_arr = [];
for (let i = 0; i < arr_2.length; i++) {
  sort_arr.push(min_heap_2.remove_min());
}
// * 测试代码
// console.log(sort_arr);

// todo Top K 问题:一个非常大的数据集合有n个整数，求集合中最大的K个值。
// 数据准备
let arr_3 = [53, 17, 78, 9, 45, 65, 87, 23];
let min_heap_3 = new MinHeap(3);

for (let i = 0; i < arr_3.length; i++) {
  if (i < 3) {
    min_heap_3.insert(arr_3[i]);
  } else {
    let item = arr_3[i];
    if (item > min_heap_3.get_min()) {
      min_heap_3.remove_min();
      min_heap_3.insert(item);
    }
  }
}
// * 测试代码
// min_heap_3.print();



class CodeNode {
  constructor(code, rate) {
    this.code = code;     // 字符
    this.rate = rate;     // 概率
  };
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  };
}

class HuffmanTree {
  constructor() {
    this.root = null;
  }
  init_tree(arr) {
    let min_heap = new MinHeap();
    min_heap.init(arr);
    for (let i = 0; i < arr.length - 1; i++) {
      let first = min_heap.remove_min();
      let second = min_heap.remove_min();

      let new_item = new CodeNode("", first.data.rate + second.data.rate);
      let new_node = new TreeNode(new_item);
      min_heap.insert(new_node);

      new_node.leftChild = first;
      new_node.rightChild = second;
      first.parent = new_node;
      second.parent = new_node;

      this.root = new_node;
    }
  };
  get_code() {
    // 获得最终的变长编码
    let code_dict = {};
    get_code_from_tree.call(this, this.root, code_dict, "");
    return code_dict;
  };

  print() {
    console.log(this.root);
  };
};

function get_code_from_tree(node, dict, code_str) {
  if (!node.leftChild && !node.rightChild) {
    // 页节点
    dict[node.data.code] = code_str;
    return;
  }
  if (node.leftChild) {
    get_code_from_tree(node.leftChild, dict, code_str + "0");
  }
  if (node.rightChild) {
    get_code_from_tree(node.rightChild, dict, code_str + "1");
  }
};


// 准备数据
let code_dict = {
  "a": 0.12,
  "b": 0.4,
  "c": 0.15,
  "d": 0.08,
  "e": 0.25
};
let forest = [];
for (let key in code_dict) {
  let item = new CodeNode(key, code_dict[key]);
  forest.push(new TreeNode(item));
}
let huffman_tree = new HuffmanTree();
huffman_tree.init_tree(forest);
console.log(huffman_tree.get_code());