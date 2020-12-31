// 加密模块
const crypto = require('crypto');

/**
 * 获取字符串的hash值
 * @param {String} str 
 */
function getHash(str){
  if (!str || typeof str !== 'string') {
    throw new Error('参数必须为字符串');
  }
  const hash = crypto.createHash('sha256');
  const res  =  hash.update('要创建哈希摘要的数据');
  return res.digest('hex');
}

module.exports = {
  getHash
};