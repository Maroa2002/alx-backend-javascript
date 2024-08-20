import { promises as fs} from 'fs';

export default async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the databse');
    }

    const fields = {};

    lines.shift(); // removes the header

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
