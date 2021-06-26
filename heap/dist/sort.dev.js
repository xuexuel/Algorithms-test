"use strict";

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 19:57:58
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 19:59:04
 */
// 可以使用最小堆进行排序，使用待排序数组初始化最小堆，然后逐个删除堆顶元素，由于堆顶元素始终最小，所以可以得到一个有序的数组
var MinHeap = require('./index');

var arr = [53, 17, 78, 9, 45, 65, 87, 23];
var min_heap = new MinHeap(8);

for (var i = 0; i < arr.length; i++) {
  min_heap.insert(arr[i]);
}

var sort_arr = [];

for (var _i = 0; _i < arr.length; _i++) {
  sort_arr.push(min_heap.remove_min());
}

console.log(sort_arr);