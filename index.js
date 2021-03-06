const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("/Users/allisonlewis/development/Homework/Good-README-Generator/utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
    type:"input",
    message:"What is your Github Username?",
    name:"gitUserName"
}, 
{
    type:"input",
    message:"What is your project name?",
    name:"Title"
},
{
    type:"input",
    message:"Give a brief description of your project",
    name:"Description"
},
{   type:"input",
    message:"We're there any other contributors on this project?",
    name:"Contributors"

},
{
    type:"input",
    message:"What are the installation instructions for this project?",
    name:"Installation"
},
{
    type:"input",
    message:"What is the usage of this project?",
    name:"Usage"
},{
    name:"License"
},{
    type:"input",
    message:"Have you put your project through any tests? If so what tests?",
    name:"Tests"
}

];

// function to write README file
async function writeToFile(data) {
    try {
        fs.writeFileSync("/Users/allisonlewis/development/Homework/Good-README-Generator/README.md", data)
    }
    catch (err){}
}
// function to initialize program
async function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const createFile = generateMarkdown(response);
            writeToFile(createFile);
        })
}
// function call to initialize program
init();