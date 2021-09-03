// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

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
    "Enter Your Email for contact purposes:",
    "Enter Contributors"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let licenseBadge = generateMarkdown.renderLicenseBadge(data.license);
    let licenseLink = generateMarkdown.renderLicenseLink(data.license);
    let licenseText = generateMarkdown.renderLicenseSection(data.license, data.contributors);

    
    let readMe =`# ${data.title} ${licenseBadge}                

## Description
    
${data.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Usage

Instructions and Examples For Use:

${data.usageInfo}

## Contributing

List of Collaborators:

${data.contributors}

## License

${data.license} Link: ${licenseLink}

${licenseText}

## Tests

${data.testInstru}

## Questions

If you have any questions you can contact me at ${data.email}, or find out more information regarding any projects at my [GitHub](${data.github}) page`
      
    fs.writeFile(fileName, readMe, (err) =>
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
      name: 'title',
    },
    {
    type: 'input',
    message: questions[1],
    name: 'description',
    },
    {
    type: 'input',
    message: questions[2],
    name: 'installlation',
    },
    {
    type: 'input',
    message: questions[3],
    name: 'usageInfo',
    },
    {
    type: 'input',
    message: questions[4],
    name: 'constributionGuidelines',
    },
    {
    type: 'input',
    message: questions[5],
    name: 'testInstru',
    },
    {
    type: 'list',
    choices: ["MIT", "Apache", "IBM", "GPLv3", "Other"],
    message: questions[6],
    name: 'license'
    },
    {
    type: 'input',
    message: questions[7],
    name: 'github',
    },
    {
    type: 'input',
    message: questions[8],
    name: 'email',
    },
    {
    type: 'input',
    message: questions[9],
    name: 'contributors',
    },
  ])
  .then((response) => {
    let filename = `${response.title}` + ".md"
    writeToFile(filename, response);
  });
}

// Function call to initialize app
init();
