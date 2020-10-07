const inquirer = require("inquirer");
const generateMarkdown = require("utils/generateMarkdown.js");


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
    type:"input",
    message:"What is the usage of this project?",
    name:"projectUsage"
},{
    type:"checkbox",
    message:"Select a license",
    options:["apache-2.0","MIT","ISC","GPL-License","LGL-License"],
    name:"License"
},{
    type:"input",
    message:"Have you put your project through any tests? If so what tests?",
    name:"Test"
}

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title

];

// function to write README file
function writeToFile (data) {
    try  { fs.writeFile("README.MD",data)
}
    catch (err){
        console.log (err);
    }
}
function init() {
    const answers =await inquirer.prompt(questions);
const htmlString = generateMarkdown(answers);
writeToFile(answers.name+ "README.md", htmlString)
}

// function to initialize program
writeToFile(userAnswers)
init();