/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let arr = []
  let result = 0

  for (let i = 0; i < n; i++) {
    const rowArr = new Array(m).fill(0)

    arr.push(rowArr)
  }

  for (let j = 0; j < indices.length; j++) {
    const currentRow = arr[indices[j][0]]
    const currentCol = indices[j][1]

    for (let index = 0; index < currentRow.length; index++) {
      currentRow[index] += 1
    }

    arr.forEach(a => {
      a[currentCol]++
    })
  }

  for (let row = 0; row < arr.length; row++) {
    arr[row].forEach(item => {
      if (item % 2 !== 0) {
        result++
      }
    })
  }

  return result
}

var oddCells2 = function(n, m, indices) {
  var rows = new Array(n).fill(0)
  var cols = new Array(m).fill(0)

  for (let i = 0; i < indices.length; i++) {
    const row = indices[i][0]
    const col = indices[i][1]

    rows[row]++
    cols[col]++
  }

  let result = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((rows[i] + cols[j]) % 2 !== 0) {
        result++
      }
    }
  }

  return result
}

console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0]
  ])
)
console.log(
  oddCells2(2, 3, [
    [0, 1],
    [1,1]
  ])
)

