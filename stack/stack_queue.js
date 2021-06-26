/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:53:16
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:53:40
 * @FilePath: \vue-martd:\Algorithms\Algorithms\栈\stack_queue.js
 */
// 引入Stack方法
Stack = require('./my_stack')


 // 用两个栈实现一个队列
function stackQueue() {
    let stack1 = new Stack.Stack()
    let stack2 = new Stack.Stack()
    let data_stack = null
    let empty_stack = null
    let init_stack = function () {
        if (stack1.isEmpty() && stack2.isEmpty()) {
            data_stack = stack1
            empty_stack = stack2
        } else if (stack1.isEmpty()) {
            data_stack = stack2
            empty_stack = stack1
        } else {
            data_stack = stack1
            empty_stack = stack2
        }
    }
    this.enqueue = function(item){
        init_stack()
        data_stack.push(item)
    }

    this.head = function(){
        init_stack()
        return data_stack.tail()
    }

    this.dequeue = function () {
        init_stack()
        while(data_stack.size()>1){
            let value1 = data_stack.pop()
            empty_stack.push(value1)
        }
        let res = data_stack.pop()
        while(empty_stack.size()>0){
            let value2 = empty_stack.pop()
            data_stack.push(value2)
        }
        return res
    }
}
let s_queue = new stackQueue()
s_queue.enqueue(1)
s_queue.enqueue(2)
s_queue.enqueue(4)
console.log(s_queue.head());   // 队列头部是1
console.log(s_queue.dequeue());   // 移除1
console.log(s_queue.head());   // 队列头部变成2
console.log(s_queue.dequeue());   // 移除2
console.log(s_queue.dequeue());   // 移除4

