var path = require('path');
// console.log('halo path',path)
// 抓目錄
console.log('抓目錄',path.dirname('/xx/yy/zz.js'))
// 路徑合併
console.log('抓路徑',path.join(__dirname,'/xx'))
// 抓檔名
console.log('抓檔名',path.basename('/xx/yy/zz.js'))
// 抓副檔名
console.log('抓副檔名',path.extname('/xx/yy/zz.js'))
// 分析路徑
console.log('halo', path.parse('/xx/yy/zz.js'))