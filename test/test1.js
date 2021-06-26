
function convertToBinary(num) {
  let arr = binary(num);
  let count = 8;
  let result = '';
  while (arr.length < count) {
    arr.push(0);
  }
  while (arr.length > 0) {
    result += arr.pop()
  }
  console.log(result)
}
let arr = [];
function binary(num) {
  if (num > 0) {
    const left = num % 2;
    arr.push(left);
    let numAfter = left === 0 ? (num / 2) : ((num - 1) / 2);
    binary(numAfter)
  }
  return arr;
}

convertToBinary(65)


