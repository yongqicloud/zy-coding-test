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
  const res = hash.update(str);
  
  return res.digest('hex');
}
function getFiveLengthS(str){
  if (!str || typeof str !== 'string') {
    throw new Error('参数必须为字符串');
  }

  return str.slice(0, 5);
}
module.exports = {
  getHash,
  getFiveLengthS
};