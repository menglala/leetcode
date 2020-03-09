/*
 *给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  A.forEach((item, index) => {
    if (item % 2 === 0) {
      const target = A.splice(index, 1)[0]
      A.unshift(target)
    }
  })

  return A
}
var sortArrayByParity2 = function(A) {
  return A.filter(item => item % 2 === 0).concat(
    A.filter(item => item % 2 !== 0)
  )
}

console.log(sortArrayByParity([3, 1, 2, 4]))
console.log(sortArrayByParity2([3, 1, 2, 4]))
