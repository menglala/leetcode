/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  function calcuEveryNum(num, action) {
    if (num < 10) {
      return num
    }

    if (action === 'add') {
      return (num % 10) + calcuEveryNum(parseInt(num / 10), action)
    } else if (action === 'multiply') {
      return (num % 10) * calcuEveryNum(parseInt(num / 10), action)
    }
  }

  return calcuEveryNum(n, 'multiply') - calcuEveryNum(n, 'add')
}

var subtractProductAndSum2 = function(n) {
  let multi = 1
  let sum = 0

  while (n > 0) {
    var currentNum = n % 10
    sum += currentNum
    multi = multi * currentNum
    n = parseInt(n / 10)
  }

  return multi - sum
}

console.log(subtractProductAndSum(234))
