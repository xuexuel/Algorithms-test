/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 16:02:28
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 16:03:13
 */
var Node = function (data) {
  this.data = data;
  this.next = null;
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

//	迭代翻转
function reverse_iter(head) {
  if (!head) {
    return null;
  }
  var pre_node = null;					// 前⼀个节点
  var curr_node = head;				    // 当前要翻转的节点
  while (curr_node) {
    var next_node = curr_node.next;		// 下⼀个节点
    curr_node.next = pre_node;			// 对当前节点进⾏翻转
    pre_node = curr_node;				// pre_node向后滑动	
    curr_node = next_node;				 //	curr_node向后滑动									
  }
  //最后要返回pre_node,当循环结束时,pre_node指向翻转前链表的最后⼀个节点
  return pre_node;
};
print(reverse_iter(node1));


// 递归翻转
function reverse_digui(head) {
  //	如果head	为null
  if (!head) {
    return null;
  }
  if (head.next == null) {
    return head;
  }
  //	从下⼀个节点开始进⾏翻转
  var new_head = reverse_digui(head.next);
  head.next.next = head;			//	把当前节点连接到新链表上
  head.next = null;
  return new_head;
};
// print(reverse_digui(node1));

