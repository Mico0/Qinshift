import express from "express";
import {
  getStudents,
  saveStudentData,
  addStudent,
  getStudentById,
  deleteStudent,
  updateStudent,
} from "../services/students_service.js";

const router = express.Router();

router.get("/students", (req, res) => {
  const queryData = req.query;
  console.log(queryData);

  try {
    const students = getStudents(queryData);
    res.send(students);
  } catch (error) {
    res.sendStatus(500);
  }
});

//! :id means that the identifier after the : will be replaced by some value
router.get("/students/:id", (req, res) => {
  const studentId = req.params.id;

  try {
    const student = getStudentById(studentId);
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//! Delete student by ID
router.delete("/students/:id", (req, res) => {
  const studentId = req.params.id;

  try {
    const student = deleteStudent(studentId);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//! Add new student
router.post("/students", (req, res) => {
  const newStudentData = req.body;
  console.log(newStudentData);
  try {
    const createdStudent = addStudent(newStudentData);
    res.status(200).send(createdStudent);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//! Update student info
//! Put requests alter the whole object when updating
//! Patch updates only the information in the object that is updated doesnt touch anything else

router.patch("/students/:id", (req, res) => {
  const studentUpdates = req.body;
  const studentId = req.params.id;
  try {
    const updatedStudent = updateStudent(studentId, studentUpdates);
    res.status(200).send(updatedStudent);
  } catch (error) {
    if (error.message === "Student not found.") {
      res.status(404).send({ message: error.message });
    } else {
      res.status(500).send({ message: error.message });
    }
  }
});

export { router };
