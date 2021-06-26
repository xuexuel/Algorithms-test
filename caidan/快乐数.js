// ?题目：求【1，100000】内快乐数之和，快乐数相关内容见乐扣202题

var isHappy = function (n) {
  let cnt = 1, res = 0;
  while (cnt <= n) {
    let p = cnt, q = cnt;
    do {
      p = getText(p);
      q = getText(getText(q))
    } while (p !== q && q != 1)
    if (q === 1) {
      res += cnt;
    }
    cnt++;
  }
  return res;
};

function getText(n) {
  let num = 0;
  while (n > 0) {
    num += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return num;
}

let add = isHappy(100000)
console.log(add);
// *692159746
