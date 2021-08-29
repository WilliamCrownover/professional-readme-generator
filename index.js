// Complete: Include packages needed for this application
const generateMarkdown = require( './utils/generateMarkdown' );
const fs = require( 'fs' );
const inquirer = require( 'inquirer' );

// Complete: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the title of your project?',
		name: 'title'
	},
	{
		type: 'input',
		message: 'Describe your project.',
		name: 'description'
	},
	{
		type: 'input',
		message: 'How do you install the program?',
		name: 'installation'
	},
	{
		type: 'input',
		message: 'How do you use this application?',
		name: 'usage'
	},
	{
		type: 'input',
		message: 'What are the guidelines for contributing?',
		name: 'contribute'
	},
	{
		type: 'input',
		message: 'What are the tests for this program?',
		name: 'tests'
	},
	{
		type: 'list',
		message: 'Choose a license for your project.',
		name: 'license',
		choices: ['No License', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
	},
	{
		type: 'input',
		message: 'What is your GitHub username?',
		name: 'username',
	},
	{
		type: 'input',
		message: 'What email should user\'s questions be sent to?',
		name: 'email',
	}
];

// Complete: Create a function to write README file
function writeToFile( fileName, data ) {
	fs.writeFile( `./output/${fileName}`, data, ( err ) => err ? console.error( err ) : console.log( 'Success!' ) );
}

// Complete: Create a function to initialize app
function init() {
	inquirer
		.prompt( questions )
		.then( ( response ) => {
			const markdownString = generateMarkdown( response );
			writeToFile( 'README.md', markdownString );
		} );
}

// Function call to initialize app
init();
