const inquirer = require("inquirer");
const generateMarkdown = require(".utils/generateMarkdown");

const fs = require("fs");

// array of questions for user
const questions = [
    {
    type:"input",
    message:"What is your Github Username?",
    name:"gitUserName"
}, 
{
    type:"input",
    message:"What  is your project name?",
    name:"title"
},
{
    type:"input",
    message:"Give a brief description of your project",
    name:"Description"
},
{   type:"input",
    message:"Were there any other contributors on this project?",
    name:"contribution"

},
{
    type:"input",
    message:"What are the installation instructions for this project?",
    name:"installation"
},
{
    type:"input"
    message:"What is the usage of this project?"
    name:"projectUsage"
}

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title

];

// function to write README file
function writeFile(fileName, data) {
    const answer = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);
    writeFile(answers.name +".md",htmlstring)
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
