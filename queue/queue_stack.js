/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:50:36
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:51:02
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\队列\queue_stack.js
 */

// 引入Queue方法
Queue = require('./my_queue')

function QueueStack() {
  let queue1 = new Queue.Queue()
  let queue2 = new Queue.Queue()
  // 放数据的队列
  let data_queue = null
  // 空队列，备份使用
  let empty_queue = null
  // 确认哪个队列放数据，哪个队列做备份空队列
  let init_queue = function () {
    if (queue1.isEmpty() && queue2.isEmpty()) {
      data_queue = queue1
      empty_queue = queue2
    } else if (queue1.isEmpty()) {
      data_queue = queue2
      empty_queue = queue1
    } else {
      data_queue = queue1
      empty_queue = queue2
    }
  }

  // push方法
  this.push = function (item) {
    init_queue()
    data_queue.enqueue(item)
  }

  // top方法
  this.top = function () {
    init_queue()
    return data_queue.tail()
  }

  // pop方法
  this.pop = function () {
    init_queue()
    while (data_queue.size() > 1) {
      empty_queue.enqueue(data_queue.dequeue())
    }
    return data_queue.dequeue()
  }
}
let q_stack = new QueueStack()
q_stack.push(1)
q_stack.push(2)
q_stack.push(4)
console.log(q_stack.top());   // 栈顶是4
console.log(q_stack.pop());   // 移除4
console.log(q_stack.top());   // 栈顶变成2
console.log(q_stack.pop());   // 移除2
console.log(q_stack.pop());   // 移除1