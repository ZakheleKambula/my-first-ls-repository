console.log("Programming is my world!");
console.log("How to edit your JS code? See the comment below!")

/*Comment:
Step 1
Run the node code command and pass the JavaScript file as an argument:

  code filename.js 

Step 2

  console.log("string"); Thats it!
/*
console.log("How to execute JavaScript code located in a file? See comment below!")
/* 
Two ways of executing JavaScript code located in a file. 

**The node way** 

Step 1

Create a file with a .js extension at the end (e.g., touch my-world.js).

Step 2

Ensure that you are in the parent directory of the .js file. That is, the folder in which the .js file is nested. Run the *code* command (this is a Node command in the terminal0 and pass the file.js as an argument (node filenamehere.js). This will open an editor-like space for code input

Step 3

Type console.log("string text here"); 

Step 4

Return to the terminal, run the node command, and pass filename.js as an argument (node filename.js). This will print out the code saved in filename.js 

**The CLI way** 

Step 1

Navigate to the parent folder where your filename.js is nested. 

Step 2

Run the cat CLI command and pass filename.js as an argument (cat filename. js). This will print the code inside filename.js in the terminal.

*/


/*Code Testing Below*/ 

let name = 'Zee';
let last_name = 'Kambula';
let school = 'Launch School';
let career = 'Professional Software Engineer';
let techstack = 'JavaScript, Node, Git and GitHub';

console.log('My name is', name , last_name, 'and' , 'I am a prospective student at', school + '.');
console.log('My intention is to become a', career + '.');
console.log('My current prep course techstack is', techstack + '.');


let progress = 'Consistency' + '.';




console.log('Daily practice of any skills requires', progress);