/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-17 22:23:21
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:55:44
 * @FilePath: \vue-martd:\Algorithms\Algorithms\栈\infix_stack.js
 */


// 使用栈，完成中序表达式转后续表达式

// 引入Stack方法
Stack = require('./my_stack')

let priority_map = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

function infix_exp(exp) {
  let stack = new Stack.Stack();
  let postfix_list = []
  for (let i = 0; i < exp.length; i++) {
    let item = exp[i];
    //  如果是数字，直接放入postfix_list中
    if (!isNaN(item)) {
      postfix_list.push(item)
    } else if (item === '(') {
      // 如果遇到左括号入栈
      stack.push(item)
    } else if (item === ')') {
      // 如果遇到右括号,把栈顶元素弹出直到遇到右括号
      while (stack.top() !== '(') {
        postfix_list.push(stack.pop())
      }
      stack.pop();   // 左括号出栈
    } else {
      // 遇到运算符，把栈顶的运算符弹出，直到栈顶的运算符优先级小于当前运算符
      while (!stack.isEmpty() && ['+', '-', '*', '/'].includes(stack.top()) && priority_map[stack.top()] >= priority_map[item]) {
        // 把弹出的运算符加入到postfix_list
        postfix_list.push(stack.pop())
      }
      // 当前的运算符入栈
      stack.push(item)
    }
  }
  while (!stack.isEmpty()) {
    postfix_list.push(stack.pop())
  }
  return postfix_list
}




let infix1 = ['12', '+', '3']  // [ '12', '3', '+' ]
let infix2 = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '-', '3', ')', '+', '(', '9', '+', '8', ')']  // [ '1', '4', '5', '+', '3', '+', '+', '3', '-', '9', '8', '+', '+' ]

console.log(infix_exp(infix1));
console.log(infix_exp(infix2));