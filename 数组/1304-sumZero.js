/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  var result = []
   
  var sum = 0
  for (let i = 1; i < n; i++) {
    sum += i;
    result.push(i)
  }
  result.push(-sum)

  return result
}

console.log(sumZero(5));
console.log(sumZero(3));