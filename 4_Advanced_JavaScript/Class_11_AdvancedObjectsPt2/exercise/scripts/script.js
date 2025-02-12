function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

function Student(firstName, lastName, age, academyName, studentId) {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;

  this.study = function () {
    console.log(
      `The student ${this.firstName} is studying in the ${this.academyName} academy`
    );
  };
}

let student1 = new Student("Milan", "Ognjanoski", 30, "Web Development", 22);
let student2 = new Student("Clifford", "Smith", 22, "QA Testing", 23);

console.log(student1);
student1.study();
student1.getFullName();

console.log(student2);

function DesignStudent(
  firstName,
  lastName,
  age,
  studentId,
  isStudentOfTheMonth = false
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, "Design Academy", studentId)
  );
  this.isStudentOfTheMonth = isStudentOfTheMonth;
  this.attendAdobeExam = function () {
    console.log(`The student ${this.firstName} is doing an adoble exam`);
  };
}

function CodeStudent(
  firstName,
  lastName,
  age,
  studentId,
  hasIndividualProject = false,
  hasGroupProject = false
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, "Code Academy", studentId)
  );
  this.hasIndividualProject = hasIndividualProject;
  this.hasGroupProject = hasGroupProject;

  this.doProject = function (string) {
    if (string === "individual") {
      console.log(
        `${this.firstName} ${this.lastName} is working on an individual project`
      );
      this.hasIndividualProject = true;
    } else if (string === "group") {
      console.log(
        `${this.firstName} ${this.lastName} is working on a group project`
      );
      this.hasGroupProject = true;
    }
  };
}

function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, "Network Academy", studentId)
  );
  this.academyPart = academyPart;
  this.attendCiscoExam = function () {
    console.log(`${this.firstName} ${this.lastName} is doing a cisco exam`);
  };
}

Person.prototype.getAcademy = function (studentObj) {
  console.log(`${this.firstName} ${this.lastName} is in ${this.academyName}`);
};

let code = new CodeStudent("Milan", "Ognjanoski", 30, 1, true, false);
let design = new DesignStudent("Sedat", "Mustafa", 23, 2, true);
let network = new NetworkStudent("Martin", "Zekoski", 29, 3, 3);

console.log("--- Code Student ---");
console.log(code);
code.doProject("group");

console.log("--- Design Student ---");
console.log(design);
design.attendAdobeExam();

console.log("--- Network Student ---");
console.log(network);
network.attendCiscoExam();

code.getAcademy(code);
