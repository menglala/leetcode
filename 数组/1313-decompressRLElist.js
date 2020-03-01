/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  var result = []
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      const currentArr = new Array(nums[i]).fill(nums[i+1])
      result = result.concat(currentArr);
    }
  }

  return result;
}

var decompressRLElist2 = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    result = [...result, ...new Array(nums[2*i]).fill(nums[2 * i + 1])]
  }

  return result;
}
console.log(decompressRLElist([1,2,3,4]));
console.log(decompressRLElist2([1,2,3,4]));
