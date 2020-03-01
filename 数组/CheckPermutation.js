//  面试题01.02. 判定是否互为字符重排
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  let newS1 = s1.split('').sort().join('');
  let newS2 = s2.split('').sort().join('');

  return newS1 === newS2
};

console.log(CheckPermutation( 'abc', 'bca'))
console.log(CheckPermutation( 'abc', 'bad'))
