// ?题目：煎饼排序求[9,8,4,1,32,6,5,7]结果，煎饼排序相关内容见乐扣969题

function reverse(arr, n, ind) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    let item = arr[i];
    arr[i] = arr[j];
    arr[j] = item;
    ind[arr[i]] = i;
    ind[arr[j]] = j;
  }
}

var pancakeSort = function (arr) {
  let ind = new Array(arr.length + 1), ret = [];
  for (let i = 0; i < arr.length; i++) ind[arr[i]] = i;
  for (let i = arr.length; i >= 1; i--) {
    // *彩蛋要求，不进行位置判断条件
    // if (ind[i] === i - 1) continue;
    if (ind[i] !== 0) {
      ret.push(ind[i] + 1);
      reverse(arr, ind[i] + 1, ind);
    }
    if (i !== 1) {
      ret.push(i);
      reverse(arr, i, ind);
    }
  }
  return ret;
};

let item = pancakeSort([9, 8, 4, 1, 3, 2, 6, 5, 7]);
console.log(item.join(''));
// *9887565442322
