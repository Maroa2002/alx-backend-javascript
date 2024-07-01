export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const studentsByLocation = students.filter((student) => student.location === city);

  return studentsByLocation;
}
