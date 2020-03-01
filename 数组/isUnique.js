/**
 * 面试题0101  判断字符串所有字符是否唯一
 * @param {string} astr
 * @return {boolean}
 */

// 第一种：转换为数组的方法
// var isUnique = function(astr) {
//   const strArr = astr.split('');
//   const uniqueArr = Array.from(new Set(strArr))

//   return uniqueArr.length === strArr.length;
// };

// 第二种不转换数据类型的方法
var isUnique = function(astr) {
  for (let i = 0; i < astr.length; i++) {
    const current = astr[i]
    if (astr.indexOf(current, i + 1) > 0) return false
  }

   return true
}