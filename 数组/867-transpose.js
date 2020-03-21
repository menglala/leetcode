/*
 *给定一个矩阵 A， 返回 A 的转置矩阵。 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  var result = []

  for (let i = 0; i < A[0].length; i++) {
    var currentRow = []
    for (let j = 0; j < A.length; j++) {
      currentRow.push(A[j][i])
    }
    result.push(currentRow)
  }

  return result;
}

console.log(
  transpose([[1,2,3],[4,5,6]])
)

