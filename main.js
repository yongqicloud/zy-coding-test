const { getHash, getFiveLengthS } = require('./utils/index');
// 通行条件
const SECRET_KEY = '00000';
// 1号盒子的上一个hash值
const DEFAULT_HASH = '0';
// 每个盒子的状态
const boxMap = {};
// 神秘数字数组
const resultList = [];
// 神秘数字最大值
let password = 1;

for (let index = 1; index <= 10; index ++) {
  // 上一个盒子的hash
  let preHash;

  if (index === 1) {
    preHash = DEFAULT_HASH;
  }else {
    preHash = String(boxMap[index - 1].hash);
  }

  console.log(`------准备打开，第 ${index} 个盒子------`);
  while(true) {
    // 待hash的字符串
    // const str = String(index) + preHash+ String(password);
    const str = `${index}${preHash}${password}`;
    const currentHash = getHash(str);
    // 截取hash前五位的字符串
    const res = getFiveLengthS(currentHash);
    // 判断密钥是否可行
    if (res === SECRET_KEY) {
      console.log('password', password);
      console.log('index', index);
      console.log('currentHash', currentHash);
      boxMap[index] = {
        hash: currentHash,
        password,
        index,
      };
      resultList.push(password);
      break;
    }
    password ++;
    // console.log('flag', );
  }
  console.log(`------结束打开，第 ${index} 个盒子------`);
}
console.log('----end----', boxMap);
console.log('----结果----', resultList.toString());

