// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');

//generateMarkdown.js file included
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// Array of questions to prompt in the command-line
const questions = [
    {
        type: 'input',
        name: 'Project_title',
        message: 'Enter your project title:',
        validate: function checkData(name) {
            if (name) {
                return true;
            }
            else {
                console.log('Enter your project title:')
                return false
            }
        },
    },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter your project description:',

      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Enter your project installation instructions:',
        
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Enter the usage of your project: ',
        
      },
      {
        type: 'input',
        name: 'Contribution',
        message: ' How to contribution of your project: ',
        
      },
      {
        type: 'input',
        name: 'Test',
        message: 'How to test your project: ',
    
      },
      {
        type: 'checkbox',
        name: 'License',
        message: 'Choose a license',
        choices: ['MIT', 'Apache', 'GPLv3', 'none'],
        
     },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your github username:' ,
        validate: function checkData(name) 
            {
            if (name) {
                return true;
            }
            else {
                console.log('Enter the github username:')
                return false
            }   
        },
    },
  {
    type: 'input', 
    name: 'Email',
    message: 'Enter your email address:',
    validate: function checkData(name) {
        if (name) {
            return true;
        }
        else {
            console.log('Enter your email address:' )
            return false
        }
    },
},

];
// checkData function to check the required field data is entered or not.
//project title, github, email-id are not optional.

/*function checkData(data){
    if (data) {
        return true;
        
        else {
        console.log('Please the enter the information:')
        return false
        }

}*/

// TODO: Create a function to write README file

// function the write on readme file
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(err)
    })

}

// TODO: Create a function to initialize app

// function main calls the  function generateMarkdown and writetoFile to create the readme.md file and readfromFile to read the data.
function main() {
    inquirer.prompt(questions)
    .then(readmeInput => {
    let readme_data = generateMarkdown(readmeInput);
    writetoFile('./readme/readme.md', readme_data);
    readfromFile();
}); 
}

//readfromFile function will read the data from the readme.md file and display it on commmand line

function readfromFile(){
fs.readFile('./readme/readme.md','utf-8',(error, data) =>
  error ? console.error(error) : console.log(data)
);
}


// Function call to initialize app
main();


