//Function to generate README form
function generateMarkdown(data) {
  return `# ${data.title}
  [GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[Contributing](#contributing)

*[Test](#test)

*[Question](#questions)

*[Installation](#installation)

*[Question](#question)

Install necessary, run command:

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.test} to run the test

## Questions

Any question please contact me at ${data.email}, or my github at ${data.github};
`;
}

//Export generateMarkdown
module.exports = generateMarkdown;
