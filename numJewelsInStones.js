/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var arrJ = Array.from(new Set(J.split('', 50)))
    var arrS = S.split('', 50)

    var commArr = arrS.filter(item => arrJ.includes(item))

    return commArr.length;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))
