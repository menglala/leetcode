/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  A = A.map(item => {
    return (item = item.map(i => i = i ^ 1).reverse())
  })

  // for (let i = 0; i < A.length; i++) {
  //   A[i] = A[i].reverse()

  //   for (let j = 0; j < A[i].length; j++) {
  //     A[i][j] = Number(!A[i][j])
  //   }
  // }

  return A
}

console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
  ])
)
