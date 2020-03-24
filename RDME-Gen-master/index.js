// Var of Inquirer, fs, and const axios requirements //

var inquirer = require("inquirer");
var fs = require('fs');
const axios = require('axios');



// Infquirer prompts, types, messages, and prompt names // 
 
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github Name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your Projects Title?",
      name: "title"
    },
    {
      type: "input",
      message: "Give your Project a Description.",
      name: "description"
    },
    {
      type: "input",
      message: "Input installation information",
      name: "install"
    },
    {
        type: "input",
        message: "What is the usage info for your project?",
        name: "usage"
      },
      {
        type: "input",
        message: "Your Projects Liscensing.",
        name: "license"
      },
      {
        type: "input",
        message: "What contributions are made for your Project?",
        name: "contributions"
      },
      {
        type: "input",
        message: "Which tests are inside your project?",
        name: "tests"
      },
      {
        type: "input",
        message: "What badge would you like to use?",
        name: "badgelabel"
      },
      {
        type: "input",
        message: "Input a badge message.",
        name: "badgeMsg"
      },
      {
        type: "list",
        message: "What badge color would you like",
        name: "badgeColor",
        choices: ["green", "yellow", "purple", "blue", "red", "orange", "pink"]
      }
    ])


    // Var and functions //
    .then(function(response) {
        var unameInput = response.username;
        var title = response.title;
        var description = response.description;
        var install = response.install;
        var usage = response.usage;
        var license = response.license;
        var contributions = response.contributions;
        var tests = response.tests;   
        var badgeLabel = encodeURIComponent(response.badgeLabel);
        var badgeMsg = encodeURIComponent(response.badgeMsg);
        var badgeColor = response.badgeColor;
        var badgeUrl = `https://img.shields.io/badge/${badgeLabel}-${badgeMsg}-${badgeColor}`;

     
     
     
     
    // Information on the "Get" and axios //
        axios({
          method: 'get',
          url: `https://api.github.com/users/${unameInput}`,
        })
          .then(function(response) {
          var email = response.data.email;
          var profImgUrl = response.data.avatar_url;
          console.log(email);
          console.log(profImgUrl);
        


        
        
        
        
        
        
        
        // The Const stript info of badges, and table of contents, description, write file description. //
        
          const script = ` ![badge image](${badgeUrl} "Project Badge")
# ${title}
***
## Description
${description}
***
## Table of Contents
- Installation
- Usage
- Licensing Info
- Contributions
- Tests
- Creator Info
***
## Installation Requirements
${install}
***
## Usage
${usage}
***
## Licensing Info
${license}
***
## Contributions
${contributions}
***
## Tests
${tests}
***
## Github Creator Info
![profile image](${profImgUrl} "Logo Title Text 1")
${email}`
        

        fs.writeFile("README.md", script, function(err) {
              
                if (err) {
                    return console.log(err);
                    }
                      
                    console.log('README.md file successfully created!');
                      
        });
      });
    }
    
);






function init() {
    
}

init();
