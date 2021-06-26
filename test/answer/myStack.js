class Stack {
  constructor() {
    this.items = []
  }
  push(item) { this.items.push(item) }
  pop() {
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
}


// todo 1、请编写一个函数判断字符串中的括号是否成对出现,判断括号是否合法
function is_legal_brackets(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (s === '(') {
      stack.push(s);
    } else if (s === ')') {
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.isEmpty();
}

// console.log(is_legal_brackets('sdf(ds(ew(we)rw)rwqq)qwewe'));  // 合法
// console.log(is_legal_brackets('(sd(qwqw)sd(sd))'));  // 合法
// console.log(is_legal_brackets('()()sd()(sd()fw))('));   // 不合法

// todo 2、逆波兰表达式，也叫后缀表达式(数字在前，运算符在后) ，
// todo 他将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式，
// todo 例如(a + b) * (c + d)转换为ab + cd +*。
function calc_exp(exp) {
  let stack = new Stack();  // 数字
  for (let i = 0; i < exp.length; i++) {
    const arr = ['+', '-', '*', '/'];
    const item = exp[i];
    if (arr.includes(item)) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const exp = num2 + item + num1;
      const cal = parseInt(eval(exp));
      stack.push(cal.toString());
    } else {
      stack.push(item);
    }
  }
  return stack.pop();
}

var exp1 = ['4', '13', '5', '/', '+'];   // 6
var exp2 = ['10', '6', '9', '3', '+', '-11', '+', '/', '*', '17', '+', '5', '+']; //82 
// console.log(calc_exp(exp1));
// console.log(calc_exp(exp2));



// todo 实现一个栈，除了push，pop方法以外，
// todo 提供一个min方法，返回栈里最小的元素，且时间复杂度为o(1)

class MinStack {
  constructor() {
    this.data_stack = new Stack();
    this.min_stack = new Stack();
  }
  push(item) {
    this.data_stack.push(item);
    if (this.min_stack.isEmpty() || item < this.min_stack.top()) {
      this.min_stack.push(item);
    } else {
      this.min_stack.push(this.min_stack.top());
    }
  }

  pop() {
    const item = this.data_stack.pop();
    this.min_stack.pop();
    return item;
  }

  min() {
    return this.min_stack.top();
  }
}

minstack = new MinStack();
minstack.push(3)
minstack.push(6)
minstack.push(2)
minstack.push(8)
// console.log(minstack.min());

// todo 使用栈，完成中序表达式转后续表达式

let priority_map = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

function infix_exp(exp) {
  let stack = new Stack();
  let postfix_list = [];
  const arr = ['+', '-', '*', '/'];
  for (let i = 0; i < exp.length; i++) {
    const item = exp[i];
    if (item === '(') {
      stack.push(item);
    } else if (!isNaN(item)) {
      postfix_list.push(item);
    } else if (item === ')') {
      while (stack.top() !== '(') {
        postfix_list.push(stack.pop())
      }
      stack.pop();
    } else {
      while (!stack.isEmpty() && arr.includes(stack.top()) && priority_map[stack.top()] >= priority_map[item]) {
        postfix_list.push(stack.pop());
      }
      stack.push(item);
    }
  }
  while (!stack.isEmpty()) {
    postfix_list.push(stack.pop())
  }
  return postfix_list;
}

let infix1 = ['12', '+', '3']  // [ '12', '3', '+' ]
let infix2 = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '-', '3', ')', '+', '(', '9', '+', '8', ')']  // [ '1', '4', '5', '+', '3', '+', '+', '3', '-', '9', '8', '+', '+' ]

// console.log(infix_exp(infix1));
// console.log(infix_exp(infix2));

// todo 两个栈实现一个队列
class StackQueue {
  constructor() {
    this.stack_1 = new Stack();
    this.stack_2 = new Stack();
  }
  // 总是把数据放入到stack_1中
  enqueue(item) {
    this.stack_1.push(item);
  };
  // 获得队列的头
  head() {
    // 两个栈都是空的
    if (this.stack_2.isEmpty() && this.stack_1.isEmpty()) {
      return null;
    }
    // 如果stack_2 是空的,那么stack_1一定不为空,把stack_1中的元素倒入stack_2
    if (this.stack_2.isEmpty()) {
      while (!this.stack_1.isEmpty()) {
        this.stack_2.push(this.stack_1.pop());
      }
    }
    return this.stack_2.top();
  };
  // 出队列
  dequeue() {
    // 两个栈都是空的
    if (this.stack_2.isEmpty() && this.stack_1.isEmpty()) {
      return null;
    }
    // 如果stack_2 是空的,那么stack_1一定不为空,把stack_1中的元素倒入stack_2
    if (this.stack_2.isEmpty()) {
      while (!this.stack_1.isEmpty()) {
        this.stack_2.push(this.stack_1.pop());
      }
    }
    return this.stack_2.pop();
  };
};


var sq = new StackQueue();
sq.enqueue(1);
sq.enqueue(4);
sq.enqueue(8);
console.log(sq.head());
sq.dequeue();
sq.enqueue(9);
console.log(sq.head());
sq.dequeue();
console.log(sq.head());
console.log(sq.dequeue());
console.log(sq.dequeue());