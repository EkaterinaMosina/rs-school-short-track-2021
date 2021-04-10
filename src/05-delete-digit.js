/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  let arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    result.push(Number(arr.join('')));
    arr = n.toString().split('');
  }
  result.sort((a, b) => b - a);
  return result[0];
}

module.exports = deleteDigit;
