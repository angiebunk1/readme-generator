// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: [
            "The MIT License",
            "IBM Public License Version 1.0",
            "Mozilla Public License 2.0"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function generateMarkdown(answers) {
    return `# ${answers.title}

## Description
${answers.description}

## License
${answers.license}
  
  `;
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const readme = generateMarkdown(answers);

        console.log(readme);

        fs.writeFile("./README.md", readme, () => {
            console.log("Successfully created README!")
        })
      })

}

// Function call to initialize app
init();
