/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:34:03
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:45:25
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\队列\my_queue.js
 */
function Queue() {
    let items = [];  // 存储数据

    // 从队列尾部添加元素
    this.enqueue = function (item) {
        items.push(item)
    }

    // 移除队列头部的元素
    this.dequeue = function () {
        return items.shift()
    }

    // 返回队列头部的元素
    this.head = function () {
        return items[0]
    }

    // 返回队列尾部的元素
    this.tail = function () {
        return items[items.length - 1]
    }

    // 判断栈是否为空
    this.isEmpty = function () {
        return items.length === 0
    }

    // 返回队列的大小
    this.size = function () {
        return items.length
    }

    // 清空队列
    this.clear = function () {
        items = []
    }
}

exports.Queue = Queue