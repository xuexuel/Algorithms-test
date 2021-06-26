/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:33:25
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:45:01
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\队列\yanghui.js
 */

 // 引入Queue方法
Queue = require('./my_queue')

// 使用队列打印出杨辉三角的前n行，n>=1
function print_yanghui(n) {
    let queue = new Queue.Queue()
    queue.enqueue(1) // 第一层的1
    // 第一层for循环控制打印几层
    for (let i = 1; i <= parseInt(n); i++) {
        let line = ''
        let pre = 0
        // 第二层for循环控制打印第i层
        for (let j = 0; j < i; j++) {
            let item = queue.dequeue()
            line += item + ' '
            // 计算下一行内容
            let value = item + pre
            pre = item
            queue.enqueue(value)
        }
        // 每一层最后一个数字是1，上面for循环没有计算最后一个数
        queue.enqueue(1)
        console.log(line);
    }

}
print_yanghui(5);