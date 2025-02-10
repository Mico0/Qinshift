function Academy(
  name,
  students,
  subjects,
  start,
  end,
  NumberOfClasses,
  PrintStudents,
  PrintSubjects
) {
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;

  this.NumberOfClasses = function () {
    return subjects.length * 10;
  };

  this.PrintStudents = function () {
    console.log(this.students);
  };
  this.PrintSubjects = function () {
    console.log(this.subjects);
  };
}

function Subject(
  title,
  NumberOfClasses,
  isElective,
  academy,
  students,
  overrideClasses
) {
  this.title = title;
  this.NumberOfClasses = NumberOfClasses ? 10 : NumberOfClasses;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;
  this.overrideClasses = function (NumberOfClasses) {
    if (NumberOfClasses < 3) {
      NumberOfClasses = 3;
      return NumberOfClasses;
    } else {
      return NumberOfClasses;
    }
  };
}

function Student(
  firstName,
  lastName,
  age,
  completedSubjects = [],
  academy = null,
  currentSubject = null,
  startAcademy,
  startSubject,
  currentSubject
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = completedSubjects;
  this.academy = academy;
  this.currentSubject = currentSubject;
}
