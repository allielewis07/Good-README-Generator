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
* [Badges](#Badges)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation ${data.Instructions}
## Usage
${data.Usage}
## License
${data.License}
## Contributors
  ${data.Contributors}
## Badges${data.Badges}
## Tests
  ${data.Tests}
## Questions
[Link to Creator Github](https://github.com/${data.gitUserName})
`)
}
module.exports = generateMarkdown;
