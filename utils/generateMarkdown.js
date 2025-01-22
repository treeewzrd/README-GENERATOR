
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
}

// Function to return a link to the license section of the README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  return `- [License](#license)`;
}

// Function to return the license section of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License

This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;

  return `# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${renderLicenseSection(license)}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${github}](https://github.com/${github})
- Email: [${email}](mailto:${email})
`;
}

export default generateMarkdown;
