// 拿到 CLI arguments 并且根据 arguments 生成新的项目
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const { _ } = argv;

if (Array.isArray(_) && _.length > 0) {

}
