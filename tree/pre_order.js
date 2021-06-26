/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 14:05:44
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-21 14:12:36
 * @FilePath: \vue-martd:\Algorithms\Algorithms\tree\pre_order.js
 */

// 使用非递归方式实现前序遍历
// 请实现非递归的pre_order方法，程序输出结果为 A B D E G C F
const Stack = require('../stack/my_stack')
const BinaryTree = require('./tree.js')
let bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = bt.get_root();


function pre_order(node){
    let stack = new Stack.Stack();
    let curr_node = node;
    while(curr_node){
        console.log(curr_node.data);
        if(curr_node.rightChild){
            stack.push(curr_node.rightChild);
        }
        if(curr_node.leftChild){
            curr_node = curr_node.leftChild;
        }else{
            curr_node = stack.pop();
        }
    }
};
pre_order(root_node);