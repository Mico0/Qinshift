import chalk from "chalk";

console.log(chalk.yellow.underline("\n Something in color \n"));

//! Functions to be exported and used in index.js

export function printGreen(text) {
  console.log(chalk.green(text));
}

export function printYellow(text) {
  console.log(chalk.yellow(text));
}

export function printRed(text) {
  console.log(chalk.red(text));
}

export default {
  printGreen,
  printYellow,
  printRed,
};
