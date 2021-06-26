"use strict";

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 19:27:34
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 19:27:41
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\堆\insert.js
 */
var shif_up = function shif_up(start) {
  var child_index = start; // 当前节点是叶节点

  var parent_index = Math.floor((child_index - 1) / 2); // 找到父节点

  while (child_index > 0) {
    // 父节点更小,就不用调整了
    if (heap[parent_index] <= heap[child_index]) {
      break;
    } else {
      // 父节点和子节点的值互换
      var tmp = heap[child_index];
      heap[child_index] = heap[parent_index];
      heap[parent_index] = tmp;
      child_index = parent_index;
      parent_index = Math.floor((parent_index - 1) / 2);
    }
  }
};

(void 0).insert = function (item) {
  // 插入一个新的元素
  // 堆满了,不能再放元素
  if (curr_size == max_size) {
    return false;
  }

  heap[curr_size] = item;
  shif_up(curr_size);
  curr_size++;
  return true;
};