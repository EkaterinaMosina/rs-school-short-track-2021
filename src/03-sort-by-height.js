/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const subArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      subArr.push(i);
    }
  }
  const arr2 = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let j = 0; j < subArr.length; j++) {
    arr2.splice(subArr[j], 0, -1);
  }
  return arr2;
}

module.exports = sortByHeight;
