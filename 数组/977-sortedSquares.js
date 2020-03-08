/**
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const sqrtA = A.map(n => Math.pow(n, 2)).sort((a, b) => a - b)
  return sqrtA
}
