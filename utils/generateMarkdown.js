// function to generate markdown for README
function generateMarkdown(data) {
return (`# ${data.title}
# Welcome to ${data.title}: 
## Description
${data.Description}
## Table of Contents
Navigate through the README Using the Table of Contents : 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation ${data.Instructions}
## Usage
${data.Usage}
## License
![badmath](https://img.shields.io/badge/license-${data.license}-green)
## Contributors
${data.Contributors}
## Tests
${data.Tests}
## Questions
[Link to Creator Github](https://github.com/${data.gitUserName})
`)
}
module.exports = generateMarkdown;
