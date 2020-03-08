/**
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const sortNums = nums.sort((a, b) => a - b)

  let sum = 0
  for (let i = 0; i < sortNums.length / 2; i++) {
    sum += Math.min(sortNums[2 * i], sortNums[2 * i + 1])
  }

  return sum
}
var arrayPairSum2 = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((item, index) => index % 2 === 0)
    .reduce((t, i) => t + i)
}
