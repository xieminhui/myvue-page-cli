/*
 * @Date: 2021-02-24 09:41:27
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-02-24 09:41:27
 * @description: 
 */
const exec = require('child_process').execSync

module.exports = () => {
  let name
  let email

  try {
    name = exec('git config --get user.name')
    email = exec('git config --get user.email')
  } catch (e) { }

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && (' <' + email.toString().trim() + '>')
  return (name || '') + (email || '')
}
