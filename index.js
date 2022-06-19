// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

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
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the intended usage of your project?"
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
    },
    {
        type: "input",
        name: "contributing",
        message: "How can other developers contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are some tests a user can run on your proeject?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "contact",
        message: "What are your contact instructions?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
