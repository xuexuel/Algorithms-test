/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 12:31:50
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-21 14:12:59
 * @FilePath: \vue-martd:\Algorithms\Algorithms\tree\tree.js
 */
const Stack = require('../stack/my_stack')
let BinTreeNode = function (data) {
    this.data = data;
    this.leftChild = null;     // 左孩子
    this.rightChild = null;    // 右孩子
    this.parentNode = null;    // 父节点
};

function BinaryTree() {
    let root = null;   //根节点
    // 采用广义表表示的建立二叉树方法
    this.init_tree = function (string) {
        let stack = new Stack.Stack();
        let k = 0;
        let new_node = null;
        for (let i = 0; i < string.length; i++) {
            let item = string[i];
            if (item == "#") {
                break;
            }
            if (item == "(") {
                stack.push(new_node);
                k = 1;
            } else if (item == ")") {
                stack.pop();
            } else if (item == ",") {
                k = 2;
            } else {
                new_node = new BinTreeNode(item);
                if (root == null) {
                    root = new_node;
                    console.log(root);
                } else if (k == 1) {
                    // 左子树
                    let top_item = stack.top();
                    top_item.leftChild = new_node;
                    new_node.parentNode = top_item;
                } else {
                    // 右子树
                    let top_item = stack.top();
                    top_item.rightChild = new_node;
                    new_node.parentNode = top_item;
                }
            }
        }
    };

    // 返回根节点
    this.get_root = function () {
        return root
    }
    // 中序遍历
    this.in_order = function (node) {
        if (node == null) {
            return
        }
        this.in_order(node.leftChild)
        console.log(node.data);
        this.in_order(node.rightChild)
    }
    // 前序遍历
    this.pre_order = function (node) {
        if (node == null) {
            return;
        }
        console.log(node.data);
        this.pre_order(node.leftChild);
        this.pre_order(node.rightChild);
    };
    // 后序遍历
    this.post_order = function (node) {
        if (node == null) {
            return;
        }
        this.post_order(node.leftChild);
        this.post_order(node.rightChild);
        console.log(node.data);
    };

    let tree_node_count = function (node) {
        // 左子树的节点数量加上右子树的节点数量 再加上1
        if (!node) {
            return 0;
        }
        let left_node_count = tree_node_count(node.leftChild);
        let right_node_count = tree_node_count(node.rightChild);
        return left_node_count + right_node_count + 1;
    };
    // 返回节点数量
    this.size = function () {
        return tree_node_count(root);
    };

    let tree_height = function (node) {
        // 左子树的高度和右子树的高度取最大值,加上当前的高度
        if (!node) {
            return 0;
        }
        let left_child_height = tree_height(node.leftChild);
        let right_child_height = tree_height(node.rightChild);
        if (left_child_height > right_child_height) {
            return left_child_height + 1;
        } else {
            return right_child_height + 1;
        }
    
    };
    // 返回高度
    this.height = function () {
        return tree_height(root);
    };

    let find_node = function(node, data){
        if(!node){
            return null;
        }
        if(node.data == data){
            return node;
        }
        // 先到左子树里找
        left_res = find_node(node.leftChild, data);
        if(left_res){
            return left_res;
        }
        // 没找到，去右子树里找
        return find_node(node.rightChild, data);
    };
    // 查找data
    this.find = function(data){
        return find_node(root, data);
    };

};

let bt = new BinaryTree()
bt.init_tree('A(B(D,E(G,)),C(,F))#')
let root_node = bt.get_root()
bt.in_order(root_node)

exports.BinaryTree = BinaryTree