/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 14:03:10
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-21 14:08:55
 * @FilePath: \vue-martd:\Algorithms\Algorithms\tree\mirror.js
 */

 //求一棵树的镜像(普通模式)
// 对于一棵树，如果每个节点的左右子树互换位置，那么就变成了这棵树的镜像
// 请实现mirror方法
const BinaryTree = require('./tree.js')
let bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
let root_node = bt.get_root();
let mirror_1 = function (node) {
    if (!node) {
        return;
    }
    // 用tmp保存右孩子
    let tmp = node.leftChild;
    // 左孩子等于右孩子
    node.leftChild = node.rightChild;
    // 右孩子等于左孩子
    node.rightChild = tmp;
    // 继续翻转
    mirror_1(node.leftChild);
    mirror_1(node.rightChild);
}

let mirror_2 = function (node) {
    if (!node) {
        return null;
    }
    // 翻转左子树
    let left = mirror_2(node.leftChild);
    // 翻转右子树
    let right = mirror_2(node.rightChild);

    // 左右孩子互换
    node.rightChild = left;
    node.leftChild = right;
    // 返回当前节点
    return node;
};
mirror_1(root_node);
bt.in_order(root_node);