class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  head() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}


// todo 1、有一个数组a[100]存放0--99;要求每隔两个数删掉一个数，到末尾时循环至开头继续进行，求最后一个被删掉的数。

function del_ring() {
  let queue = new Queue();
  let temp = 0;
  for (let i = 0; i < 100; i++) {
    queue.enqueue(i);
  }
  queue.dequeue();
  while (queue.size() !== 1) {
    const item = queue.dequeue();
    if (temp === 2) {
      temp = 0;
      // console.log(item);
    } else {
      temp++;
      queue.enqueue(item);
    }

  }
  return queue.dequeue();
}
// console.log(del_ring());

// todo 2、使用队列计算斐波那契数列的第n项
// todo 斐波那契数列的前两项是 1 1 ，此后的每一项都是该项前面两项之和，即f(n) = f(n-1) + f(n-2)。
function fibonacci(n) {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(1);
  let index = 0;
  while (n - 2 > index) {
    const item = queue.dequeue();
    const next = item + queue.head();
    queue.enqueue(next);
    index++;
  }
  queue.dequeue();
  return queue.head();
}
// console.log(fibonacci(5));  // 5
// console.log(fibonacci(10));  // 55

//todo 用两个队列实现一个栈

class QueueStack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
    this.queue_single = this.queue1;
    this.queue_item = this.queue2;
  }
  push(item) {
    // 如果single里面有值，要把值转入item中
    if (!this.queue_single.isEmpty()) {
      this.queue_item.enqueue(this.queue_single.dequeue());
    }
    this.queue_single.enqueue(item);
  }
  pop() {
    let item = this.queue_single.dequeue();
    if (!this.queue2.isEmpty() && this.queue1.isEmpty()) {
      this.queue_single = this.queue2;
      this.queue_item = this.queue1;
    } else if (!this.queue1.isEmpty() && this.queue2.isEmpty()) {
      this.queue_single = this.queue1;
      this.queue_item = this.queue2;
    }
    while (this.queue_single.size() > 1) {
      this.queue_item.enqueue(this.queue_single.dequeue());
    }
    return item;
  }
  top() {
    return this.queue_single.head();
  }

}
// var q_stack = new QueueStack();
// q_stack.push(1);
// q_stack.push(2);
// q_stack.push(4);
// console.log(q_stack.top());   // 栈顶是4
// console.log(q_stack.pop());   // 移除4
// console.log(q_stack.top());   // 栈顶变成2
// console.log(q_stack.pop());   // 移除2
// console.log(q_stack.pop());   // 移除1


// todo 使用队列打印出杨辉三角的前n行，n>=1

function print_yanghui(n) {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(0);
  queue.enqueue(1);
  let index = 1;
  while (n > index) {
    const num1 = queue.dequeue();
    if (num1 === 0) {
      index++;
      queue.enqueue(0);
      queue.enqueue(1);
    } else {
      let cal = num1 + queue.head();
      queue.enqueue(cal);
    }
  }
  let arr = [];
  while (arr.length !== n) {
    arr.push(queue.dequeue());
  }
  return arr;
}


function print_yanghui2(n) {
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
// console.log(print_yanghui(1));
// console.log(print_yanghui(2));
// console.log(print_yanghui(3));
// console.log(print_yanghui(4));
console.log(print_yanghui(5));