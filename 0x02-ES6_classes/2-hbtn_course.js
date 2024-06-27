export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string'
        || typeof length !== 'number'
        || !Array.isArray(students)
    ) {
      throw new TypeError('Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter for name property
  get name() {
    return this._name;
  }

  // setter for name property
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // getter for length property
  get length() {
    return this._length;
  }

  // setter for length property
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // getter for students property
  get students() {
    return this._students;
  }

  // setter for students property
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array of strings.');
    }
    this._students = newStudents;
  }
}
