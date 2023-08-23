const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask for the text
rl.question('Enter the text which you prefer to bi outputted in the file ', (inputText) => {
  // write the text in the file 'output.txt'
  fs.writeFile('output.txt', inputText, (err) => {
    if (err) {
      console.error('error: ' + err);
      rl.close();
    } else {
      console.log('The text was outputted in the file.txt".');
      
      // read the files and output them
      fs.readFile('output.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('error: ' + err);
        } else {
          console.log('The content of the file "output.txt":\n' + data);
        }
        rl.close();
      });
    }
  });
});
