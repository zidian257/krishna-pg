// 根据名字生成新的目录 并且 touch index.js touch index.test.js，更改 src/index.js 的打印指向，
const path = require("path");
const { outputFile } = require("fs-extra");
const copyToAsync = require("./copy-to-dir");

const importStr = dir =>
  `require("./${dir}");/n console.log('------------------------------------------------------------')`;

const newScene = ({ name }) => {
  const target = path.resolve("./src/" + name);
  const indexPath = path.resolve("./src/index.js");
  const source = path.resolve(__dirname, "../scene-tpl");

  copyToAsync(target, source)
    .then(() => outputFile(indexPath, importStr(name)))
    .catch(console.log);
};

module.exports = newScene;
