/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 16:01:00
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 16:01:01
 */
LinkList = require('./my_node')

 // 基于链表实现栈
function Stack() {
    var linklist = new LinkList.LinkList();
    //	从栈顶添加元素
    this.push = function (item) {
        linklist.append(item);
    };
    //	弹出栈顶元素
    this.pop = function () {
        return linklist.remove_tail();
    };
    //	返回栈顶元素
    this.top = function () {
        return linklist.tail();
    };
    //	返回栈的⼤⼩
    this.size = function () {
        return linklist.length();
    };
    //	判断是否为空
    this.isEmpty = function () {
        return linklist.isEmpty();
    };
    //	清空栈
    this.clear = function () {
        linklist.clear()
    };
};