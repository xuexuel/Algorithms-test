/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 16:01:27
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 16:01:52
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\链表\node_queue.js
 */
LinkList = require('./my_node')


 // 基于链表实现队列
function Queue() {
    var linklist = new LinkList.LinkList();
    //	⼊队列
    this.enqueue = function (item) {
        linklist.append(item);
    };
    //	出队列
    this.dequeue = function () {
        return linklist.remove_head();
    };
    //	返回队⾸
    this.head = function () {
        return linklist.head();
    };
    //	返回队尾
    this.tail = function () {
        return linklist.tail();
    };
    //	size
    this.size = function () {
        return linklist.length();
    };
    //clear
    this.clear = function () {
        linklist.clear();
    };
    //	isEmpty
    this.isEmpty = function () {
        return linklist.isEmpty();
    };
};