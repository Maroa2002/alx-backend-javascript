const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      // split the data into lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // removing the header line
      lines.shift();

      // initialize an object to store the field
      const fields = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      const totalStudents = lines.length;
      let output = `Number of students: ${totalStudents}\n`;

      // log the number of students in each filed
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const studentList = fields[field];
          output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
        }
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];

  countStudents(dbPath)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
