
// 使用非递归方式实现中序遍历
// 请实现非递归的in_order方法
const Stack = require('../stack/my_stack')
const BinaryTree = require('./tree.js')
let bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = bt.get_root();
function in_order(node) {
  var stack = new Stack.Stack();
  var curr_node = node;
  while (true) {
    // 先要处理左子树,当前节点怎么办? 放到栈里,等左子树处理完了弹出栈顶
    while (curr_node) {
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }

    // 处理栈顶
    var pop_item = stack.pop();
    console.log(pop_item.data);
    // 处理右子树,如果右子树是null,下一次循环,恰好可以跳过while(curr_node) 的这个循环
    curr_node = pop_item.rightChild;
    if (!curr_node && stack.isEmpty()) {
      break;
    }
  }
};

bt.in_order(root_node);
in_order(root_node);