const fs = require('fs')
const archiver = require('archiver');

let archive = archiver('zip', {
  zlib: { level: 9 } // 设置压缩级别
});
// 创建文件输出流
if (!fs.existsSync('./web')) {
  fs.mkdirSync('./web');
}
let output = fs.createWriteStream('./web/build.zip');

archive.pipe(output);
archive.directory('build/', false);
archive.finalize()
