/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-17 19:41:12
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-19 16:34:30
 * @FilePath: \vue-martd:\Algorithms\Algorithms\test_stack.js
 */

// 引入Stack方法
Stack = require('./my_stack')

// 下面的字符串中包含小括号，
// 请编写一个函数判断字符串中的括号是否成对出现
// 判断括号是否合法
function is_legal_brackets(str) {
  let stack = new Stack.Stack()
  for (let i = 0; i < str.length; i++) {
    let item = str[i]
    // 遇到左括号入栈
    if (item === '(') {
      stack.push(item)
    } else if (item === ')') {
      // 遇到右括号，判断栈是否为空
      if (stack.isEmpty()) {
        return false
      } else {
        // 弹出左括号
        stack.pop()
      }
    }
  }
  // 如果栈为空，说明字符串括号合法
  return stack.isEmpty()
}

console.log(is_legal_brackets('sdf(ds(ew(we)rw)rwqq)qwewe'));  // 合法
console.log(is_legal_brackets('(sd(qwqw)sd(sd))'));  // 合法
console.log(is_legal_brackets('()()sd()(sd()fw))('));   // 不合法






