import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const studentsPath = path.join(projectPath, "../data/student.json");

//* 1. Get students

export const getStudents = (queryData) => {
  const students = JSON.parse(
    fs.readFileSync(studentsPath, { encoding: "utf-8" })
  );
  let updatedStudents = [...students];

  if (queryData?.gender) {
    updatedStudents = updatedStudents.filter(
      (x) => x.gender === queryData.gender
    );
  }

  if (queryData?.country) {
    updatedStudents = updatedStudents.filter(
      (x) => x.country === queryData.country
    );
  }

  if (updatedStudents.length <= 0) {
    throw new Error("No students found");
  }

  return updatedStudents;
};

//* 2. Save student data

export const saveStudentData = (students) => {
  fs.writeFileSync(studentsPath, JSON.stringify(students, 0, 2));
};

//* 3. Add students

export const addStudent = (newStudentData) => {
  const students = getStudents();
  const newStudent = {
    id: uuidv4(),
    ...newStudentData,
  };

  const updatedStudents = [...students, newStudent];
  //! same as
  //! students.push(newStudent);

  saveStudentData(updatedStudents);

  return newStudent;
};

export const getStudentById = (id) => {
  const students = getStudents();
  const foundStudent = students.find((x) => x.id === id);
  if (!foundStudent) {
    throw new Error("Did not find any student by ID");
  }
  return foundStudent;
};

export const deleteStudent = (id) => {
  const students = getStudents();
  const updatedStudents = students.filter((student) => student.id !== id);

  if (students.length === updatedStudents.length) {
    throw new Error("Student not found");
  }

  saveStudentData(updatedStudents);
  //   const foundStudent = getStudentById(id);
};

export const updateStudent = (id, updatedData) => {
  // const student = getStudentById(id);
  const students = getStudents();
  const foundStudentIndex = students.findIndex((student) => student.id === id);
  console.log(foundStudentIndex);

  // if student is not found
  if (foundStudentIndex < 0) throw new Error("Student not found.");

  const updatedStudentData = {
    ...students[foundStudentIndex],
    ...updatedData,
  };
  students[foundStudentIndex] = updatedStudentData;
  saveStudentData(students);
  return updatedStudentData;
};
