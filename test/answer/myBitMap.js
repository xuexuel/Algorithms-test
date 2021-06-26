class BitMap {
  constructor(size) {
    this.bit_arr = new Array(size);
    for (let i = 0; i < this.bit_arr.length; i++) {
      this.bit_arr[i] = 0;
    }
  }
  addMember(member) {
    let arr_index = Math.floor(member / 32);
    let bit_index = member % 32;
    this.bit_arr[arr_index] = this.bit_arr[arr_index] | 1 << bit_index;
  };
  isExist(member) {
    let arr_index = Math.floor(member / 32);
    let bit_index = member % 32;
    let value = this.bit_arr[arr_index] & 1 << bit_index;
    if (value != 0) {
      return true;
    }
    return false;
  };
}
let bit_map = new BitMap(4);
let arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];
for (let i = 0; i < arr.length; i++) {
  bit_map.addMember(arr[i]);
}
console.log(bit_map.isExist(3));   // true
console.log(bit_map.isExist(7));    // false
console.log(bit_map.isExist(78));   // true

// 大数据排序
let arr = [0, 6, 88, 7, 73, 34, 10, 99, 22];
let sort_arr = [];
let bit_map = new BitMap(4);
for (let i = 0; i < arr.length; i++) {
  bit_map.addMember(arr[i]);
}
for (let i = 0; i <= 99; i++) {
  if (bit_map.isExist(i)) {
    sort_arr.push(i);
  }
}
console.log(sort_arr);   // [ 0, 6, 7, 10, 22, 34, 73, 88, 99 ]

// todo  两个集合取交集:两个数组，内容分别为[1, 4, 6, 8, 9, 10, 15], [6, 14, 9, 2, 0, 7]，请用BitMap计算他们的交集
let arr1 = [1, 4, 6, 8, 9, 10, 15];
let arr2 = [6, 14, 9, 2, 0, 7];
let intersection_arr = [];
let bit_map = new BitMap();
for (let i = 0; i < arr1.length; i++) {
  bit_map.addMember(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  if (bit_map.isExist(arr2[i])) {
    intersection_arr.push(arr2[i]);
  }
}
// console.log(intersection_arr);

// todo 支持负数:课程里所讲的BitMap只能存储大于等于0的整数，请你改造BitMap类，不论正数还是负数，都可以存储并判断是否存在
class SuperBitMap {
  constructor(size) {
    this.positive_bit_map = new BitMap(size);
    this.negative_bit_map = new BitMap(size);
  }
  addMember(member) {
    if (member >= 0) {
      this.positive_bit_map.addMember(member);
    } else {
      this.negative_bit_map.addMember(member);
    }
  };
  isExist(member) {
    if (member >= 0) {
      return this.positive_bit_map.isExist(member);
    } else {
      return this.negative_bit_map.isExist(member);
    }
  };
}
let arr = [1, 3, -6, -8, 8, 9];
let super_bm = new SuperBitMap();
for (let i = 0; i < arr.length; i++) {
  super_bm.addMember(arr[i]);
}
console.log(super_bm.isExist(-8));
console.log(super_bm.isExist(8));
console.log(super_bm.isExist(9));
console.log(super_bm.isExist(-6));
console.log(super_bm.isExist(-5));