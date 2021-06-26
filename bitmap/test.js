/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 16:58:49
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-20 16:59:13
 */
// 已知有n个整数，这些整数的范围是[0,100]，
// 请你设计一种数据结构，使用数组存储这些数据，
// 并提供两种方法，分别是addMember和isExist。

// 简单实现   时间复杂度为O(n)
function FindClass() {
    var datas = []; //存储数据
    // 加⼊⼀个整数 member
    this.addMember = function (member) {
        datas.push(member)
    };
    // 判断member是否存在
    this.isExist = function (member) {
        return datas.includes(member)
    };
}

// 更快的方法   时间复杂度为O(1)
function FindClass1() {
    var datas = new Array(100);				//存储数据
    //	先都初始化成0
    for (var i = 0; i < datas.length; i++) {
        datas[i] = 0;
    }
    //	加⼊⼀个整数	member
    this.addMember = function (member) {
        datas[member] = 1;
    };
    //	判断member是否存在
    this.isExist = function (member) {
        if (datas[member] == 1) {
            return true;
        }
        return false;
    };
}

var fc = new FindClass();
var arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];
for (var i = 0; i < arr.length; i++) {
    fc.addMember(arr[i]);
}
console.log(fc.isExist(3));     // true
console.log(fc.isExist(7));     // false 
console.log(fc.isExist(78))     // true
