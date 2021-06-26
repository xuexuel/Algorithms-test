/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:54:38
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:55:07
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\栈\calc_exp.js
 */

// 引入Stack方法
Stack = require('./my_stack')
 // 逆波兰表达式，也叫后缀表达式(数字在前，运算符在后)，
// 他将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式
// 例如(a+b)*(c+d)转换为ab+cd+*。

// 计算后缀表达式
function calc_exp(exp) {
    let stack = new Stack.Stack()
    let arr = ['+', '-', '*', '/']
    for (let i = 0; i < exp.length; i++) {
        let item = exp[i]
        if (!arr.includes(item)) {
            stack.enqueue(item)
        } else {
            let num1 = stack.dequeue();
            let num2 = stack.dequeue()
            let exp_str = num2 + item + num1
            let cal = parseInt(eval(exp_str))
            stack.enqueue(cal.toString())
        }
    }
    return stack.dequeue()
}

let exp1 = ['4', '13', '5', '/', '+'];   // 6
let exp2 = ['10', '6', '9', '3', '+', '-11', '+', '/', '*', '17', '+', '5', '+']
console.log(calc_exp(exp1));
console.log(calc_exp(exp2));