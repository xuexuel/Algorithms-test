/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 16:06:53
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 17:02:21
 */


// 存储数据
var value = 0;
value = value | 1 << 3;
value = value | 1 << 9;
value = value | 1 << 19;
value = value | 1 << 20;
// console.log(value);


function BitMap(size) {
    var bit_arr = new Array(size);
    // 全部设置为初始值
    for (var i = 0; i < bit_arr.length; i++) {
        bit_arr[i] = 0;
    }
    this.addMember = function (member) {
        // 决定在数组中的索引
        var arr_index = Math.floor(member / 32);
        // 决定在整数的32个bit位的哪⼀位上
        var bit_index = member % 32;
        // 将该位设置为1 
        bit_arr[arr_index] = bit_arr[arr_index] | 1 << bit_index;
    };
    this.isExist = function (member) {
        var arr_index = Math.floor(member / 32);
        var bit_index = member % 32;
        var value = bit_arr[arr_index] & 1 << bit_index;
        if (value != 0) {
            return true;
        }
        return false;
    };
}
var bit_map = new BitMap(4);
var arr_map = [0, 3, 5, 6, 9, 34, 23, 78, 99];
for (var i = 0; i < arr_map.length; i++) {
    bit_map.addMember(arr_map[i]);
}
// console.log(bit_map.isExist(3));
// console.log(bit_map.isExist(7));
// console.log(bit_map.isExist(78));


exports.BitMap = BitMap