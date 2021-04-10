/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let count = 0;
  let k = 0;
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      if (arr[i] !== arr[i + 1]) {
        count = i + 1 - k;
        k = i + 1;
        if (count > 1) {
          result.push(count);
        }
        result.push(arr[i]);
      }
    } else if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    } else {
      result.push(i + 1 - k);
      result.push(arr[i]);
    }
  }
  return result.join('');
}

module.exports = encodeLine;
