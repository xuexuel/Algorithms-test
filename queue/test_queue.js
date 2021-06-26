/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-17 23:13:38
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:36:55
 * @FilePath: \vue-martd:\Algorithms\Algorithms\队列\test_queue.js
 */

// 引入Queue方法
Queue = require('./my_queue')

// 有一个数组a[100]存放0--99；要求每隔两个数删掉一个数，
// 到末尾时循环至开头继续进行，求最后一个被删掉的数
let arr_list = [];
for (let i = 0; i < 100; i++) {
  arr_list.push(i)
}
function del_ring(arr_list) {
  let queue = new Queue.Queue()
  // 把数组里的元素都放到队列里面
  for (let i = 0; i < arr_list.length; i++) {
    queue.enqueue(arr_list[i])
  }
  console.log(queue.size());
  let index = 0
  while (queue.size() !== 1) {
    // 弹出一个元素，判断是否要删除
    let item = queue.dequeue()
    if (index % 3 !== 0) {
      queue.enqueue(item)
      console.log(item);
    }
    index++
  }
  return queue.head()
}
console.log(del_ring(arr_list));







