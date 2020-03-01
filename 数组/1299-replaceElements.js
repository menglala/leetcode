/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     const newArr = arr.slice(i + 1)
//     const maxNum = Math.max(...newArr)
//     arr[i] = maxNum
//   }
//   arr[arr.length - 1] = -1

//   return arr
// }

// 第二种
var replaceElements = function(arr) {
  let len = arr.length
  let max = arr[len - 1]
  arr[len - 1] = -1

  for (let i = len - 2; i >= 0; i--) {
    let current = arr[i]
    arr[i] = max
    max = Math.max(max, current)
  }

  return arr
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
