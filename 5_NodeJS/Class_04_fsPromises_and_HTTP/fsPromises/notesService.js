import { promises as fsPromises } from "fs";
import { logMessage } from "./logger.js";

const writeNotesToFile = async (filePath, note) => {
  try {
    const notes = JSON.stringify(note);
    await fsPromises.writeFile(filePath, notes);
    logMessage(`Notes written to file: ${filePath}`);
  } catch (error) {
    await logMessage("\n Failed to write to file: ", error);
  }
};

const readNotes = async (filePath) => {
  try {
    const jsonData = await fsPromises.readFile(filePath, "utf-8");
    const notes = JSON.parse(jsonData);
    return notes;
  } catch (error) {
    await logMessage("\n Error reading notes: ", error);
    return [];
  }
};

const readNoteById = async (filePath, noteId) => {
  const notes = await readNotes(filePath);
  const foundNote = notes.find((note) => note.id === noteId);
  if (!foundNote) {
    await logMessage(`Note with id ${noteId} not found`);
  }
  await logMessage(`Note with id ${noteId} read successfully`);
  return foundNote;
};

const createNote = async (filePath, newNote) => {
  const notes = readNotes(filePath);
  const newNoteId = notes.length + 1;
  const noteToAdd = { id: newNoteId, ...newNote };

  notes.push(noteToAdd);
  await writeNotesToFile(filePath, notes);
  await logMessage(`\n Note with id ${newNoteId} created`);
};

export { writeNotesToFile, readNotes, readNoteById, createNote };

//Todo: Create a function that will update note by id
//Todo: Create a function that will delete note by id
