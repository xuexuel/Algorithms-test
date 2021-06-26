// 使用非递归方式实现后序遍历
// 请实现非递归的post_order方法
const BinaryTree = require('./binarytree')
const Stack = require('./stack');

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root_node = bt.get_root();


var Tag = function (node, state) {
  this.node = node;
  this.state = state;    // 0表示左边已经遍历结束,1表示右边已经遍历结束
};

function post_order(node) {
  var stack = new Stack.Stack();
  var curr_node = node;
  while (true) {
    while (curr_node) {
      var tag = new Tag(curr_node, 0);
      stack.push(tag);
      curr_node = curr_node.leftChild;
    }

    var pop_item = stack.pop();
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