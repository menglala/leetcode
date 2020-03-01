/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  var result = 0

  for (let i = 0; i < board.length; i++) {
    var Ry = board[i].indexOf('R')

    if (Ry !== -1) {
      var Rx = i

      // left
      for (let l = Ry - 1; l >= 0; l--) {
        if (board[Rx][l] !== '.') {
          if (board[Rx][l] === 'p') {
            result++
          }

          break
        }
      }

      // right
      for (let r = Ry + 1; r < 8; r++) {
        if (board[Rx][r] !== '.') {
          if (board[Rx][r] === 'p') {
            result++
          }

          break
        }
      }

      //top
      for (let t = Rx - 1; t >= 0; t--) {
        if (board[t][Ry] !== '.') {
          if (board[t][Ry] === 'p') {
            result++
          }

          break
        }
      }

      // bottom
      for (let d = Rx + 1; d < 8; d++) {
        if (board[d][Ry] !== '.') {
          if (board[d][Ry] === 'p') {
            result++
          }

          break
        }
      }
    }
  }

  return result
}

console.log(
  numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))

console.log(
  numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ])
)
