/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let minTime = 0
  for (let i = 0; i < points.length - 1; i++) {
    let disX = Math.abs(points[i + 1][0] - points[i][0])
    let disY = Math.abs(points[i + 1][1] - points[i][1])
    minTime += disX > disY ? disX : disY
  }
  
  return minTime
}

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
  ])
)

console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]))

