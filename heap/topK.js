/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 19:54:25
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 19:59:17
 */

// Top K 问题
// 一个非常大的数据集合有n个整数，求集合中最大的K个值。
// 用最小堆来算，非常简单，初始化一个大小为k的最小堆，先放入k个数，这时，堆顶元素最小，集合中剩余的数依次和堆顶元素比较，如果比堆顶元素大，则删除堆顶元素，并放入新的元素，全部比较以后，堆里的元素就是最大的k个值

const MinHeap = require('./index')
let arr = [53, 17, 78, 9, 45, 65, 87, 23];
let min_heap = new MinHeap.MinHeap(3);
for(let i = 0; i<3; i++){
    min_heap.insert(arr[i]);
}
for(let i =3;i<arr.length;i++){
    let item = arr[i];
    if(item > min_heap.get_min()){
        min_heap.remove_min();
        min_heap.insert(item);
    }
}
min_heap.print();  // [ 65, 78, 87 ]