/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-19 16:54:06
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 16:05:59
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\链表\test_node.js
 */

// 节点类
// let Node = function (data) {
//     this.data = data
//     this.next = null
// }
// let node1 = new Node(1)
// let node2 = new Node(2)
// let node3 = new Node(5)
// node1.next = node2
// node2.next = node3

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);


// 从头到尾打印链表
function reverse_print(head) {
    //	递归终⽌条件
    if (head == null) {
        return
    } else {
        reverse_print(head.next);		//	甩锅
        console.log(head.data);				//	后⾯的都打印了，该打印⾃⼰了
    }
};
reverse_print(node1)


// 实现函数reverser_find，返回链表倒数第k个节点的数值。
function reverse_find(head, k) {
    let fast = head
    let slow = head
    let step = k
    // 先让快游标的先走k步
    while (step > 0 && fast) {
        fast = fast.next
        step -= 1
    }
    // 当循环结束时，如果step!=0，说明链表的长度不够k
    if (step != 0) {
        return null
    } else {
        // 快的和慢的游标一起走
        while (fast && slow) {
            fast = fast.next
            slow = slow.next
        }
    }
    return slow.data
}

// 实现函数find_middle，查找并返回链表的中间节点
function find_middle(head){
    let fast = fast
    let slow = slow
    while(fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow.data
}

