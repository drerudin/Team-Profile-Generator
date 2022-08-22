const fs = require('fs');

// writes the file to the html
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
          resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };


module.exports = writeFile;

  