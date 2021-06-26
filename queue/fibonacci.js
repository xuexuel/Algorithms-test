/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:46:47
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:49:32
 */

// 引入Queue方法
Queue = require('./my_queue')

// 使用队列计算斐波那契额数列的第n项
// 斐波那契数列的前两项是1 1，此后的每一项都是该项前面两项之和，即f(n)=f(n-1)+f(n-2)
function fibonacci(n) {
  let queue = new Queue.Queue()
  let i = 0
  // 先放入斐波那契序列的前两个数值
  queue.enqueue(1)
  queue.enqueue(1)
  while (i < n - 2) {
    // 出队列一个元素
    let del_item = queue.dequeue()
    // 取队列头部元素
    let head_item = queue.head()
    let next_item = del_item + head_item
    // 将计算结果放入队列
    queue.enqueue(next_item)
    i++
  }
  queue.dequeue()
  return queue.head()
}
console.log(fibonacci(5));  // 5
console.log(fibonacci(10));  // 55