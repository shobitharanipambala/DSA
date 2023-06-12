// const fs = require("fs");

// function detectLanguage(file) {
//   let content = "";
//   try {
//     content = fs.readFileSync(file, "utf-8");
//   } catch (err) {
//     console.error(err);
//   }
//   const pythonRegex = /^#!.*python/i;
//   const perlRegex = /^#!.*perl/i;
//   const shRegex = /^#!.*sh/i;
//   const rubyRegex = /^#!.*ruby/i;
//   const cppRegex = /^#include\s*<iostream>/i;
//   const cRegex = /^#include\s*<stdio.h>/i;

//   if (pythonRegex.test(content)) {
//     return "Python";
//   } else if (cppRegex.test(content)) {
//     return "C++";
//   } else if (cRegex.test(content)) {
//     return "C";
//   } else {
//     return "Unknown";
//   }
// }


// console.log("Programming language:", detectLanguage(file));



// function detectLanguage(file) {
//     const fs = require("fs");
//     const content = fs.readFileSync(file, "utf-8");
//     if (content.indexOf("function") !== -1) {
//       return "JavaScript";
//     } else if (content.indexOf("class") !== -1) {
//       return "Java";
//     } else if (content.indexOf("def") !== -1) {
//       return "Python";
//     } else {
//       return "Unknown";
//     }
//   }
  

//   const language = detectLanguage(file);
//   console.log(`The script is written in ${language}`);
// }










// function detectLanguage(content) {
//     if (content.indexOf("def") !== -1) {
//       return "Pythons";
//     } 
    
//     else if (content.indexOf("class") !== -1) {
//       return "Java";
//     } 
//     else if (content.indexOf("def") !== -1) {
//       return "Python";
//     } 
//     else {
//       return "Unknown";
//     }
//   }
  
//   let content = "def my_function():\n  print('Hello, World!')";
//   let language = detectLanguage(content);
//   console.log(`The script is written in ${language}`);
  
//   function detectLanguage(file) {
//     var fs = require('fs');
//     var content = fs.readFileSync(file, 'utf8');
//     if (content.includes('function')) {
//         return 'JavaScript';
//     } else if (content.includes('class')) {
//         return 'Java';
//     } else if (content.includes('var')) {
//         return 'TypeScript';
//     } else {
//         return 'Unknown';
//     }
// }

// var language = detectLanguage(file);
// console.log(`The script is written in ${language}`);




function detectLanguage(content) {
    if (content.includes('function')) {
      return 'JavaScript';
    } else if (content.includes('system.prrintln')) {
      return 'Java';
    } else if (content.includes('def')) {
      return 'python';
    } else {
      return 'Unknown';
    }
  }

  function uploadFile() {
    const input = document.querySelector('#upload');
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const content = reader.result;
      const language = detectLanguage(content);
      document.querySelector('#outputBox').innerText = `The script is written in ${language}`;
    };
    reader.readAsText(file);
  }