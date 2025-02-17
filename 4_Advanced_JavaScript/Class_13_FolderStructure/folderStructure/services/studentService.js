import CodeStudent from "../models/codeStudent.js";

function printStudents(students) {
  for (let student of students) {
    console.log(student);
  }
}

function checkIfStudentIsOnCodeAcademy(student) {
  if (student instanceof CodeStudent) {
    console.log(student);
  } else {
    console.log("It is not a code student");
  }
}

export { printStudents, checkIfStudentIsOnCodeAcademy };
