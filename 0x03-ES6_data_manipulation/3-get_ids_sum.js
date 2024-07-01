export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  const idsSum = students.reduce((total, student) => total + student.id, 0);

  return idsSum;
}
