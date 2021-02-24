/*
 * @Date: 2021-02-22 15:40:06
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-02-24 17:12:08
 * @description:
 */

const download = require('download-git-repo')
const path = require('path')

module.exports = function (git, des) {
  return new Promise(function (resolve, reject) {
    // 这里可以根据具体的模板地址设置下载的url，注意，如果是git，url后面的branch不能忽略
    download(git,
      des, { clone: true }, (err) => {
        if (err) {
          reject(err)
        } else {
          // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
          resolve(des)
        }
      })
  })
}