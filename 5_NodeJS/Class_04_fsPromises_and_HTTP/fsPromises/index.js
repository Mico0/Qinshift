import path from "path";
import { fileURLToPath } from "url";
import {
  writeNotesToFile,
  readNotes,
  readNoteById,
  createNote,
} from "./notesService.js";
import { timeStamp } from "console";

const notesFilePath = `.\\data\\notes.json`;

//! Creating path via path module
const currentFileUrl = path.dirname(fileURLToPath(import.meta.url));

// console.log(currentFileUrl);

// console.log(projectPath);

const notesPath = path.join(currentFileUrl, "./data", "notes.json");

console.log(notesPath);

const noteToAdd = {
  title: "Coding notes",
  content: "Learning Node.js and the file system",
  timeStamp: "2025-03-05T08:00:00Z",
};
const notes = await readNoteById(notesPath, 2);

console.log(notes);
