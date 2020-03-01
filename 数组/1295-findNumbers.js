/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
       const length = nums[i].toString().length;

       if(length % 2 === 0){
         result ++;
       }
    }

    return result;
};
