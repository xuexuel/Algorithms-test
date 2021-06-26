/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 19:57:58
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 19:59:04
 */
// 可以使用最小堆进行排序，使用待排序数组初始化最小堆，然后逐个删除堆顶元素，由于堆顶元素始终最小，所以可以得到一个有序的数组
const MinHeap = require('./index')

let arr = [53, 17, 78, 9, 45, 65, 87, 23];
let min_heap = new MinHeap(8);
for(let i = 0; i<arr.length; i++){
    min_heap.insert(arr[i]);
}
let sort_arr = []
for(let i =0;i<arr.length;i++){
    sort_arr.push(min_heap.remove_min());
}
console.log(sort_arr);