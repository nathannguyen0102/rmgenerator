// Import
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//questions on a array
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "write description about your project",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license your project include?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install?",
    default: "npm i",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to test?",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What does user need to know?",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
  {
    type: "input",
    name: "contributin",
    message: "What does the user need to know about contributing?",
    //require input
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please type an input";
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Generating README");
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// Function call to initialize app
init();
