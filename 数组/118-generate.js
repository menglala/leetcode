/**
 * 118.杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = []

  for (let i = 0; i < numRows; i++) {
    let currentRow = []
    for (let j = 0; j <= i; j++) {
      let currentCol = 1
      if (j > 0 && j < i) {
        const left = result[i - 1][j - 1] || 0
        const right = result[i - 1][j] || 0
        currentCol = left + right
      }
      currentRow.push(currentCol)
    }

    result.push(currentRow)
  }

  return result
}

console.log(generate(5))
