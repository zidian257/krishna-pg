const { copy, pathExists, ensureDir } = require("fs-extra");
const path = require("path");

const copyToAsync = async (
  target,
  // bin 源码所在的路径 用 __dirname 表示
  source = path.resolve(__dirname, "../template")
) => {
  console.log("source:", source);
  console.log("target:", target);
  const exists = await pathExists(target);
  console.log("exists:", exists);

  if (exists) {
    throw new Error("Path exists! Please change another dir.");
  }
  await ensureDir(target);
  const res = await copy(source, target);
};

module.exports = copyToAsync;
