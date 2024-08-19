const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    // split the data into lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
