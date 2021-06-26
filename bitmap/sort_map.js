/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 17:00:45
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 17:01:50
 * @FilePath: \vue-martd:\a_study\DEV\kaikeba\Algorithms\Algorithms\大数据\sort_map.js
 */
BitMap = require('./bitMap')

var arr = [0, 6, 88, 7, 73, 34, 10, 99, 22];
var sort_arr = [];
var bit_map = new BitMap.BitMap(4);
for (var i = 0; i < arr.length; i++) {
    bit_map.addMember(arr[i]);
}
for (var i = 0; i <= 99; i++) {
    if (bit_map.isExist(i)) {
        sort_arr.push(i);
    }
}
console.log(sort_arr);