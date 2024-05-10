#! /usr/bin/env node 
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(50));
console.log(chalk.bold.blue("\n \t Welcome To Word Counter"));
console.log("=".repeat(50));
// prompt user to enter sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Write a Sentence here :",
    }
]);
// Trimming sentence & splitting it into words based on spaces
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log("=".repeat(50));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Words : ${chalk.bold.green(words.length)}`));
console.log("=".repeat(50));
