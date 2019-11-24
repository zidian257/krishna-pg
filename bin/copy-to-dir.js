const { copy, pathExists, ensureDir } = require("fs-extra");
const path = require("path");

const copyToAsync = async dir => {
  // bin 源码所在的路径 用 __dirname 表示
  const source = path.resolve(__dirname, "../template");
  // 当前调用的地址
  const target = path.resolve(`./${dir}`);
  console.log("source:", source);
  console.log("target:", target);
  const exists = await pathExists(target);
  console.log("exists:", exists);

  const filter = path => path.indexOf("node_modules") === -1;

  if (exists) {
    throw new Error("Path exists! Please change another dir.");
  }
  await ensureDir(target);
  const res = await copy(source, target, { filter });
};

module.exports = copyToAsync;
