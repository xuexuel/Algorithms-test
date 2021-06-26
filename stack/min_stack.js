/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-17 21:49:45
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-17 22:19:58
 * @FilePath: \vue-martd:\Algorithms\Algorithms\min_stack.js
 */


// 实现一个栈，除了push，pop方法以外，
// 提供一个min方法，返回栈里最小的元素，且时间复杂度为o(1)

// 引入Stack方法
Stack = require('./my_stack')

function MinStack(){
    let data_stack = new Stack.Stack()   // 存储数据
    let min_stack = new Stack.Stack()   // 存储最小值
    // push方法
    this.push = function(item){
        data_stack.push(item)

        // min_stack为空或者栈顶元素大于item
        if(min_stack.isEmpty() || item < min_stack.top()){
            min_stack.push(item)
        } else {
            // 把栈顶的元素再放一次
            min_stack.push(min_stack.top())
        }
    }

    // 弹出栈顶元素
    this.pop = function(){
        data_stack.pop()
        min_stack.pop()
    }

    // 返回栈的最小值
    this.min = function(){
        return min_stack.top()
    }
}

minstack = new MinStack()
minstack.push(3)
minstack.push(6)
minstack.push(2)
minstack.push(8)
console.log(minstack.min());