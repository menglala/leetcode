/*
 *给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。
 *幸运数是指矩阵中满足同时下列两个条件的元素：
 *在同一行的所有元素中最小
 *在同一列的所有元素中最大
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  var rowMinArr = []
  var colMaxArr = []

  for (let i = 0; i < matrix.length; i++) {
    rowMinArr.push(Math.min(...matrix[i]))
  }

  for (let i = 0; i < matrix[0].length; i++) {
    var colArr = []
    for (let j = 0; j < matrix.length; j++) {
      colArr.push(matrix[j][i])
    }

    colMaxArr.push(Math.max(...colArr))
  }
  var result = rowMinArr.filter(item => colMaxArr.includes(item))

  return result
}

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
  ])
)
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12]
  ])
)
console.log(
  luckyNumbers([
    [7, 8],
    [1, 2]
  ])
)
