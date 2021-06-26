/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 15:58:51
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 15:59:32
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\链表\my_node.js
 */

function LinkList() {
  // 定义节点
  let Node = function (data) {
    this.data = data
    this.next = null
  }
  let length = 0   // 长度
  var head = null  // 头节点
  var tail = null  // 尾节点

  // 在尾部添加一个节点
  this.append = function (data) {
    // 创建新节点
    let new_node = new Node(data)
    if (head === null) {
      head = new_node
      tail = new_node
    } else {
      tail.next = new_node
      tail = new_node
    }
    length += 1
    return true
  }

  // 打印
  this.print = function () {
    let curr_node = head;
    while (curr_node) {
      console.log(curr_node.data);
      curr_node = curr_node.next
    }
  }

  // 在指定位置插入节点
  this.insert = function (index, data) {
    if (index < 0 || index >= length) {
      return false
    } else if (index == length) {
      return this.append(data)
    } else {
      let new_node = new Node(data)
      if (index == 0) {
        new_node.next = head
        head = new_node
      } else {
        let insert_index = 1
        let curr_node = head
        while (insert_index < index) {
          insert_index += 1
          curr_node = curr_node.next
        }
        // 当循环结束
        let next_node = curr_node.next
        curr_node.next = new_node
        new_node.next = next_node
      }
      length += 1
      return true
    }
  }

  this.remove = function (index) {
    if (index < 0 || index >= length) {
      return false
    } else {
      let del_node = null
      if (index == 0) {
        del_node = head
        head = head.next
      } else {
        let del_index = 0
        let pre_node = null
        let curr_node = head
        while (del_index < index) {
          del_index += 1
          pre_node = curr_node
          curr_node = curr_node.next
        }
        // 当循环结束
        del_node = curr_node
        pre_node.next = curr_node.next

        // 如果被删除的节点是尾节点
        if (curr_node.next === null) {
          tail = pre_node
        }
      }
      length -= 1
      del_node.next = null
      return del_node.data
    }
  }

  // 返回指定位置节点的值
  this.get = function (index) {
    if (index < 0 || index >= length) {
      return false
    }
    let node_index = 0
    let curr_node = head
    while (node_index < index) {
      node_index += 1
      curr_node = curr_node.next
    }
    return curr_node.data
  }

  // 返回指定元素的索引，如果没有返回-1，有多个返回第一个
  this.indexOf = function (data) {
    let index = -1
    let curr_node = head
    while (curr_node) {
      index += 1
      if (curr_node.data === data) {
        return index
      } else {
        curr_node = curr_node.next
      }
    }
    return index
  }

  // 返回链表大小
  this.length = function () {
    return length
  }
  // 删除尾节点
  this.remove_tail = function () {
    return this.remove(length - 1)
  }
  // 删除头节点
  this.remove_head = function () {
    return this.remove(0)
  }
  // 返回链表头节点的值
  this.head = function () {
    return this.get(0)
  }
  // 返回链表尾节点的值
  this.tail = function () {
    return this.get(length - 1)
  }
  // 判断链表是否为空
  this.isEmpty = function () {
    return length == 0
  }
  // 清空链表
  this.clear = function () {
    head = null
    tail = null
    length = 0
  }
}
let reverse_link = new LinkList();
reverse_link.append(1);
reverse_link.append(2);
reverse_link.append(3);
reverse_link.append(4);
reverse_link.append(5);
reverse_link.print();
console.log(reverse_link.remove(2));
reverse_link.print();

exports.LinkList = LinkList