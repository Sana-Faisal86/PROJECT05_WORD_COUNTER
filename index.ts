#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display a Colorful to wellcome message:

console.log(chalk.blueBright("\n\t\t", "*".repeat(50)));
console.log(
  chalk.black.bgGray(
    "\t\t====>",
    chalk.black.bgGreen(" WELLCOME TO OUR WORD COUNTER PROJECT "),
    "<===="
  )
);
console.log(chalk.blueBright("\t\t", "*".repeat(50)));

// Prompt the user to enter the sentence;
let answer = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: chalk.red.bgWhite("\n\t*** Enter a sentence ===> "),
  },
]);
// Triming the sentence and splitting it into words based on "space"

let words = answer.sentence.trim().split(" ");
console.log(
  chalk.black.bgBlueBright(
    `\n\t\t*** Sentence Words ==> ${chalk.black.bgRed(words)}`
  )
);
console.log(
  chalk.black.bgBlueBright(
    `\n\t\t*** Word count ==> ${chalk.black.bgRed(words.length)}`
  )
);
// program end:
