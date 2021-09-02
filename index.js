// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "Enter the Title of the project:",
    "Enter a short Description of the project:",
    "Enter Installation Instructions:",
    "Enter Usage Information:",
    "Enter Contribution Guidelines:",
    "Enter Test Instructions:",
    "What License will you use:",
    "Enter your Github Account:",
    "Enter Your Email for contact purposes:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'Title',
    },
    {
    type: 'input',
    message: questions[1],
    name: 'Description',
    },
    {
    type: 'input',
    message: questions[2],
    name: 'Installlation',
    },
    {
    type: 'input',
    message: questions[3],
    name: 'Usage Info',
    },
    {
    type: 'input',
    message: questions[4],
    name: 'Constribution Guidelines',
    },
    {
    type: 'input',
    message: questions[5],
    name: 'Test Instru',
    },
    {
    type: 'list',
    choices: ["MIT", "WXYZ", "ZTBS"],
    message: questions[6],
    name: 'License'
    },
    {
    type: 'input',
    message: questions[7],
    name: 'Github:',
    },
    {
    type: 'input',
    message: questions[8],
    name: 'Email:',
    },
  ])
  .then((response) => {
    writeToFile("test.md", response);
    //writeToFile("test.md", "Hello");
  });
}

// Function call to initialize app
init();
