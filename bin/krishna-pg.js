#!/usr/bin/env node
const { prompt } = require("inquirer");
const copyToAsync = require("./copy-to-dir");

prompt([
  {
    type: "input",
    message: "dir-to-project ?",
    name: "dir",
    default: "my-playground"
  }
]).then(answers => {
  // Use user feedback for... whatever!!
  console.log('answers:', answers)
  return copyToAsync(answers.dir);
}).catch(console.log);
