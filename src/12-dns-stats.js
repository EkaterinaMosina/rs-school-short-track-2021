/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  if (domains.length === 0) return result;

  domains.sort((a, b) => b.length - a.length);
  const arr = domains[0].split('.');

  let str;
  let resStr = '';
  let count = 0;

  for (let k = 1; k < arr.length + 1; k++) {
    str = arr[arr.length - k];
    resStr += `.${arr[arr.length - k]}`;
    for (let i = 0; i < domains.length; i++) {
      if (domains[i].includes(str)) {
        count += 1;
      }
    }
    result[resStr] = count;
    count = 0;
  }

  return result;
}

module.exports = getDNSStats;
