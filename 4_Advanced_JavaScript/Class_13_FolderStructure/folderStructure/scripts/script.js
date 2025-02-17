import Student from "../models/student.js";
import CodeStudent from "../models/codeStudent.js";
import {
  printStudents,
  checkIfStudentIsOnCodeAcademy,
} from "../services/studentService.js";

let student = new Student(1, "Milan");

let codeStudent = new CodeStudent(2, "Trajan");

printStudents([student, codeStudent]);
checkIfStudentIsOnCodeAcademy(codeStudent);
checkIfStudentIsOnCodeAcademy(student);
