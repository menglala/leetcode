/*
 *给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
 *假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个*单词。
 *注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let charsMap = new Map()
  let result = 0
  // 遍历字符表 存入一个字符表的哈希表
  for (let char of chars) {
    charsMap.set(char, charsMap.has(char) ? charsMap.get(char) + 1 : 1)
  }
  for (let word of words) {
    let wordMap = new Map()

    // 遍历所有单词 将字母存入单词哈希表
    for (let char of word) {
      wordMap.set(char, wordMap.has(char) ? wordMap.get(char) + 1 : 1)
    }

    let enough = true
    for (let char of word) {
      if (wordMap.get(char) > charsMap.get(char) || !charsMap.get(char)) {
        enough = false
        break
      }
    }
    if (enough) {
      result += word.length
    }
  }
  return result
}
console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
