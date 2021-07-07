//FUNCTIONS
function renderTitle(title) {
  return `# ${title} \n`;
}

function renderDescription(description) {
  return `## Description \n`+
    `${description} \n`;
}

function renderTableOfContents(license) {
  let licenseTemplate;

  // If there was no license selected, the section is excluded from the tabel of contents
  switch (license) {
    case "No License":
      licenseTemplate = "";
      break;
    default:
      licenseTemplate = `* [License](#license) \n`;
  }

  return `## Table of Contents \n`+
    `* [Installation](#installation) \n`+
    `* [Usage](#usage) \n`+
    licenseTemplate +
    `* [Contributing](#contributing) \n`+
    `* [Tests](#tests) \n`+
    `* [Questions](#questions) \n`;
}

function renderInstallation(install) {
  return `## Installation \n`+
    `${install} \n`;
}

function renderUsage(usage) {
  return `## Usage \n`+
    `${usage} \n`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

// Renders the full license badge with working link
function renderLinkedLicenseBadge(license) {
  switch(license) {
    case "No License":
      return "";
    default:
      return `${renderLicenseBadge(license)}${renderLicenseLink(license)} \n\n`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "No License":
      return "";
    default:
      return `## License \n`+
        `This project is covered under the following license. Click the badge for more information. \n\n`+
        `${renderLinkedLicenseBadge(license)}`;
  }
}

function renderContributing(contribute) {
  return `## Contributing \n`+
    `${contribute} \n`;
}

function renderTests(tests) {
  return `## Tests \n`+
    `${tests} \n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTitle(data.title)} \n`+
    `${renderDescription(data.description)} \n`+
    `${renderLinkedLicenseBadge(data.license)}`+
    `${renderTableOfContents(data.license)} \n`+
    `${renderInstallation(data.installation)} \n`+
    `${renderUsage(data.usage)} \n`+
    `${renderLicenseSection(data.license)}`+
    `${renderContributing(data.contribute)} \n`+
    `${renderTests(data.tests)} \n`;
}

module.exports = generateMarkdown;
