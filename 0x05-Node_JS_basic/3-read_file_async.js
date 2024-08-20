const fs = require('fs');

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
        console.log(`Number of students: ${totalStudents}`);
    
        // log the number of students in each filed
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const studentList = fields[field];
            console.log(
              `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`,
            );
          }
        }

        resolve();
      });
  });
}

module.exports = countStudents;
