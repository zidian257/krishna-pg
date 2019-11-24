#!/usr/bin/env node
const { prompt } = require("inquirer");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));
const copyToAsync = require("./copy-to-dir");
const newScene = require("./new-scene");

const nosupp = () => console.warn("no support for this cmd.");

const { _ } = argv;

if (Array.isArray(_)) {
  if (_.length > 0) {
    if (_[0] === "new") {
      const [n, ...scenes] = _;

      if (scenes.length === 1) {
        const [name] = scenes;
        newScene({ name });
      } else {
        console.log("please specify new scene.");
        return;
      }
    } else nosupp();
  } else if (_.length === 0) {
    prompt([
      {
        type: "input",
        message: "dir-to-project ?",
        name: "dir",
        default: "my-playground"
      }
    ])
      .then(answers => {
        const target = path.resolve(`./${answers.dir}`);
        return copyToAsync(target);
      })
      .catch(console.log);
  } else {
    nosupp();
  }
}
