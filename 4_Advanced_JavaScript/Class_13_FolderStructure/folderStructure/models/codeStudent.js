import Student from "./student.js";

export default class CodeStudent extends Student {
  constructor(id, name) {
    super(id, name);
    this.academy = "Web Development";
  }
}
