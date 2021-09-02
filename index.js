// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) => {
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
      writeToFile("test.md", response);
  });
}

// Function call to initialize app
init();
