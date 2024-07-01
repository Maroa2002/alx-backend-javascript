export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const obj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: obj ? obj.grade : 'N/A',
      };
    });
}
