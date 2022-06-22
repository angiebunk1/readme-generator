


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "No license") {
    return ''
    
  }

  if (license === "The MIT License") {
  
    return `
    ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    `   
  }
  if (license === "IBM Public License Version 1.0") {
    return `
    ![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)
   `
  }
  if (license === "Mozilla Public License 2.0") {
    return `
    ![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
    `
  }
}



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
-  [Installation](#installation)
-  [Usage](#usage)
-  [License](#license)
-  [Contributing](#contributing)
-  [Tests](#tests)
-  [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License


## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
-  https://github.com/${answers.github}
-  ${answers.email}
-  ${answers.contact}

`;
}

module.exports = generateMarkdown;

// ${renderLicenseSection(license)}
// ${renderLicenseLink(license)}