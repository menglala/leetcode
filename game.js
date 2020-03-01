// 猜数字

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
  if (guess.length !== 3 || answer.length !== 3) {
    return console.log('请输入正确格式的数组')
  }

  const guessValited = guess.every(item => item >= 1 && item <= 3)
  const answerValited = answer.every(item => item >= 1 && item <= 3)

  if (!guessValited || !answerValited) {
    return console.log('数字范围为1~3')
  }

  console.log(`guess = ${guess}, answer = ${answer}`)

  const answerList = guess.map((item, index) => {
    return item === answer[index]
  })

  const correctList = answerList.filter(item => item)
  const result = correctList.length

  var str = '小A第'
  answerList.forEach((item, index) => {
    if (item) {
      str += `${index + 1},`
    }
  })
  str += str + '次猜对了'
  console.log(`解释:${str}`)

  return result;
}