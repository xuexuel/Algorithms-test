/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:51:30
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-21 13:34:40
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\stack\my_stack.js
 */


function Stack() {
    let items = [];

    // 从栈顶添加元素，也叫压栈
    this.push = function (item) {
        items.push(item)
    }

    // 弹出栈顶元素
    this.pop = function () {
        return items.pop()
    }

    // 返回栈顶元素
    this.top = function(){
        return items[items.length - 1]
    }

    // 返回栈顶元素
    this.head = function () {
        return items[items.length - 1]
    }

    // 返回栈尾元素
    this.tail = function(){
        return items[0]
    }

    // 判断栈是否为空
    this.isEmpty = function () {
        return items.length === 0
    }

    // 返回栈的大小
    this.size = function () {
        return items.length
    }

    // 清空栈
    this.clear = function () {
        items = []
    }
}

exports.Stack = Stack