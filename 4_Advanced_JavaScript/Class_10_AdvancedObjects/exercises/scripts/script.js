function Academy(name, start, end, subjects = [], students = []) {
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;
  this.NumberOfClasses = this.subjects.length * 10;

  this.PrintStudents = function () {
    students.forEach((student) => console.log(student));
  };
  this.PrintSubjects = function () {
    subjects.forEach((subject) => console.log(subject));
  };
}

function Subject(title, academy, students = [], isElective = false) {
  this.title = title;
  this.NumberOfClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;

  this.overrideClasses = function (number) {
    if (number < 3) {
      console.log("Minimum ammount of classes is 3");
    } else {
      this.NumberOfClasses = number;
    }
  };
}

function Student(
  firstName,
  lastName,
  age,
  completedSubjects = [],
  currentSubject = null,
  Academy = null
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = completedSubjects;
  this.Academy = Academy;
  this.currentSubject = currentSubject;

  this.startAcademy = function (academy) {
    this.Academy = academy;
    this.Academy.students.push(`${this.firstName} ${this.lastName}`);
  };

  this.startSubject = function (subject) {
    if (this.Academy && this.Academy.subjects.includes(subject.title)) {
      if (this.currentSubject) {
        this.completedSubjects.push(this.currentSubject);
      }
      this.currentSubject = subject;
      subject.students.push(`${this.firstName} ${this.lastName}`);
    } else {
      console.log("This subject does not exist in the current Academy");
    }
  };
}

let academy = new Academy(
  "Web Programming",
  "11.11.2025",
  "11.11.2026",
  [
    "HTML",
    "CSS",
    "JavaScript - Basic",
    "Advanced JavaScript",
    "NodeJS",
    "C#",
    ".net",
    "React.js",
    "Angular.js",
    "Vue.js",
    "AWS",
    "Next.js",
  ],
  ["Rade Gjorcevski", "Voislav Markovikj", "Petar Petrovski", "Martin Zekoski"]
);

let subject = new Subject("Next.js", academy, [
  "Rade Gjorcevski",
  "Voislav Markovikj",
  "Petar Petrovski",
  "Martin Zekoski",
]);

let student = new Student(
  "Trajan",
  "Stevkoski",
  33,
  ["HTML", "CSS", "JavaScript - Basic", "Advanced JavaScript", "C#", ".net"],
  subject
);

console.log(academy);
academy.PrintStudents();
academy.PrintSubjects();

subject.overrideClasses(25);
console.log(subject);

student.startAcademy(academy);
student.startSubject(subject);

console.log(student);
