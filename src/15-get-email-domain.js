/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.indexOf('@') + 1;
  let result = email.substring(index);
  if (result.includes('@')) {
    index = result.indexOf('@') + 1;
    result = result.substring(index);
  }
  return result;
}

module.exports = getEmailDomain;
